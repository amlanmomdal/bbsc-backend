"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CloudinaryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const dotenv = require("dotenv");
const streamifier = require("streamifier");
const fs = require("fs");
const path = require("path");
let CloudinaryService = CloudinaryService_1 = class CloudinaryService {
    constructor() {
        this.logger = new common_1.Logger(CloudinaryService_1.name);
        this.isConfigured = false;
        dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });
        dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });
        const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'dacdtdpdb';
        const apiKey = process.env.CLOUDINARY_API_KEY || '345744774413855';
        const apiSecret = process.env.CLOUDINARY_API_SECRET || 'hTm8T5qMOoc-JLgwUddyXtGFslA';
        const cloudinaryUrl = process.env.CLOUDINARY_URL;
        if (cloudinaryUrl || (cloudName && apiKey && apiSecret)) {
            if (cloudinaryUrl) {
                cloudinary_1.v2.config();
            }
            else {
                cloudinary_1.v2.config({
                    cloud_name: cloudName,
                    api_key: apiKey,
                    api_secret: apiSecret,
                    secure: true,
                });
            }
            this.isConfigured = true;
            this.logger.log(`⚡ Cloudinary Service initialized successfully (Cloud: ${cloudName || 'CLOUDINARY_URL'})`);
        }
        else {
            this.logger.warn(`⚠️ Cloudinary credentials (CLOUDINARY_CLOUD_NAME / CLOUDINARY_URL) not found in env. Falling back to local /uploads storage.`);
        }
    }
    async uploadFile(file, folder = 'bbsc') {
        if (!file) {
            return '';
        }
        if (this.isConfigured) {
            try {
                if (file.buffer) {
                    return await new Promise((resolve, reject) => {
                        const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                            folder: `bbsc/${folder}`,
                            resource_type: 'auto',
                        }, (error, result) => {
                            if (error) {
                                this.logger.error('Cloudinary stream upload error:', error);
                                return reject(error);
                            }
                            resolve(result.secure_url);
                        });
                        streamifier.createReadStream(file.buffer).pipe(uploadStream);
                    });
                }
                else if (file.path && fs.existsSync(file.path)) {
                    const result = await cloudinary_1.v2.uploader.upload(file.path, {
                        folder: `bbsc/${folder}`,
                        resource_type: 'auto',
                    });
                    try {
                        await fs.promises.unlink(file.path);
                    }
                    catch (e) { }
                    return result.secure_url;
                }
            }
            catch (err) {
                this.logger.error(`Cloudinary upload failed: ${err?.message || err}. Falling back to local file path.`);
            }
        }
        if (file.filename) {
            return `/uploads/${folder}/${file.filename}`;
        }
        return '';
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = CloudinaryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map