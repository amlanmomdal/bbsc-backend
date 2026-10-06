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
var SeedService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("../schemas/event.schema");
const winner_schema_1 = require("../schemas/winner.schema");
const gallery_schema_1 = require("../schemas/gallery.schema");
const committee_schema_1 = require("../schemas/committee.schema");
const competition_schema_1 = require("../schemas/competition.schema");
let SeedService = SeedService_1 = class SeedService {
    constructor(eventModel, winnerModel, galleryModel, committeeModel, competitionModel) {
        this.eventModel = eventModel;
        this.winnerModel = winnerModel;
        this.galleryModel = galleryModel;
        this.committeeModel = committeeModel;
        this.competitionModel = competitionModel;
        this.logger = new common_1.Logger(SeedService_1.name);
    }
    async onModuleInit() {
        try {
            this.logger.log('🌱 Checking MongoDB Atlas [bbsc] database seed status...');
            await this.seedInitialData();
        }
        catch (err) {
            this.logger.warn(`Database seed check: ${err?.message || err}`);
        }
    }
    async seedInitialData() {
        const eventCount = await this.eventModel.countDocuments();
        if (eventCount === 0) {
            this.logger.log('🌱 Seeding initial BBSC Events into MongoDB Atlas...');
            await this.eventModel.insertMany([
                {
                    title: 'Drawing Competition',
                    fullDate: '2024-08-15',
                    month: 'AUG',
                    day: '15',
                    status: 'upcoming',
                    category: 'Competitions',
                    location: 'Club Premises & Auditorium',
                    time: '09:00 AM IST',
                    description: 'Annual Independence Day Sit-and-Draw contest for children divided into 3 age groups.',
                    image: '/images/saraswati_puja.jpg'
                },
                {
                    title: 'Dance Competition',
                    fullDate: '2024-09-10',
                    month: 'SEP',
                    day: '10',
                    status: 'upcoming',
                    category: 'Competitions',
                    location: 'BBSC Open Stage',
                    time: '05:00 PM IST',
                    description: 'Classical, Folk, and Modern Creative Solo & Group dance contest.',
                    image: '/images/bbsc_hero_seamless_correct.jpg'
                },
                {
                    title: 'Grand Kali Puja',
                    fullDate: '2024-11-12',
                    month: 'NOV',
                    day: '12',
                    status: 'upcoming',
                    category: 'Festivals',
                    location: 'Burul Central Ground',
                    time: '07:00 PM IST',
                    description: 'The mega annual festival featuring traditional rituals, musical evening, and illumination show.',
                    image: '/images/kali_puja.jpg'
                }
            ]);
        }
        const winnerCount = await this.winnerModel.countDocuments();
        if (winnerCount === 0) {
            this.logger.log('🌱 Seeding initial Competition Winners into MongoDB Atlas...');
            await this.winnerModel.insertMany([
                { year: '2024', competitionId: 2, competitionTitle: 'Dance Competition', subCategory: 'Category A (Junior)', rank: 1, rankLabel: '1st Prize 🥇', winnerName: 'Riya Mondal', ageGroup: 'Junior - Group A', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', remarks: 'Classical Solo Performance' },
                { year: '2024', competitionId: 1, competitionTitle: 'Painting Competition', subCategory: 'Category A (Junior)', rank: 1, rankLabel: '1st Prize 🥇', winnerName: 'Aarohi Das', ageGroup: 'Junior - Group A', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', remarks: 'Landscape Oil Pastel' }
            ]);
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = SeedService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __param(1, (0, mongoose_1.InjectModel)(winner_schema_1.Winner.name)),
    __param(2, (0, mongoose_1.InjectModel)(gallery_schema_1.Gallery.name)),
    __param(3, (0, mongoose_1.InjectModel)(committee_schema_1.Committee.name)),
    __param(4, (0, mongoose_1.InjectModel)(competition_schema_1.Competition.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], SeedService);
//# sourceMappingURL=seed.service.js.map