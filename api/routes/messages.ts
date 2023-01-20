import express from 'express';

const messagesExpress = express.Router();

messagesExpress.get('/', (req, res) => {
  res.send('Сообщения');
});

messagesExpress.post('/', (req, res) => {
  res.send('Отправить')
});

export default messagesExpress;