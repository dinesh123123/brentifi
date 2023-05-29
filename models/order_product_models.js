const mongoose=require("mongoose");
const orderSchema=new mongoose.Schema({

	userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },

// orderItems:[
// {
	
// 	qty:{type:Number,required:false},
// 	productId:{
// 	type:mongoose.Schema.Types.ObjectId,
// required:false,
// ref:"product"
// },
// },
// ],

cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    },


ShippingAddressId:{
	type:mongoose.Schema.Types.ObjectId,
required:false,
ref:"location"
},



paymentMethod:{
	type:String,
	required:false,
	default:"paypal"
},
paymentMode:{
	type:String,
	required:false,
	default:"online"
},
paymentResult:{
	id:{type:String},
	status1:{type:String},
   updat_time:{type:String},
   email_address:{type:String},
},

tax_price:{
	type:Number,
	required:false,
	default:0
},

shipping_price:{
	type:Number,
	required:false,
	default:0
},

t_price:{
	type:String,
	required:false,
	default:0
},

isPaid:{
	type:Boolean,
	required:false,
	default:false
},
PaidAt:{
	type:String
},
deleverAt:{
	type:String
},
status:{
	type:String,
default:"pending"
},	

order_date:{
	type:Date,
default:Date ()},	


},{timestamps:true});

module.exports=orderModel=mongoose.model('order',orderSchema);
