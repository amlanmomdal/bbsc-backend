import { Document } from 'mongoose';
export type CommitteeDocument = Committee & Document;
export declare class Committee {
    name: string;
    role: string;
    photo: string;
    contact: string;
}
export declare const CommitteeSchema: import("mongoose").Schema<Committee, import("mongoose").Model<Committee, any, any, any, Document<unknown, any, Committee, any, {}> & Committee & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Committee, Document<unknown, {}, import("mongoose").FlatRecord<Committee>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Committee> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
