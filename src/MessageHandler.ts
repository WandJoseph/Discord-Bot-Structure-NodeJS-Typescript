import {
  IDefaultMessageCommand,
  IDefaultMessageCommandDTO,
} from "~entities/IDefaultMessageCommand";
import * as Discord from "discord.js";

export class MessageHandler {
  private commands: {
    [key: string]: IDefaultMessageCommand;
  };
  constructor() {
    this.commands = {};
  }
  subscribe(key: string, command: IDefaultMessageCommand) {
    this.commands[key] = command;
  }
  async handle(message: Discord.Message): Promise<void> {
    const { content } = message;
    const command_key = content.split(" ")[0];
    try {
      const command = this.commands[command_key];
      await command.execute({
        author: message.author,
        channel: message.channel as Discord.TextChannel,
        content: message.content,
      });
    } catch (error) {
      message.channel.send("Invalid Key");
    }
  }
}
