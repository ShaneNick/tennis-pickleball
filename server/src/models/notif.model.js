const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['message', 'listing', 'other'], required: true },
    read: { type: Boolean, default: false },
    associatedResource: {
        kind: String,
        item: { type: mongoose.Schema.Types.ObjectId, refPath: 'associatedResource.kind' }
    },
    timestamp: { type: Date, default: Date.now }
});

// Indexes
notificationSchema.index({ user: 1, read: 1, timestamp: -1 });  // Helps with querying user notifications

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
