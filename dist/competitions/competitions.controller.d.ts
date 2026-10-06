import { CompetitionsService } from './competitions.service';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class CompetitionsController {
    private readonly competitionsService;
    private readonly cloudinaryService;
    constructor(competitionsService: CompetitionsService, cloudinaryService: CloudinaryService);
    findAll(): Promise<{
        success: boolean;
        data: import("../schemas/competition.schema").Competition[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("../schemas/competition.schema").Competition;
    }>;
    uploadIcon(file: any): Promise<{
        success: boolean;
        message: string;
        url: string;
        filename: any;
    }>;
    create(dto: CreateCompetitionDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/competition.schema").Competition;
    }>;
    update(id: string, dto: CreateCompetitionDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/competition.schema").Competition;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
