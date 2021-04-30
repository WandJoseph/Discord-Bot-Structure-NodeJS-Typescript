import * as Discord from "discord.js";

export interface IDefaultMessageCommandDTO {
  content: string;
  channel: Discord.TextChannel;
  author: Discord.User;
}

export interface IDefaultMessageCommand {
  execute(data: IDefaultMessageCommandDTO): Promise<void>;
}
