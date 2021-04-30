import * as Discord from "discord.js";
import { dotenv } from "./config/dotEnv";

import { CheckPing } from "./useCases/General/CheckPing";

import { MessageHandler } from "./MessageHandler";
dotenv();

const client = new Discord.Client();
client.on("message", async message => {
  if (message.author == client.user) {
    return;
  }
  const messageHandler = new MessageHandler();
  messageHandler.subscribe("ping", CheckPing);
  messageHandler.handle(message);
});

client.login(process.env.BOT_TOKEN);
