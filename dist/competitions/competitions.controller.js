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
exports.CompetitionsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs = require("fs");
const competitions_service_1 = require("./competitions.service");
const create_competition_dto_1 = require("./dto/create-competition.dto");
const public_decorator_1 = require("../auth/public.decorator");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = (0, path_1.join)(__dirname, '..', '..', 'uploads', 'competitions');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = (0, path_1.extname)(file.originalname);
            cb(null, `competition-icon-${uniqueSuffix}${ext}`);
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
let CompetitionsController = class CompetitionsController {
    constructor(competitionsService, cloudinaryService) {
        this.competitionsService = competitionsService;
        this.cloudinaryService = cloudinaryService;
    }
    async findAll() {
        const data = await this.competitionsService.findAll();
        return { success: true, data };
    }
    async findOne(id) {
        const data = await this.competitionsService.findOne(id);
        return { success: true, data };
    }
    async uploadIcon(file) {
        if (!file) {
            throw new common_1.BadRequestException('Please select an icon image file to upload.');
        }
        const fileUrl = await this.cloudinaryService.uploadFile(file, 'competitions');
        return {
            success: true,
            message: 'Icon image file uploaded successfully.',
            url: fileUrl,
            filename: file.filename || file.originalname,
        };
    }
    async create(dto, file) {
        let iconPath = dto.icon;
        if (file) {
            iconPath = await this.cloudinaryService.uploadFile(file, 'competitions');
        }
        if (!iconPath) {
            throw new common_1.BadRequestException('Icon image file or icon value is required.');
        }
        const data = await this.competitionsService.create({
            title: dto.title,
            icon: iconPath,
        });
        return { success: true, message: 'Cultural Competition created successfully.', data };
    }
    async update(id, dto, file) {
        let iconPath = dto.icon;
        if (file) {
            iconPath = await this.cloudinaryService.uploadFile(file, 'competitions');
        }
        const data = await this.competitionsService.update(id, {
            title: dto.title,
            ...(iconPath ? { icon: iconPath } : {}),
        });
        return { success: true, message: 'Cultural Competition updated successfully.', data };
    }
    async remove(id) {
        return this.competitionsService.remove(id);
    }
};
exports.CompetitionsController = CompetitionsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multerConfig)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "uploadIcon", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('icon', multerConfig)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_competition_dto_1.CreateCompetitionDto, Object]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('icon', multerConfig)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_competition_dto_1.CreateCompetitionDto, Object]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompetitionsController.prototype, "remove", null);
exports.CompetitionsController = CompetitionsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('competitions'),
    __metadata("design:paramtypes", [competitions_service_1.CompetitionsService,
        cloudinary_service_1.CloudinaryService])
], CompetitionsController);
//# sourceMappingURL=competitions.controller.js.map