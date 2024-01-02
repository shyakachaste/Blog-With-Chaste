"use client";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import React from "react";

export default function SwitchForm({ checked,onToggle,name } : { checked:boolean,onToggle:()=>Promise<string>; name:string })
{

    const onSubmit = async (e:any) =>{

        e.preventDefault()
        const {error} = JSON.parse(await onToggle())
             
        
        if(error?.message){
            toast({
              title: "Failed to update" + name,
              description: (
                <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                  <code className="text-white">{error.message}</code>
                </pre>
              ),
            });
          }else{
            toast({
              title: "Successfully update" + name,
            });
          }


    };

  return (
    <form onSubmit={onSubmit}>
       <Switch checked={checked} type="submit"/>
    </form>
  )
}
