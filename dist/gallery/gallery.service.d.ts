import { Model } from 'mongoose';
import { Gallery, GalleryDocument } from '../schemas/gallery.schema';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
export declare class GalleryService {
    private galleryModel;
    constructor(galleryModel: Model<GalleryDocument>);
    private unlinkImageFile;
    findAll(category?: string): Promise<Gallery[]>;
    findOne(id: string): Promise<Gallery>;
    create(dto: CreateGalleryDto): Promise<Gallery>;
    update(id: string, dto: UpdateGalleryDto): Promise<Gallery>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
