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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs = require("fs");
const gallery_service_1 = require("./gallery.service");
const create_gallery_dto_1 = require("./dto/create-gallery.dto");
const update_gallery_dto_1 = require("./dto/update-gallery.dto");
const public_decorator_1 = require("../auth/public.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'gallery');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = (0, path_1.extname)(file.originalname);
            cb(null, `gallery-image-${uniqueSuffix}${ext}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif|svg|webp)$/)) {
            cb(null, true);
        }
        else {
            cb(new common_1.BadRequestException('Only image files (JPG, PNG, GIF, SVG, WEBP) are allowed!'), false);
        }
    },
};
let GalleryController = class GalleryController {
    constructor(galleryService, cloudinaryService) {
        this.galleryService = galleryService;
        this.cloudinaryService = cloudinaryService;
    }
    async findAll(category, tag) {
        const filterTag = category || tag;
        const data = await this.galleryService.findAll(filterTag);
        return { success: true, count: data.length, data };
    }
    async findOne(id) {
        const data = await this.galleryService.findOne(id);
        return { success: true, data };
    }
    async uploadImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('Please select a gallery image file to upload.');
        }
        const fileUrl = await this.cloudinaryService.uploadFile(file, 'gallery');
        return {
            success: true,
            message: 'Gallery image file uploaded successfully.',
            url: fileUrl,
            filename: file.filename || file.originalname,
        };
    }
    async create(dto, file) {
        let imagePath = dto.image;
        if (file) {
            imagePath = await this.cloudinaryService.uploadFile(file, 'gallery');
        }
        const data = await this.galleryService.create({
            ...dto,
            image: imagePath || '/images/kali_puja.jpg',
        });
        return { success: true, message: 'Gallery photo added successfully.', data };
    }
    async update(id, dto, file) {
        let imagePath = dto.image;
        if (file) {
            imagePath = await this.cloudinaryService.uploadFile(file, 'gallery');
        }
        const data = await this.galleryService.update(id, {
            ...dto,
            ...(imagePath ? { image: imagePath } : {}),
        });
        return { success: true, message: 'Gallery photo updated successfully.', data };
    }
    async remove(id) {
        return this.galleryService.remove(id);
    }
};
exports.GalleryController = GalleryController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('tag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multerConfig)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gallery_dto_1.CreateGalleryDto, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gallery_dto_1.UpdateGalleryDto, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "remove", null);
exports.GalleryController = GalleryController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService,
        cloudinary_service_1.CloudinaryService])
], GalleryController);
//# sourceMappingURL=gallery.controller.js.map