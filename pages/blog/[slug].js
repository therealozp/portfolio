import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import BlogPost from '../../src/pages/BlogPage';
import Head from 'next/head';

export default function Blog({ frontMatter, markdownContent }) {
	return (
		<>
			<Head>
				<title>{frontMatter.title} | Thoughts in Writing</title>
			</Head>
			<BlogPost frontMatter={frontMatter} markdownContent={markdownContent} />
		</>
	);
}

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), 'public', 'posts');
	const filenames = fs.readdirSync(postsDirectory);

	const paths = filenames.map((filename) => ({
		params: { slug: filename.replace(/\.md$/, '') },
	}));

	return {
		paths,
		fallback: false, // Set to 'blocking' or true if you want to handle new posts or build on demand
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const filePath = path.join(process.cwd(), 'public', 'posts', `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, 'utf8');

	const { data: frontMatter, content: markdownContent } = matter(fileContents);
	console.log(frontMatter);
	return {
		props: {
			markdownContent, // Pass the raw Markdown content
			frontMatter,
		},
	};
}
