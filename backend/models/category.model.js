import mongoose from "mongoose"

const categorySchema = mongoose.Schema({

   category: {
     type:String,
     required:true,
     unique: true
   },

   trending: {
    type:Boolean,
    required:true,
    default:false
   },

   subCategory: {
      type:String,
      enum:["topwear", "bottomwear", "accessories", "prefume", "footwear"]
   },

   imgUrl: {
      type: String,
      required: true,
      
   }
}, {timestaps: true})


const Category = mongoose.model("Category", categorySchema)

export default Category