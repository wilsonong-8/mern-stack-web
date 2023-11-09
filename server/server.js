import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//imports for socket.io
import { Server } from 'socket.io';
import 'express-async-errors';

//database and authenticate
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js';
import advertRouter from './routes/advertRoutes.js';
import bankerRouter from './routes/bankerRoutes.js';
import agentRouter from './routes/agentRoutes.js';
import conversationRouter from './routes/conversationRoutes.js';
import messageRouter from './routes/messageRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';
import fileUpload from 'express-fileupload';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const _dirname = dirname(fileURLToPath(import.meta.url));

//only when deploying
if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.resolve(_dirname, '../client/build')));
}

const corsURL = process.env.CORS_URL.split(',');

const corsOptions = {
  origin: corsURL,
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(express.json());
/*
FILE UPLOAD 
*/
app.use(express.static('./public'));
app.use(fileUpload());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/advert', authenticateUser, advertRouter);
app.use('/api/v1/mortgage-banker', authenticateUser, bankerRouter);
app.use('/api/v1/property-agent', authenticateUser, agentRouter);
app.use('/api/v1/conversation', conversationRouter);
app.use('/api/v1/message', messageRouter);

//only when deploying
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, '../client/build', 'index.html'));
  });
  }

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5100;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    const server = app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

    // Initialize Socket.IO and attach it to the server
    const io = new Server(server, {
      cors: corsOptions,
    });

    let users = [];

    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };

    const removeUser = (socketId) => {
      users = users.filter((user) => user.socketId != socketId);
    };

    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    };

    io.on('connection', (socket) => {
      console.log('A user connected');
      socket.on('addUser', (userId) => {
        addUser(userId, socket.id);
        io.emit('getUsers', users);
      });

      socket.on('sendMessage', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user?.socketId).emit('getMessage', {
          senderId,
          text,
        });
      });

      socket.on('disconnect', () => {
        console.log('A user has disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

start();
