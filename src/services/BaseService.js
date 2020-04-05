import request from 'superagent';

import MockServer from '../lib/MockServer';
import config from '../config.js'

const notImplementedTemplates = [
    '/appointments',
    '/directory',
    '/authentication',
    '/events',
    '/employees'
];

function onSuccess(response) {
    const parsed = JSON.parse(response);
    const body = parsed.body;
    const status = parsed.statusCode;
    if ((status === 200 || status === 201) && body.success === true ){
        return body
    } else {
        throw new Error(status);
    }
}

function onFailure(response) {
    const status = response.status;
    throw new Error(status);
}

export default class BaseServer {
    request(requestParams){

        const remoteIsEnabled = config.remote.isEnabled;
        const isNotImplemented = notImplementedTemplates.find((template) => {
            return (requestParams.url.includes(template))
        });

        if (!remoteIsEnabled || isNotImplemented) {
            return MockServer.service({
                method: 'GET',
                url: null,
                body: null,
                params: null,
                ...requestParams
            }).then(onSuccess, onFailure)
        }

        else {
            const {
                method,
                url,
                body,
                type,
                headers,
                params,
                ...otherParams
            } = requestParams;
            const URL = `${config.remote.url}${url}`;

            let req = request(method, URL)
                .type(type)
                .set(headers).query(params)
                .send(body)
                .timeout({response: config.responseTimeout});


            return req.then(onSuccess, onFailure)
        }
    }
}