import Blogsidebar from "@/components/BlogsSideBar/Blogsidebar";

export const metadata = {
	title: 'AidNAssist | Blogs',
	description: 'By Matrix Coders Unity',
  }
  
  

const UserLayout = ({ children }) => {
	return (
		<div className="lg:flex mt-[86px] mb-1">
            <div className="lg:w-[20%] w-[100%]"><Blogsidebar></Blogsidebar></div>
                    <div className="p-10">{children}</div>
		</div>
	);
};

export default UserLayout;