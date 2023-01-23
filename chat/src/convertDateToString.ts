import dayjs from "dayjs";
import {MessageTypeFetch} from "./types";

const convert = (message: MessageTypeFetch) => {
  let date = dayjs(message.datetime).format('DD/MM/YYYY');
  let time = `${dayjs(message.datetime).hour()}:${dayjs(message.datetime).minute()}`;


  if (dayjs(message.datetime).date() === dayjs().date() - 1) {
    date = 'Вчера ' + time;
  } else if (dayjs(message.datetime).date() !== dayjs().date() - 1) {
    date = 'Сегодня ' + time;
  }

  if (dayjs(message.datetime).year() === dayjs().year() - 1) {
    date = 'Год ' + time;
  }

  if (dayjs(message.datetime).date() === dayjs().date() - 3) {
    date = dayjs(message.datetime).format('DD/MM/YYYY');
  }

  return date
}

export default convert