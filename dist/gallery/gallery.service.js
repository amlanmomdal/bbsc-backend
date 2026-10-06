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
exports.GalleryService = void 0;
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gallery_schema_1 = require("../schemas/gallery.schema");
let GalleryService = class GalleryService {
    constructor(galleryModel) {
        this.galleryModel = galleryModel;
    }
    async unlinkImageFile(imagePath) {
        if (!imagePath || typeof imagePath !== 'string')
            return;
        let relativePath = imagePath;
        if (imagePath.includes('/uploads/')) {
            relativePath = imagePath.substring(imagePath.indexOf('/uploads/'));
        }
        if (relativePath.startsWith('/uploads/')) {
            const fullPath = path.join(__dirname, '..', '..', relativePath);
            try {
                if (fs.existsSync(fullPath)) {
                    await fs.promises.unlink(fullPath);
                    console.log(`🗑️ Successfully unlinked gallery photo from disk: ${fullPath}`);
                }
            }
            catch (e) {
                console.warn(`Failed to unlink gallery photo file (${fullPath}):`, e?.message || e);
            }
        }
    }
    async findAll(category) {
        const filter = {};
        if (category && category.trim() !== '' && category.toLowerCase() !== 'all') {
            filter.category = new RegExp(`^${category.trim()}$`, 'i');
        }
        return this.galleryModel.find(filter).sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const item = await this.galleryModel.findById(id).exec();
        if (!item) {
            throw new common_1.NotFoundException(`Gallery item with ID "${id}" not found.`);
        }
        return item;
    }
    async create(dto) {
        const categoryTag = dto.category || dto.tag || 'Kali Puja';
        const shortDesc = dto.shortDescription || dto.description || '';
        const dateStr = dto.date || new Date().toISOString().split('T')[0];
        const created = new this.galleryModel({
            title: dto.title || 'BBSC Event Photo',
            category: categoryTag,
            shortDescription: shortDesc,
            image: dto.image || '/images/kali_puja.jpg',
            date: dateStr,
        });
        return created.save();
    }
    async update(id, dto) {
        const existing = await this.galleryModel.findById(id).exec();
        if (!existing) {
            throw new common_1.NotFoundException(`Gallery item with ID "${id}" not found.`);
        }
        if (dto.image && existing.image && dto.image !== existing.image) {
            await this.unlinkImageFile(existing.image);
        }
        const categoryTag = dto.category || dto.tag || existing.category;
        const shortDesc = dto.shortDescription !== undefined ? dto.shortDescription : (dto.description !== undefined ? dto.description : existing.shortDescription);
        const updatedData = {
            title: dto.title || existing.title,
            category: categoryTag,
            shortDescription: shortDesc,
            image: dto.image || existing.image,
            date: dto.date || existing.date,
        };
        const updated = await this.galleryModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
        return updated;
    }
    async remove(id) {
        const item = await this.galleryModel.findById(id).exec();
        if (!item) {
            throw new common_1.NotFoundException(`Gallery item with ID "${id}" not found.`);
        }
        await this.unlinkImageFile(item.image);
        await this.galleryModel.findByIdAndDelete(id).exec();
        return { success: true, message: 'Gallery item and associated image file deleted successfully.' };
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gallery_schema_1.Gallery.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map