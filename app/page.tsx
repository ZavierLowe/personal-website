import { BlogPosts } from 'app/components/posts'
import ProjectCard  from 'app/components/projectCard'
import BlobBlur from 'app/components/blobBlur'
import React from 'react'

export default function Page() {
  return (
		<section className="pt-14">
      <BlobBlur/>
			<h1 className="mb-4 text-fuchsia-900 text-6xl font-[600] capitalize ">
				Focused on impact and <br /> results-driven designs.
			</h1>
			<p className="text-emerald-900 text-xl w-3/5">
				Hi, I’m Zavier and I craft visual solutions for brands, corporations, startups,
				and entrepreneurs taking their visual impact to elite status. If your
				looking for your website to have the latest modern feel. Let’s create
				something together that will make heads turn!
			</p>
      <ProjectCard/>
			<h1 className="mb-4 text-off-white text-hero font-[500] ">
				{`Focused on impact and results-driven designs.`}
			</h1>
			<p className="text-off-white text-2xl">
				Specialized in building brands by crafting their Brand Identity, User
				Experience, and Custom Websites to connect people with brands Hi, I’m
				Zavier and I craft visual solutions for brands, corporations, startups,
				and entrepreneurs taking their visual impact to elite status. If your
				looking for your website to have the latest modern feel. Let’s create
				something together that will make heads turn!
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
