import { Document } from 'mongoose';
export type WinnerDocument = Winner & Document;
export declare class Winner {
    year: string;
    competitionId: number;
    competitionTitle: string;
    subCategory: string;
    rank: number;
    rankLabel: string;
    winnerName: string;
    ageGroup: string;
    photo: string;
    remarks: string;
}
export declare const WinnerSchema: import("mongoose").Schema<Winner, import("mongoose").Model<Winner, any, any, any, Document<unknown, any, Winner, any, {}> & Winner & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Winner, Document<unknown, {}, import("mongoose").FlatRecord<Winner>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Winner> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
