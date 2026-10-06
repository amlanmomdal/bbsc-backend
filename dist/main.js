"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.join)(__dirname, '..', '.env') });
dotenv.config({ path: (0, path_1.join)(__dirname, '..', '..', '.env') });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const fs = require("fs");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const baseUploadsDir = (0, path_1.join)(__dirname, '..', 'uploads');
    ['events', 'competitions', 'gallery', 'committee'].forEach((sub) => {
        const dir = (0, path_1.join)(baseUploadsDir, sub);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
    app.use('/uploads', express.static((0, path_1.join)(__dirname, '..', 'uploads')));
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Burul Blue Star Club (BBSC) REST API')
        .setDescription('Official API documentation for BBSC Public Website & Admin Panel modules (Committee, Events, Gallery, Competitions, Auth)')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const PORT = process.env.PORT || 5001;
    await app.listen(PORT);
    console.log(`🚀 BBSC NestJS Server running at http://localhost:${PORT}/api`);
    console.log(`📚 Swagger API Docs available at http://localhost:${PORT}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map