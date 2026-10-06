import { Document } from 'mongoose';
export type AuthOtpDocument = AuthOtp & Document;
export declare class AuthOtp {
    email: string;
    otp: string;
    expiresAt: Date;
}
export declare const AuthOtpSchema: import("mongoose").Schema<AuthOtp, import("mongoose").Model<AuthOtp, any, any, any, Document<unknown, any, AuthOtp, any, {}> & AuthOtp & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AuthOtp, Document<unknown, {}, import("mongoose").FlatRecord<AuthOtp>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AuthOtp> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
