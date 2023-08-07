import { io } from 'socket.io-client'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    const hostIP = 'localhost'
    const socket = io(`ws://${hostIP}:4000`)

    socket.emit('message', 'My name is Abhinav')
    res.send('done')
})

app.listen(4001, () => {
    console.log('Listening on 4001');
})  