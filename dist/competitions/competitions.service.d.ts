import { Model } from 'mongoose';
import { Competition, CompetitionDocument } from '../schemas/competition.schema';
import { CreateCompetitionDto } from './dto/create-competition.dto';
export declare class CompetitionsService {
    private competitionModel;
    constructor(competitionModel: Model<CompetitionDocument>);
    private unlinkIconFile;
    findAll(): Promise<Competition[]>;
    findOne(id: string): Promise<Competition>;
    create(dto: CreateCompetitionDto): Promise<Competition>;
    update(id: string, dto: CreateCompetitionDto): Promise<Competition>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
