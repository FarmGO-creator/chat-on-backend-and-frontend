import express from "express";
import messagesExpress from "./routes/messages";
import cors from 'cors';
import fileDb from "./fileDb";

const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use('/messages', messagesExpress);

const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log('Server: ', port);
  });
}

run().catch(console.error);