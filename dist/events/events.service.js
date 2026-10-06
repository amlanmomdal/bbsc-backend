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
exports.EventsService = void 0;
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("../schemas/event.schema");
const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let EventsService = class EventsService {
    constructor(eventModel) {
        this.eventModel = eventModel;
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
                    console.log(`🗑️ Successfully unlinked event image from disk: ${fullPath}`);
                }
            }
            catch (e) {
                console.warn(`Failed to unlink event image file (${fullPath}):`, e?.message || e);
            }
        }
    }
    parseDateFields(dto) {
        const rawDate = dto.fullDate || dto.date || '';
        let month = dto.month || 'NOV';
        let day = dto.day || '12';
        if (rawDate) {
            const d = new Date(rawDate);
            if (!isNaN(d.getTime())) {
                month = MONTH_NAMES[d.getMonth()];
                day = String(d.getDate()).padStart(2, '0');
            }
        }
        return {
            title: dto.title || dto.eventName || 'BBSC Festival Event',
            shortTitle: dto.shortTitle || dto.title || dto.eventName || 'Festival',
            fullDate: rawDate,
            month,
            day,
            status: dto.status || 'upcoming',
            category: dto.category || 'Festivals',
            location: dto.location || 'Burul, South 24 Parganas',
            time: dto.time || '10:00 AM IST',
            description: dto.description || '',
            image: dto.image || '/images/kali_puja.jpg',
            images: Array.isArray(dto.images) ? dto.images : (dto.images ? [dto.images] : [])
        };
    }
    async findAll() {
        return this.eventModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOne(id) {
        const event = await this.eventModel.findById(id).exec();
        if (!event) {
            throw new common_1.NotFoundException(`Event/Festival with ID "${id}" not found.`);
        }
        return event;
    }
    async create(dto) {
        const parsed = this.parseDateFields(dto);
        const created = new this.eventModel(parsed);
        return created.save();
    }
    async update(id, dto) {
        const existing = await this.eventModel.findById(id).exec();
        if (!existing) {
            throw new common_1.NotFoundException(`Event/Festival with ID "${id}" not found.`);
        }
        if (dto.image && existing.image && dto.image !== existing.image) {
            await this.unlinkImageFile(existing.image);
        }
        const title = dto.title || dto.eventName || existing.title;
        const shortTitle = dto.shortTitle || dto.shortTitle || existing.shortTitle;
        const fullDate = dto.fullDate || dto.date || existing.fullDate;
        const description = dto.description !== undefined ? dto.description : existing.description;
        const location = dto.location || existing.location;
        const time = dto.time || existing.time;
        const category = dto.category || existing.category;
        const status = dto.status || existing.status;
        const image = dto.image || existing.image;
        let images = existing.images || [];
        if (dto.images) {
            images = Array.isArray(dto.images) ? dto.images : [dto.images];
        }
        let month = existing.month;
        let day = existing.day;
        if (fullDate) {
            const d = new Date(fullDate);
            if (!isNaN(d.getTime())) {
                month = MONTH_NAMES[d.getMonth()];
                day = String(d.getDate()).padStart(2, '0');
            }
        }
        const updatedData = {
            title,
            shortTitle,
            fullDate,
            month,
            day,
            status,
            category,
            location,
            time,
            description,
            image,
            images
        };
        const updated = await this.eventModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
        return updated;
    }
    async remove(id) {
        const event = await this.eventModel.findById(id).exec();
        if (!event) {
            throw new common_1.NotFoundException(`Event/Festival with ID "${id}" not found.`);
        }
        await this.unlinkImageFile(event.image);
        if (Array.isArray(event.images)) {
            for (const imgPath of event.images) {
                await this.unlinkImageFile(imgPath);
            }
        }
        await this.eventModel.findByIdAndDelete(id).exec();
        return { success: true, message: 'Event/Festival and associated image files deleted successfully.' };
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
//# sourceMappingURL=events.service.js.map