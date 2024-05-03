import { Schema, model, models } from "mongoose";

const RestaurantSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    description: "Unique identifier for the restaurant document"
  },
  name: {
    type: String,
    required: true,
    description: "Name of the restaurant"
  },

  cuisine: {
    type: [String],
    description: "Array of cuisine types offered by the restaurant (e.g., Italian, Indian)"
  },

  address: {
    type: {
      street: {
        type: String,
        description: "Street address of the restaurant"
      },
      locality: {
        type: String,
        description: "Locality or neighborhood"
      },
      city: {
        type: String,
        description: "City where the restaurant is located"
      },
      postalcode: {
        type: String,
        description: "Postal code (if applicable)"
      },
      geo: {
        type: {
          type: String,
          enum: ["Point"],
          description: "GeoJSON type (always 'Point')"
        },
        coordinates: {
          type: [Number],
          description: "Array of longitude and latitude for restaurant location"
        }
      }
    },
    required: true,
    description: "Restaurant's address details"
  },
  contact: {
        type: Number,
        required: true,
        description: "Restaurant phone number"
  },
  timings: {
    type: {
      opening_days: {
        type: [String],
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        description: "Days of the week the restaurant is open"
      },
      opening_hours: {
        type: String,
        description: "Opening hours in 24-hour format (e.g., '10:00-22:00')"
      },
      closing_hours: {
        type: String,
        description: "Closing hours in 24-hour format (e.g., '10:00-22:00')"
      }
    },
    required: true,
    description: "Restaurant operating hours"
  },

  cost_for_two: {
    type: Number,
    description: "Average cost for two people (optional)"
  },

  highlights: {
    type: [String],
    description: "Array of special features or highlights (e.g., 'Buffet', 'Outdoor Seating')"
  },

  images: {
    type: [
      {
        foodImages: {
          type: [String],
          required: true,
          description: "restaurants food images"
        },
        menuImages: {
          type: [String],
          required: true,
          description: "restaurants menu images"
        },
        restaurantsImages: {
          type: [String],
          required: true,
          description: "restaurants images"
        },
        vibesCheckVideos: {
          type: [String],
          description: "URL of the video thumbnail"
        }
      }
    ],
    description: "Array of URLs or references to restaurant images"
  },
  rating: {
        type: Number,
        required: true,
        min : 1,
        max: 5,
        description: "Average user rating (0-5)"
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    description: "Array of references to user reviews (optional)"
  },
  menu: {cd 
    type: {
      categories: {
        type: [
          {
            name: {
              type: String,
              description: "Category name (e.g., 'Appetizers', 'Main Course')"
            },
            items: {
              type: [
                {
                  name: {
                    type: String,
                    description: "Menu item name"
                  },
                  description: {
                    type: String,
                    description: "Short description of the menu item"
                  },
                  price: {
                    type: Number,
                    description: "Price of the menu item (optional)"
                  }
                }
              ]
            }
          }
        ]
      },
      description: "Restaurant menu categories and items"
    }
  },
  
  offers: {
    type: [
      {
        title: {
          type: String,
          required: true,
          description: "Title of the ongoing offer"
        },
        description: {
          type: String,
          description: "Detailed description of the offer"
        },
        start_date: {
          type: Date,
          required: true,
          description: "Start date of the offer"
        },
        end_date: {
          type: Date,
          description: "End date of the offer (optional, if applicable)"
        },
        terms_and_conditions: {
          type: String,
          description: "URL or text for terms and conditions (optional)"
        }
      }
    ],
    description: "Array of objects containing details about ongoing offers"
  }  ,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  
});

const Restaurant = models.Restaurant || model('Restaurant', RestaurantSchema);

export default Restaurant;