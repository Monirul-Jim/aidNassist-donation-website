import mongoose from "mongoose";


const dBlogModel = new mongoose.Schema({
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

export const donatorsBlogmodel = mongoose.models.blogofdonators || mongoose.model("blogofdonators", dBlogModel);