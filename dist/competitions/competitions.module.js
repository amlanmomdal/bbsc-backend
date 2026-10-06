"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const competitions_controller_1 = require("./competitions.controller");
const competitions_service_1 = require("./competitions.service");
const competition_schema_1 = require("../schemas/competition.schema");
const auth_module_1 = require("../auth/auth.module");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let CompetitionsModule = class CompetitionsModule {
};
exports.CompetitionsModule = CompetitionsModule;
exports.CompetitionsModule = CompetitionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: competition_schema_1.Competition.name, schema: competition_schema_1.CompetitionSchema },
            ]),
            auth_module_1.AuthModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [competitions_controller_1.CompetitionsController],
        providers: [competitions_service_1.CompetitionsService],
        exports: [competitions_service_1.CompetitionsService],
    })
], CompetitionsModule);
//# sourceMappingURL=competitions.module.js.map