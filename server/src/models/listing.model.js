const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    coordinates: {
        latitude: Number,
        longitude: Number,
    },
    contactInfo: {
        phone: String,
        email: String,
        website: String,
    },
    amenities: [String],
    hoursOfOperation: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String,
    },
    images: [String],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
