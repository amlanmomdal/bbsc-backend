import { CommitteeService } from './committee.service';
import { CreateCommitteeDto } from './dto/create-committee.dto';
import { UpdateCommitteeDto } from './dto/update-committee.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class CommitteeController {
    private readonly committeeService;
    private readonly cloudinaryService;
    constructor(committeeService: CommitteeService, cloudinaryService: CloudinaryService);
    findAll(): Promise<{
        success: boolean;
        count: number;
        data: import("../schemas/committee.schema").Committee[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("../schemas/committee.schema").Committee;
    }>;
    uploadPhoto(file: any): Promise<{
        success: boolean;
        message: string;
        url: string;
        filename: any;
    }>;
    create(dto: CreateCommitteeDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/committee.schema").Committee;
    }>;
    update(id: string, dto: UpdateCommitteeDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/committee.schema").Committee;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
