"use client";
import React from "react";

import { toast } from "@/components/ui/use-toast";

import BlogForm from "@/app/dashboard/components/BlogForm";
import { IBlogDetail } from "@/lib/types";
import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { updateBlogDetailById } from "../../../../../../lib/actions/blog";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function EditForm({ blog }: { blog: IBlogDetail }) {
	const router = useRouter();

	const onHandleSubmit = async (data: BlogFormSchemaType) => {
		const result = JSON.parse(
			await updateBlogDetailById(blog?.id!, data)
		) as PostgrestSingleResponse<null>;
		if (result.error) {
			toast({
				title: "Fail to update ",
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
						<code className="text-white">
							{result.error?.message}
						</code>
					</pre>
				),
			});
		} else {
			toast({
				title: "Successfully update 🎉",
			});
			router.push("/dashboard");
		}
	};

	return <BlogForm onHandleSubmit={onHandleSubmit} blog={blog} />;
}