import { Button } from "@/components/ui/button";
import { readBlog } from "@/lib/actions/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {

  const {data:blogs}=await readBlog();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 p-5 xl:p-0">
      {blogs?.map((blog,index)=>{
        return <Link href={"/blog/"+blog.id} key={index} className="w-full border rounded-md bg-graident-dark p-5 hover:ring-2 ring-blue-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3">
            <div className="relative w-full h-72 md:h-64 xl:h-96">

              <Image priority src={blog.image_url} alt="cover" fill className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px): 50vw, 33vw"/>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                {new Date(blog.created_at).toDateString()}
              </p>
              <h1 className="text-xl font-bold">
                {blog.title}
              </h1>
            </div>
            
           </Link>;
      })}
    </div>
  );
}
