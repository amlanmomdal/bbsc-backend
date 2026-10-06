import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { EventDocument } from '../schemas/event.schema';
import { WinnerDocument } from '../schemas/winner.schema';
import { GalleryDocument } from '../schemas/gallery.schema';
import { CommitteeDocument } from '../schemas/committee.schema';
import { CompetitionDocument } from '../schemas/competition.schema';
export declare class SeedService implements OnModuleInit {
    private eventModel;
    private winnerModel;
    private galleryModel;
    private committeeModel;
    private competitionModel;
    private readonly logger;
    constructor(eventModel: Model<EventDocument>, winnerModel: Model<WinnerDocument>, galleryModel: Model<GalleryDocument>, committeeModel: Model<CommitteeDocument>, competitionModel: Model<CompetitionDocument>);
    onModuleInit(): Promise<void>;
    private seedInitialData;
}
