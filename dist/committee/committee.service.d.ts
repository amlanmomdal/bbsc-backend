import { Model } from 'mongoose';
import { Committee, CommitteeDocument } from '../schemas/committee.schema';
import { CreateCommitteeDto } from './dto/create-committee.dto';
import { UpdateCommitteeDto } from './dto/update-committee.dto';
export declare class CommitteeService {
    private committeeModel;
    constructor(committeeModel: Model<CommitteeDocument>);
    private unlinkPhotoFile;
    findAll(): Promise<Committee[]>;
    findOne(id: string): Promise<Committee>;
    create(dto: CreateCommitteeDto): Promise<Committee>;
    update(id: string, dto: UpdateCommitteeDto): Promise<Committee>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
