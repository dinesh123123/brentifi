// import dependancies and models in controllers js files
const Contact=require("../models/contact_us_models");
const About=require("../models/about_us_models");
const Term=require("../models/term_models");
const Pollicy=require("../models/p_pollicy_models");
const Banner=require("../models/banner_models");
const Category=require("../models/category_models");
const Faq=require("../models/faq_models");
const City_list=require("../models/city_list_models");
const Feature=require("../models/our_features_models");
const Feedback=require("../models/feedback_models");
const Offer=require("../models/offer_models");
const Product=require("../models/product_models");
const Return_pollicy=require("../models/return_pollicy_models");
const Shipping_pollicy=require("../models/shipping_pollicy_models");
const Refferal_term=require("../models/refferal_term_models");
const Rent_benifit=require("../models/rent_benifit_models");
const Sub_Category=require("../models/sub_category_models");





// create contact us api using post method
const Contact_Us=async(req,res)=>{
	
	const {whatsapp,email_address}=req.body;
    // exist user
	const register_user= await Contact.findOne({email_address});
	if(register_user){
	 res.status(400).json({
        result:"false",
        message:"user allready send data",  
    });

	}else{
		if(whatsapp && email_address ){

	    try{
            const user = new Contact({whatsapp,email_address})
		    const user_data=await user.save()
	        res.status(200).json({
                result:"true",
                message:"contact us details are",data:user_data});
	    }catch(error){
	        res.status(400).json({result:"false",
                message:"data doest not send"
            })
        }
    }else{
		res.status(400).json({
            result:"false",
            message:"parameter required whatsapp, email_address "
        });
	}
}
};


