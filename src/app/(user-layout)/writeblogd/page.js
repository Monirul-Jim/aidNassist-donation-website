'use client'

import Swal from 'sweetalert2';



const imgToken = process.env.NEXT_PUBLIC_IMGBB_API_Token;
const WriteBlog = () => {
    const img_hosting_URl = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const handlePostBlog = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const designation = form.designation.value;
        const blood = form.bloodGroup.value;
        const contact = form.contact.value;
        const location = form.location.value;
        const blog_title = form.blog_title.value;
        const blog_content = form.blog_content.value;

        const formData = new FormData();
        formData.append('image', form.imageUrl.files[0]);

        const imgRes = await fetch(img_hosting_URl, {
            method: "POST",
            body: formData
        })
        const imageResponse = await imgRes.json();

        if (imageResponse.success) {
            const imageUrl = imageResponse.data.display_url;
            const blogdata = {
                name,
                email,
                designation,
                imageUrl,
                blood,
                contact,
                location,
                blog_title,
                blog_content
            };
            console.log({blogdata})
            let result = await fetch("/api/dblogs", {
                method: "POST",
                body: JSON.stringify(blogdata)
            });
            result = await result.json();
            if (result.success) { 
                Swal.fire(
                    'Post Successfully',
                    'clicked the button!',
                    'success'
                )
            }
            form.reset()
        }


    };

    return (
        <div className="my-28 w-[50%] h-[60%] mx-auto">
            <h1 className='text-4xl text-gray-400 '>Write a Blog include all Information</h1>
            <form onSubmit={handlePostBlog}>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6  top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="file" name="imageUrl" id="imageUrl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="imageUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Image</label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input defaultValue="donator" type="text" name="designation" id="designation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " readOnly />
                                    <label for="designation" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Designation</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="bloodGroup" id="bloodGroup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                    <label for="bloodGroup" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Blood Group</label>
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="contact" id="contact" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Phone number (+8801xxxxxxxxx)</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Location</label>
                            </div>
                            
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="blog_title" id="blog_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " required />
                                <label for="blog_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Blog title</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <textarea name="blog_content" id="blog_content" cols="30" rows="10" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"  placeholder=" " required ></textarea>
                                <label for="blog_content" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300  -translate-y-6 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-focus:dark:text-green-400  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">blog_content</label>
                            </div>

                            <button type="submit" className="bg-green-500 hover:bg-green-300 text-white p-4 w-full rounded-xl ">POST</button>
                        </form>
        </div>
    );
};

export default WriteBlog;