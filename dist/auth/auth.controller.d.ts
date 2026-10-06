import { AuthService } from './auth.service';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
