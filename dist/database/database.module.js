"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const event_schema_1 = require("../schemas/event.schema");
const winner_schema_1 = require("../schemas/winner.schema");
const gallery_schema_1 = require("../schemas/gallery.schema");
const committee_schema_1 = require("../schemas/committee.schema");
const competition_schema_1 = require("../schemas/competition.schema");
const seed_service_1 = require("./seed.service");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: event_schema_1.Event.name, schema: event_schema_1.EventSchema },
                { name: winner_schema_1.Winner.name, schema: winner_schema_1.WinnerSchema },
                { name: gallery_schema_1.Gallery.name, schema: gallery_schema_1.GallerySchema },
                { name: committee_schema_1.Committee.name, schema: committee_schema_1.CommitteeSchema },
                { name: competition_schema_1.Competition.name, schema: competition_schema_1.CompetitionSchema },
            ]),
        ],
        providers: [seed_service_1.SeedService],
        exports: [seed_service_1.SeedService],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map