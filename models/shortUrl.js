import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => nanoid()
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

export default ShortUrl;
