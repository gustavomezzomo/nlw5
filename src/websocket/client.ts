import { io } from '../http'

io.on("connect", (socket) => {
    socket.on("client_first_access", params => {
        console.log(params);

        //salvar a conecxao com socket_id, user_id
    });
});