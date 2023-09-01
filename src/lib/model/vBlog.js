import mongoose from "mongoose";


const vBlogModel = new mongoose.Schema({
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

export const Volunteersmodel = mongoose.models.blogofvolunteers || mongoose.model("blogofvolunteers", vBlogModel);