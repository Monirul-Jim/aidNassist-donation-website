import mongoose from "mongoose";


const BlogModel = new mongoose.Schema({
    name: String,
    email: String,
    designation:String,
    blood:String,
    conntact:String,
    location:String,
    blog_title:String,
    imageUrl:String,
    blog_content:String,
   
});

export const Blogmodel = mongoose.models.blogs|| mongoose.model("blogs", BlogModel);