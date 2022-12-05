import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
export declare class AppService {
    private chatRepository;
    constructor(chatRepository: Repository<Chat>);
    getHello(): string;
    createMessage(chat: Chat): Promise<Chat>;
    getMessages(): Promise<Chat[]>;
}
