import { Model } from 'mongoose';
import { Event, EventDocument } from '../schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<EventDocument>);
    private unlinkImageFile;
    private parseDateFields;
    findAll(): Promise<Event[]>;
    findOne(id: string): Promise<Event>;
    create(dto: CreateEventDto): Promise<Event>;
    update(id: string, dto: UpdateEventDto): Promise<Event>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