//create privacy Policy post api
 const Privacy_Pollicy =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Pollicy({title,text})
        const result=await user.save()
         res.status(200).json({
        	result:"true",
        	message:"data add sucessfully",
        	data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
        	message:" get some error",
        	message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};




// create term and condiction api
//create privacy Policy post api
 const Term_Condiction =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Term({title,text})
        const result=await user.save()
         res.status(200).json({
        	result:"true",
        	message:"data add sucessfully",
        	data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
        	message:" get some error",
        	message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};





//create about us post api
 const About_Us =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new About({title,text})
        const result=await user.save()
         res.status(200).json({
        	result:"true",
        	message:"data add sucessfully",
        	data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
        	message:" get some error",
        	message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};




// create faq api
 const Faqs=async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Faq({title,text})
        const result=await user.save()
         res.status(200).json({
        	result:"true",
        	message:"data add sucessfully",
        	data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
        	message:" get some error",
        	message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};





// start create category api
const Category_api=async(req,res)=>{
    try{
         const {name}=req.body;
         const user_profile= await Category.findOne({name:name});
          if(user_profile){
        if(req.file){
            var profileRecord={
            name:name,
            image:req.file.filename
    }

   }else{
var profileRecord={
      name:name
    }
   }
 const updateUser_data= await Category.findOneAndUpdate({name:name},(profileRecord),      
{new:true}); 
   res.status(200).json({
   result:"true",
   message: "data updated successfully.",
   data:updateUser_data
})

}else{
const category=new Category({name:name,image:req.file.filename});
             if(name){
            const result = await category.save();
             res.status(200).redirect("/public/category");/*json({
             	result:"true",
             	message:"add sucessfully",
             	data:result
             });*/
 
  }else{ 
     res.status(400).json({result:"false",message:"required parameters name,image"})
  }
 }
}catch(error){
            res.status(500).send({result:"false",message:"get some error", msg:error.message});
        }
};


//end create category api



// create subcategory api
const Sub_Category_api=async(req,res)=>{
    try{
         const {name,categoryId}=req.body;
         const user_profile= await Sub_Category.findOne({name:name});
          if(user_profile){
        if(req.file){
            var profileRecord={
            name:name,
            categoryId:categoryId,
            image:req.file.filename
    }

   }else{
var profileRecord={
      name:name,
      categoryId:categoryId,
    }
   }
 const updateUser_data= await Sub_Category.findOneAndUpdate({name:name},(profileRecord),      
{new:true}); 
   res.status(200).redirect("/public/subcategory");/*json({
   result:"true",
   message: "data updated successfully.",
   data:updateUser_data
})*/

}else{
const category=new Sub_Category({name:name,categoryId:categoryId,image:req.file.filename});
             if(name){
            const result = await category.save();
             res.status(200).redirect("/public/subcategory");/*json({
                result:"true",
                message:"add sucessfully",
                data:result
             });*/
 
  }else{ 
     res.status(400).json({result:"false",message:"required parameters name,image,categoryId"})
  }
 }
}catch(error){
            res.status(500).send({result:"false",message:"get some error", msg:error.message});
        }
};







// create banner post api
const Banner_api =async(req,res)=>{
	const {title}=req.body;
	try{
	const category=new Banner({title:title,image:req.file.filename});
            const result = await category.save();
             res.status(200).redirect("/public/banner_list");/*json({
             	result:"true",
             	message:"add sucessfully",
             	data:result
             });	*/

	}catch(error){
		res.status(500).send({result:"false",message:"get some error", msg:error.message});
	}

};




// create city list post api
const City_list_api =async(req,res)=>{
    const {city}=req.body;
    try{
    const citylist=new City_list ({city:city,image:req.file.filename});
            const result = await citylist.save();
             res.status(200).json({
                result:"true",
                message:"add sucessfully",
                data:result
             });    

    }catch(error){
        res.status(500).send({result:"false",message:"get some error", msg:error.message});
    }

};



//create our_features api
const Features_api=async(req,res)=>{
    const {title,text,type}=req.body;
    try{
        const feautres_data=new Feature({title,text,type})
        const result=await feautres_data.save();
        res.status(200).json({
            result:"true",
            message:"data add sucessfully",
            data:result
  })
    }catch(error){
        res.status(500).send({result:"false",message:"get some error", msg:error.message});
  }
};





// create sub category post api
const feedback_api =async(req,res)=>{
    const {title,text}=req.body;
    try{
    const category=new Feedback({title,text,image:req.file.filename});
            const result = await category.save();
             res.status(200).redirect("/public/user_feedbackFList");/*json({
                result:"true",
                message:"add sucessfully",
                data:result
             });    */

    }catch(error){
        res.status(500).send({result:"false",message:"get some error", msg:error.message});
    }

};




// create  offer list api post api
const Offer_api =async(req,res)=>{
    const {title,text,ex_date}=req.body;
    try{

    var OTP = Math.floor(1000 + Math.random() * 9000);
    const  create_data=new Offer({title,text,ex_date,code:OTP,image:req.file.filename});
            const result = await create_data.save();
             res.status(200).redirect("/public/offer_list");/*json({
                result:"true",
                message:"add sucessfully",
                data:result
             });    */

    }catch(error){
        res.status(500).render("create_offer",{result:"false",message:"get some error", msg:error.message});
    }

};



// create product add api 
const Product_api=async(req,res)=>{
    const {product_name,product_type,category_name,title,text,rent_price,price,discount_price,rent_discount_price,delevery_time,refund_pollicy,
                 category_id,subcategory_id,instock,dimensions,type_product,type_of_finish,like,offer,height,width,length,description,userId}=req.body;
try{

 const arrayImage=["front","right","left","back","about"];
 for(let i=0;i<req.files.length;i++){
    arrayImage[i]=req.files[i].filename;
 }

const colors=["red","blue","black","white","pink","gray"];
const sizes=["single","double","queen size","king size","five","four"];
const months=["2 ","3 ","6 ","9 ","12"];
    const product=new Product({product_name,product_type,category_name,title,text,rent_price,price,discount_price,rent_discount_price,delevery_time,refund_pollicy,
                               color:colors,size:sizes,tenures_availabe:months,category_id,subcategory_id,instock,/*image:req.file.filename,*/
                               dimensions,type_product,type_of_finish,images:arrayImage,like,offer,height,width,length,description,userId:[],});
    


    const result=await product.save();
    res.status(200).redirect("/public/product_list");/*.json({result:"true",message:"data add sucessfully",data:result});*/
    }catch(error){
        res.status(500).send({result:"false",message:"get some error", msg:error.message});
    }

};




//create return Policy post api
 const return_Pollicy =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Return_pollicy({title,text})
        const result=await user.save()
         res.status(200).json({
            result:"true",
            message:"data add sucessfully",
            data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
            message:" get some error",
            message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};





//create Shipping Policy post api
 const Shippingpollicy =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Shipping_pollicy({title,text})
        const result=await user.save()
         res.status(200).json({
            result:"true",
            message:"data add sucessfully",
            data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
            message:" get some error",
            message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};



//create Refferalterm Policy post api
 const Refferalterm =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Refferal_term({title,text})
        const result=await user.save()
         res.status(200).json({
            result:"true",
            message:"data add sucessfully",
            data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
            message:" get some error",
            message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};



//create rent benifit Policy post api
 const RentBenifit =async(req,res)=>{
   const{title,text}=req.body;  
    if(text && title){
 try{
                    
        const user=new Rent_benifit({title,text})
        const result=await user.save()
         res.status(200).json({
            result:"true",
            message:"data add sucessfully",
            data:result
  })
    } catch(error){
        console.log(error.message)
        res.status(400).json({result:"false",
            message:" get some error",
            message:error.message
        })
     }
      }else{
     res.send({result:"false",message:"parameter required text,title "});
   }
};












module.exports ={
Contact_Us,
Privacy_Pollicy,
Term_Condiction,
About_Us,
Faqs,
Category_api,
Banner_api,
City_list_api,
Features_api,
feedback_api,
Offer_api,
Product_api,
return_Pollicy,
Shippingpollicy,
Refferalterm,
RentBenifit,
Sub_Category_api




};