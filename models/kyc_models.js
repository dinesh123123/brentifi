
// create user location model schema
const mongoose=require('mongoose');
const kycSchema = new mongoose.Schema({
userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
images:{
	type:Array,
},
  status: {
        type:String,
        default:"pending",
       
    },

     active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    },

},{timestamps:true});

module.exports =kycModel=mongoose.model("kyc",kycSchema);