import { Document } from 'mongoose';
export type MembershipDocument = Membership & Document;
export declare class Membership {
    fullName: string;
    email: string;
    phone: string;
    age: number;
    occupation: string;
    address: string;
    status: string;
    date: string;
}
export declare const MembershipSchema: import("mongoose").Schema<Membership, import("mongoose").Model<Membership, any, any, any, Document<unknown, any, Membership, any, {}> & Membership & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Membership, Document<unknown, {}, import("mongoose").FlatRecord<Membership>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Membership> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
