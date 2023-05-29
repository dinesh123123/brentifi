// create term us model schema
const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({

product_name:{
	type:String 
},

product_type:{
	type:String 
},

category_name:{
	type:String 
},


text:{
	type:String 
},

price:{
	type:String,
},
rent_price:{
	type:String,
},

discount_price:{
	type:String,	
},

rent_discount_price:{
	type:String,	
},

delevery_time:{
	type:String,	
},
refund_pollicy:{
	type:String,	
},
category_id:{
	type:String,	
},

subcategory_id:{
	type:String,	
},

instock:{
       type:String,
},

description:{
		type:String,
	},

/*image:{
	type:String,
	},
  
	general_info:{
		type:String,
	},*/
	dimensions:{
		type:String,
	},
	height:{
		type:String,
	},
	width:{
		type:String,
	},
	length:{
		type:String,
	},

	type_product:{
		type:String,
	},
	type_of_finish:{
		type:String,
	},
	
tenures_availabe:[],
size:[],
color:[],
// userId:[{type:mongoose.Schema.Types.ObjectId,
// 		ref:"like"},],


offer:{
	type:String,
},
images:{
	type:Array,
},


},{timestamps:true});
module.exports =productModel= mongoose.model("product", productSchema);