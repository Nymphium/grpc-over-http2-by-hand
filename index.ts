import * as H2 from 'http2';
import * as EchoService from './echo-service';

const server = H2.createServer((request, response) => {
    console.log(JSON.stringify(request.headers));
    switch (`${request.headers[':method']}${request.headers[':path']}`) {
        case 'POST/services.Echo/Call':
            return EchoService.call(request, response);
    }
});

const port = 50051;
server.listen(port, () => {
    console.log(`listen on localhost:${port}`);
});
