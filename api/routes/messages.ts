import express from 'express';
import fileDb from "../fileDb";
import {MessagesPost} from "../types";

const messagesExpress = express.Router();

messagesExpress.get('/', async (req, res) => {
  const messages = await fileDb.getMessages();
  res.send(messages);
});

messagesExpress.post('/', async (req, res) => {
  const message:MessagesPost = {
    author: req.body.author,
    message: req.body.message,
  };

  const saveMessage = await fileDb.postMessage(message);

  res.send(saveMessage);

});

export default messagesExpress;