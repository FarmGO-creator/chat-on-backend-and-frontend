import express from 'express';
import fileDb from "../fileDb";
import {MessagesPost} from "../types";

const messagesExpress = express.Router();

messagesExpress.get('/', async (req, res) => {
  const messages = await fileDb.getMessages();
  const queryDate = req.query.datetime as string;
  const date = new Date(queryDate);

  if (queryDate === undefined || queryDate.length === 0) {
    res.send(messages.slice(Math.max(messages.length - 30, 0)));

  } else {

    if (isNaN(date.getDate())) {
      return res.status(400).send({error: 'Введите правильную дату !'})
    }

    const filterMessages = messages.filter((message) => message.datetime > queryDate);

    res.send(filterMessages);
  }


});

messagesExpress.post('/', async (req, res) => {
  if (req.body.author === '' || req.body.message === '') {
    return res.status(400).send({error: 'Ошибка 404'});
  }

  const message:MessagesPost = {
    author: req.body.author,
    message: req.body.message,
  };

  const saveMessage = await fileDb.postMessage(message);

  res.send(saveMessage);

});

export default messagesExpress;