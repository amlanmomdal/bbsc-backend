import { Model } from 'mongoose';
import { AuthOtpDocument } from '../schemas/auth-otp.schema';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
export declare class AuthService {
    private authOtpModel;
    private readonly logger;
    private readonly STATIC_ADMIN_EMAIL;
    private readonly JWT_SECRET;
    constructor(authOtpModel: Model<AuthOtpDocument>);
    generateJwt(payload: any, expiresInSeconds?: number): string;
    verifyJwt(token: string): any;
    sendOtp(dto: SendOtpDto): Promise<{
        success: boolean;
        message: string;
        devOtp: string;
        expiresInSeconds: number;
    }>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        success: boolean;
        message: string;
        accessToken: string;
        user: {
            email: string;
            name: string;
            role: string;
            avatar: string;
        };
    }>;
    getProfile(email: string): {
        email: string;
        name: string;
        role: string;
        avatar: string;
    };
}
