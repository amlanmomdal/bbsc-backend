"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitteeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const committee_controller_1 = require("./committee.controller");
const committee_service_1 = require("./committee.service");
const committee_schema_1 = require("../schemas/committee.schema");
const auth_module_1 = require("../auth/auth.module");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
let CommitteeModule = class CommitteeModule {
};
exports.CommitteeModule = CommitteeModule;
exports.CommitteeModule = CommitteeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: committee_schema_1.Committee.name, schema: committee_schema_1.CommitteeSchema }]),
            auth_module_1.AuthModule,
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [committee_controller_1.CommitteeController],
        providers: [committee_service_1.CommitteeService],
        exports: [committee_service_1.CommitteeService],
    })
], CommitteeModule);
//# sourceMappingURL=committee.module.js.map