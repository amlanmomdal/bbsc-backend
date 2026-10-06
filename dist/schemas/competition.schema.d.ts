import { Document } from 'mongoose';
export type CompetitionDocument = Competition & Document;
export declare class Competition {
    title: string;
    icon: string;
}
export declare const CompetitionSchema: import("mongoose").Schema<Competition, import("mongoose").Model<Competition, any, any, any, Document<unknown, any, Competition, any, {}> & Competition & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Competition, Document<unknown, {}, import("mongoose").FlatRecord<Competition>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Competition> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
