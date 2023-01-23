import {promises as fs} from "fs";
import {Messages, MessagesPost} from "./types";
import {randomUUID} from "crypto";

const filename = 'db.json';
let dataDb:Messages[] = [];


const fileDb = {
  async init() {
    try {
      const fileContent = await fs.readFile(filename);
      dataDb = JSON.parse(fileContent.toString());

    }catch (e) {
      dataDb = [];
    }
  },

  async getMessages() {
    return dataDb
  },

  async postMessage(message: MessagesPost) {
    const date = new Date();
    const id = randomUUID();
    const datetime = date.toISOString();

    const newMessage:Messages = {
      id,
      datetime,
      ...message
    };

    dataDb.push(newMessage);
    await this.save();
    return newMessage;
  },

  async save() {
    return fs.writeFile(filename, JSON.stringify(dataDb.slice(Math.max(dataDb.length - 30, 0))));
  }
};

export default fileDb;