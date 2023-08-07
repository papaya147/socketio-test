import { Server } from "socket.io";

const io = new Server(4000)

io.on('connection', (socket) => {
    console.log('Someone connected')

    socket.on('message', (arg) => {
        console.log(arg)
    })
})