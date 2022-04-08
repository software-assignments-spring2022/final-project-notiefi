const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    seen: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
      required: true,
    },
    date: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model('Notification', schema);

export default Notification;
