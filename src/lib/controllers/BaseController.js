import UrlPattern from 'url-pattern';

export default class BaseController {
    getPath(){
        return('')
    }
    getHandlers(){
        return([])
    }
    handle(request){
        const { url, params } = request;
        const handlers = this.getHandlers();
        let result = null;


        handlers.forEach(({path, handler}) => {
            const pattern = new UrlPattern(this.getPath() + path);
            const pathSegment = pattern.match(url);

            if (pathSegment) result = (handler({pathSegment, params}));
        });
        return result
    }
}