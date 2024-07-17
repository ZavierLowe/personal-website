import Link from 'next/link'
import React from 'react'

const navItems = {
  '/': {
    name: 'Zavier Lowe',
  },
  '/blog': {
    name: 'Blog',
  },
  '#Porfolio': {
    name: 'Portfolio',
  },
  'Playground': {
    name: 'Playground',
  },
}

export function Navbar() {
  return (
		<aside className="mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20 border p-4 rounded-2xl bg-blur">
				<nav
					className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
					id="nav">
					<div className="flex flex-row space-x-0 pr-10 font-white">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1">
									{name}
								</Link>
							);
						})}
					</div>
				</nav>
			</div>
			
		</aside>
	);
}
