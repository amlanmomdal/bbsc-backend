import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class GalleryController {
    private readonly galleryService;
    private readonly cloudinaryService;
    constructor(galleryService: GalleryService, cloudinaryService: CloudinaryService);
    findAll(category?: string, tag?: string): Promise<{
        success: boolean;
        count: number;
        data: import("../schemas/gallery.schema").Gallery[];
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: import("../schemas/gallery.schema").Gallery;
    }>;
    uploadImage(file: any): Promise<{
        success: boolean;
        message: string;
        url: string;
        filename: any;
    }>;
    create(dto: CreateGalleryDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/gallery.schema").Gallery;
    }>;
    update(id: string, dto: UpdateGalleryDto, file?: any): Promise<{
        success: boolean;
        message: string;
        data: import("../schemas/gallery.schema").Gallery;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
