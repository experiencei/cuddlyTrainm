import { Schema, model, models } from "mongoose";


const BookingSchema = new Schema({
  // User who placed the order
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  // Restaurant where the booking is made
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },

  // Date and time of the booking
  bookingDateTime: {
    type: Date,
    required: true,
  },

  // Number of people in the booking party
  partySize: {
    type: Number,
    required: true,
    min: 1, // Ensure party size is at least 1
  },

  // Unique digital ticket information
  ticket: {
    type: String,
    required: true,
    unique: true, // Ensure each ticket has a unique identifier
  },

  // Order status (e.g., "Confirmed", "Pending", "Cancelled")
  status: {
    type: String,
    required: true,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Pending',
  },

  // Additional information (optional)
  specialRequests: {
    type: String,
    description: "User's special requests for the booking (e.g., dietary restrictions, table preference)"
  },

  // Payment information (optional)
  paystackId: {
    type: Object,
    description: "Stores payment details if applicable (e.g., payment method, amount, transaction ID)"
  },

  // Timestamps for creation and modification
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;