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
exports.CommitteeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs = require("fs");
const committee_service_1 = require("./committee.service");
const create_committee_dto_1 = require("./dto/create-committee.dto");
const update_committee_dto_1 = require("./dto/update-committee.dto");
const public_decorator_1 = require("../auth/public.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'committee');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = (0, path_1.extname)(file.originalname);
            cb(null, `committee-photo-${uniqueSuffix}${ext}`);
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
let CommitteeController = class CommitteeController {
    constructor(committeeService, cloudinaryService) {
        this.committeeService = committeeService;
        this.cloudinaryService = cloudinaryService;
    }
    async findAll() {
        const data = await this.committeeService.findAll();
        return { success: true, count: data.length, data };
    }
    async findOne(id) {
        const data = await this.committeeService.findOne(id);
        return { success: true, data };
    }
    async uploadPhoto(file) {
        if (!file) {
            throw new common_1.BadRequestException('Please select a committee member photo file to upload.');
        }
        const fileUrl = await this.cloudinaryService.uploadFile(file, 'committee');
        return {
            success: true,
            message: 'Committee member photo uploaded successfully.',
            url: fileUrl,
            filename: file.filename || file.originalname,
        };
    }
    async create(dto, file) {
        let photoPath = dto.photo || dto.image;
        if (file) {
            photoPath = await this.cloudinaryService.uploadFile(file, 'committee');
        }
        const data = await this.committeeService.create({
            ...dto,
            photo: photoPath || '',
        });
        return { success: true, message: 'Executive Committee member added successfully.', data };
    }
    async update(id, dto, file) {
        let photoPath = dto.photo || dto.image;
        if (file) {
            photoPath = await this.cloudinaryService.uploadFile(file, 'committee');
        }
        const data = await this.committeeService.update(id, {
            ...dto,
            ...(photoPath ? { photo: photoPath } : {}),
        });
        return { success: true, message: 'Executive Committee member updated successfully.', data };
    }
    async remove(id) {
        return this.committeeService.remove(id);
    }
};
exports.CommitteeController = CommitteeController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all committee members (Public endpoint - No Auth Guard)' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get single committee member by ID (Public endpoint - No Auth Guard)' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Upload committee member photo (Admin protected)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multerConfig)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "uploadPhoto", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new committee member (Admin protected)' }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_committee_dto_1.CreateCommitteeDto, Object]),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update committee member by ID (Admin protected)' }),
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_committee_dto_1.UpdateCommitteeDto, Object]),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete committee member by ID (Admin protected)' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommitteeController.prototype, "remove", null);
exports.CommitteeController = CommitteeController = __decorate([
    (0, swagger_1.ApiTags)('Committee Management'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('committee'),
    __metadata("design:paramtypes", [committee_service_1.CommitteeService,
        cloudinary_service_1.CloudinaryService])
], CommitteeController);
//# sourceMappingURL=committee.controller.js.map