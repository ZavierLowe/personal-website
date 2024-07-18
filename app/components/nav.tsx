import Link from 'next/link'
import path from 'path';
import React from 'react'

const navItems = {
 
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
			<nav className="fixed top-4 mx-auto w-[80%] left-0 right-0 z-50 flex justify-between items-center border border-1 rounded-xl p-3 bg-blur backdrop-blur-[130px] shadow-nav">
				<Link href={'/'} className="font-[500] text-xl">Zavier Lowe</Link>
				<div className="flex flex-row space-x-0 pr-1 font-[400] text-lg">
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
		</aside>
	);
}
