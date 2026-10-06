import { Document } from 'mongoose';
export type EventDocument = Event & Document;
export declare class Event {
    title: string;
    shortTitle: string;
    fullDate: string;
    month: string;
    day: string;
    status: string;
    category: string;
    location: string;
    time: string;
    description: string;
    image: string;
    images: string[];
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event, any, {}> & Event & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Event> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
