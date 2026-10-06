import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class EventsController {
    private readonly eventsService;
    private readonly cloudinaryService;
    constructor(eventsService: EventsService, cloudinaryService: CloudinaryService);
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: import("../schemas/event.schema").Event[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("../schemas/event.schema").Event;
    }>;
    uploadImage(file: any): Promise<{
        success: boolean;
        message: string;
        url: string;
        filename: any;
    }>;
    create(dto: CreateEventDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/event.schema").Event;
    }>;
    update(id: string, dto: UpdateEventDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/event.schema").Event;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
