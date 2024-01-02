import { Button } from '@/components/ui/button';
import { EyeOpenIcon, Pencil1Icon,TrashIcon } from '@radix-ui/react-icons';
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { readBlogAdmin, updateBlogById } from '@/lib/actions/blog';
import DeleteAlert from './DeleteAlert';
import SwitchForm from './SwitchForm';
import { BlogFormSchemaType } from '../schema';
import Link from 'next/link';


export default async function BlogTable() {

  const { data: blogs } = await readBlogAdmin();

  return (

    <div className="overflow-x-auto">


      <div className="border bg-graident-dark rounded-md sm:w-[900px] md:w-full">

         <div className="grid grid-cols-5 p-5 text-gray-500 border-b">
           <h1 className="col-span-2">Title</h1>
           <h1>Premium</h1>
           <h1>Publish</h1>
         </div>
         {blogs?.map((blog,index)=>{

              const updatePremium = updateBlogById.bind(null,blog.id,{is_premium: !blog.is_premium} as BlogFormSchemaType)
              const updatePublish = updateBlogById.bind(null,blog.id,{is_published: !blog.is_published} as BlogFormSchemaType)
         
          return <div className="grid grid-cols-5 p-5" key={index}>
          <h1 className="col-span-2">{blog.title}</h1>
          <SwitchForm checked={blog.is_premium} name="premium" onToggle={updatePremium}/>
          <SwitchForm checked={blog.is_published} name="publish" onToggle={updatePublish}/>
          <Actions id={blog.id}/>
       </div>
         })}


       </div>
    </div>
  );
}


const Actions = ({id}:{id:string})=>{
    return (
        <div className="flex items-center gap-2 flex-wrap md:flex-row">
           <Link href={"/blog/"+id}>
            <Button variant="outline" className="flex items-center gap-2">
                <EyeOpenIcon />
                View
            </Button>
           </Link>
            <DeleteAlert blogId={id} />

            <Link href={"/dashboard/blog/edit/"+id}>

              <Button variant="outline" className="flex items-center gap-2">
                  <Pencil1Icon />
                  Edit
              </Button>

            </Link>
        </div>
    );
}