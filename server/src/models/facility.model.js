const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: { type: String, required: true, trim: true, maxlength: 100 },
    location: {
        address: { type: String, required: true, trim: true, maxlength: 255 },
        city: { type: String, required: true, trim: true, maxlength: 100 },
        state: { type: String, required: true, trim: true, maxlength: 100 },
        country: { type: String, required: true, trim: true, maxlength: 100 },
        geo: {
            type: { type: String, enum: ['Point'], required: true },
            coordinates: { type: [Number], required: true },
        }
    },
    type: { type: [String], enum: ['tennis', 'pickleball'], required: true },
    contact: {
        phone: { type: String, trim: true },
        email: { type: String, trim: true, match: [/.+@.+\..+/, 'Please enter a valid email address'] }
    },
    amenities: [String],
    operatingHours: {
        open: { type: String },
        close: { type: String }
    },
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Indexes
facilitySchema.index({ name: 1, "location.city": 1, "location.state": 1 });
facilitySchema.index({ "location.geo": "2dsphere" });

// Middleware
facilitySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;
