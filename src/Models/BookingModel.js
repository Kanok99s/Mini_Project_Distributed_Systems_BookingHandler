const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        day: {
            type: String,
           required: true,
         },
        start: {
            type: String,
            required: true,
        },
        dentist: {
            type: Schema.Types.ObjectId, 
            ref: "dentists"
         },
        issuance: {
            type:String,
            required: true
        }
    },
);

module.exports = mongoose.model("bookingmodels", bookingSchema);
