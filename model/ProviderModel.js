const mongoose = require('mongoose');
const validator = require('validator');


const ProviderSchema = mongoose.Schema({
    //_id: false,
    //provider_id:{ type: String, unique: true, index: true, maxLength: 50, required: true},
    contacts:{
        type:{ type: String, maxLength: 100,required: true },
        adress:{
            street_address: {type: String, required: true, maxlength: 1024},
            subdivision: {type: String,  required: true, maxlength: 50},
            postal_code: {type: String, required: true,  maxlength: 20},
            locality: {type: String,  required: true ,maxlength: 50},
            country: {type: String,  required: true, maxlength: 2, minlength: 2},
        },
        email: { 
            type: String, 
            validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          }},
        mobile_phone_number:{ type: String, maxLength: 20, required: true },
        office_phone_number:{ type: String, maxLength: 20, required: true },
        fax_number:{ type: String, maxLength: 20, required: true }
    },
    opening_days_hours:{
        dayOfTheWeek: {
            type: String,
            enum: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SAUNDAY"],
            default: "MONDAY", required: true,
      },
         hourPeriod: { type: Array, required: true }
    },
    services:{ type: String  },
    is_auto_assignable:{ type: Boolean },
    rating:{ ranking:{ type: Number, required: true } }
})


module.exports=mongoose.model('providerModel', ProviderSchema)