import * as H2 from 'http2';
import * as Echo from './pb/echo_pb';
import * as HexData from './hexdata';

const decodeEchoRequest = (msg: string) => Echo.EchoRequest.deserializeBinary(HexData.fromString(msg));

export const call = (request: H2.Http2ServerRequest, response: H2.Http2ServerResponse) => {
    const chunks: Buffer[] = [];

    request.on('data', (chunk: Buffer) => chunks.push(chunk));
    request.on('end', () => {
        const echoRequest = decodeEchoRequest(chunks.join().substring(5));
        const echoResponse = new Echo.EchoResponse();
        echoResponse.setMessage(echoRequest.getMessage());
        const msg = echoResponse.serializeBinary();
        const len = HexData.fromByte(msg.length);
        const compression = HexData.fromBit(false);
        const responseBody = HexData.toString(compression, len, msg);
        response.writeHead(200, { 'content-type': 'application/grpc+proto' });
        response.write(responseBody);
        response.addTrailers({ 'grpc-status': 0 });
        response.end();
    });
};
