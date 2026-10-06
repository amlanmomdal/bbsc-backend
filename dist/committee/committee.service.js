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
exports.CommitteeService = void 0;
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const committee_schema_1 = require("../schemas/committee.schema");
let CommitteeService = class CommitteeService {
    constructor(committeeModel) {
        this.committeeModel = committeeModel;
    }
    async unlinkPhotoFile(photoPath) {
        if (!photoPath || typeof photoPath !== 'string')
            return;
        let relativePath = photoPath;
        if (photoPath.includes('/uploads/')) {
            relativePath = photoPath.substring(photoPath.indexOf('/uploads/'));
        }
        if (relativePath.startsWith('/uploads/')) {
            const fullPath = path.join(__dirname, '..', '..', relativePath);
            try {
                if (fs.existsSync(fullPath)) {
                    await fs.promises.unlink(fullPath);
                    console.log(`🗑️ Successfully unlinked committee member photo from disk: ${fullPath}`);
                }
            }
            catch (e) {
                console.warn(`Failed to unlink committee photo file (${fullPath}):`, e?.message || e);
            }
        }
    }
    async findAll() {
        return this.committeeModel.find().sort({ createdAt: 1 }).exec();
    }
    async findOne(id) {
        const member = await this.committeeModel.findById(id).exec();
        if (!member) {
            throw new common_1.NotFoundException(`Committee member with ID "${id}" not found.`);
        }
        return member;
    }
    async create(dto) {
        const memberPosition = dto.position || dto.role || 'Executive Member';
        const memberPhoto = dto.photo || dto.image || '';
        const memberContact = dto.contact || dto.phone || '';
        const created = new this.committeeModel({
            name: dto.name || 'Executive Member',
            role: memberPosition,
            photo: memberPhoto,
            contact: memberContact,
        });
        return created.save();
    }
    async update(id, dto) {
        const existing = await this.committeeModel.findById(id).exec();
        if (!existing) {
            throw new common_1.NotFoundException(`Committee member with ID "${id}" not found.`);
        }
        const newPhoto = dto.photo || dto.image;
        if (newPhoto && existing.photo && newPhoto !== existing.photo) {
            await this.unlinkPhotoFile(existing.photo);
        }
        const memberPosition = dto.position || dto.role || existing.role;
        const memberContact = dto.contact !== undefined ? dto.contact : (dto.phone !== undefined ? dto.phone : existing.contact);
        const updatedData = {
            name: dto.name || existing.name,
            role: memberPosition,
            photo: newPhoto || existing.photo,
            contact: memberContact,
        };
        const updated = await this.committeeModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
        return updated;
    }
    async remove(id) {
        const member = await this.committeeModel.findById(id).exec();
        if (!member) {
            throw new common_1.NotFoundException(`Committee member with ID "${id}" not found.`);
        }
        await this.unlinkPhotoFile(member.photo);
        await this.committeeModel.findByIdAndDelete(id).exec();
        return { success: true, message: 'Committee member and associated photo file deleted successfully.' };
    }
};
exports.CommitteeService = CommitteeService;
exports.CommitteeService = CommitteeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(committee_schema_1.Committee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommitteeService);
//# sourceMappingURL=committee.service.js.map