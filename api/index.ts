import express from "express";
import messagesExpress from "./routes/messages";
import cors from 'cors';

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use('/messages', messagesExpress);


app.listen(port, () => {
  console.log('Server: ', port);
});