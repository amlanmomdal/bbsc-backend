export declare class CloudinaryService {
    private readonly logger;
    private isConfigured;
    constructor();
    uploadFile(file: any, folder?: string): Promise<string>;
}
