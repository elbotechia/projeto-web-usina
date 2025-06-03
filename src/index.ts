import {Server} from './models/server';

const main = async()=>{
const server = await new Server();
server.listen();
}

main()