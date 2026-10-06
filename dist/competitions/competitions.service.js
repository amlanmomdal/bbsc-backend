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
exports.CompetitionsService = void 0;
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const competition_schema_1 = require("../schemas/competition.schema");
let CompetitionsService = class CompetitionsService {
    constructor(competitionModel) {
        this.competitionModel = competitionModel;
    }
    async unlinkIconFile(iconPath) {
        if (!iconPath || typeof iconPath !== 'string')
            return;
        let relativePath = iconPath;
        if (iconPath.includes('/uploads/')) {
            relativePath = iconPath.substring(iconPath.indexOf('/uploads/'));
        }
        if (relativePath.startsWith('/uploads/')) {
            const fullPath = path.join(__dirname, '..', '..', relativePath);
            try {
                if (fs.existsSync(fullPath)) {
                    await fs.promises.unlink(fullPath);
                    console.log(`🗑️ Successfully unlinked icon image from disk: ${fullPath}`);
                }
            }
            catch (e) {
                console.warn(`Failed to unlink icon file (${fullPath}):`, e?.message || e);
            }
        }
    }
    async findAll() {
        return this.competitionModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const competition = await this.competitionModel.findById(id).exec();
        if (!competition) {
            throw new common_1.NotFoundException(`Cultural Competition with ID "${id}" not found.`);
        }
        return competition;
    }
    async create(dto) {
        const created = new this.competitionModel(dto);
        return created.save();
    }
    async update(id, dto) {
        const existing = await this.competitionModel.findById(id).exec();
        if (!existing) {
            throw new common_1.NotFoundException(`Cultural Competition with ID "${id}" not found.`);
        }
        if (dto.icon && existing.icon && dto.icon !== existing.icon) {
            await this.unlinkIconFile(existing.icon);
        }
        const updated = await this.competitionModel.findByIdAndUpdate(id, dto, { new: true }).exec();
        return updated;
    }
    async remove(id) {
        const competition = await this.competitionModel.findById(id).exec();
        if (!competition) {
            throw new common_1.NotFoundException(`Cultural Competition with ID "${id}" not found.`);
        }
        await this.unlinkIconFile(competition.icon);
        await this.competitionModel.findByIdAndDelete(id).exec();
        return { success: true, message: 'Cultural Competition and associated icon image file deleted successfully.' };
    }
};
exports.CompetitionsService = CompetitionsService;
exports.CompetitionsService = CompetitionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(competition_schema_1.Competition.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CompetitionsService);
//# sourceMappingURL=competitions.service.js.map