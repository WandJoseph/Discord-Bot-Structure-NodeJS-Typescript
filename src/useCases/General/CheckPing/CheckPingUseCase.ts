import {
  IDefaultMessageCommand,
  IDefaultMessageCommandDTO,
} from "~entities/IDefaultMessageCommand";

export class CheckPingUseCase implements IDefaultMessageCommand {
  constructor() {}
  async execute(data: IDefaultMessageCommandDTO): Promise<void> {
    const { author, channel, content } = data;
    await channel.send(`<@${author}> pong`);
  }
}
