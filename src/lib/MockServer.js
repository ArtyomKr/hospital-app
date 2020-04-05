import AppointmentController from './controllers/AppointmentsController';
import DirectoryController from './controllers/DirectoryController';
import AuthenticationController from './controllers/AuthenticationController';
import EventsController from './controllers/EventsController';
import EmployeesController from './controllers/EmployeesController';

const DELAY = 1000;

const AppointmentPath = AppointmentController.getPath();
const DirectoryPath = DirectoryController.getPath();
const AuthenticationPath = AuthenticationController.getPath();
const EventsPath = EventsController.getPath();
const EmployeesPath = EmployeesController.getPath();

const ROUTING = new Map([
    [AppointmentPath, AppointmentController],
    [DirectoryPath, DirectoryController],
    [AuthenticationPath, AuthenticationController],
    [EventsPath, EventsController],
    [EmployeesPath, EmployeesController]
]);

function getSuccessResponse(data){
    const body = { success: true };

    if (data) {
        body.data = data;
    }

    const response = {
        body,
        statusCode: 200
    };

    return JSON.stringify(response)
}

function getFailureResponse(error = 'error', message = 'Undefined error', statusCode = 500){
    const body = {
        success: false,
        error: {
            error,
            message
        }
    };

    const response = {
        body,
        statusCode
    };

    return JSON.stringify(response)
}

class MockServer {
    service(request){
        return (new Promise((resolve) => {
                const { url } = request;

                setTimeout(() => {

                    ROUTING.forEach((controller, path) => {
                        if (url.includes(path)) {
                            if(controller) resolve(getSuccessResponse(controller.handle(request)));
                            else resolve(getFailureResponse('resource not found', "Couldn't find resource"));
                        }
                    })
                }, DELAY)
            })
        )
    }
}
export default new MockServer();