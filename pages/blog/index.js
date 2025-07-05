// pages/blog/index.js
import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import {
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Box,
} from '@mui/material'; // Material-UI components
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // For a 'Read More' icon (optional)

import BlogLayout from '../../src/components/layouts/BlogLayout';

export default function BlogIndex({ posts }) {
	return (
		<BlogLayout>
			<Head>
				<title>Thoughts in Writing by khang le</title>
				<meta
					name="description"
					content="A list of all my blog posts and articles."
				/>
			</Head>
			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Grid container spacing={2}>
					{posts.map((post) => (
						<Grid item xs={12} sm={6} md={4} key={post.slug}>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									background: 'rgba(255, 255, 255, 0.02)', // Semi-transparent background
									backdropFilter: 'blur(10px)',
									border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
									boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
									borderRadius: 2,
									paddingLeft: 3,
									paddingRight: 3,
									paddingTop: 2,
									paddingBottom: 2,
								}}
							>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography variant="h5" component="h2" gutterBottom>
										<Link
											href={`/blog/${post.slug}`}
											passHref
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											{post.frontMatter.title}
										</Link>
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ mb: 1.5 }}
									>
										{post.frontMatter.date}
									</Typography>
									<Typography variant="body1" paragraph>
										{post.frontMatter.description}
									</Typography>
								</CardContent>
								<Box
									sx={{
										p: 2,
										pt: 0,
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<Link href={`/blog/${post.slug}`} passHref>
										<Button
											variant="text"
											color="primary"
											endIcon={<ArrowForwardIcon />}
											sx={{ textTransform: 'none' }}
										>
											Read More
										</Button>
									</Link>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>

				{posts.length === 0 && (
					<Typography
						variant="h6"
						color="text.secondary"
						align="center"
						sx={{ mt: 6 }}
					>
						No blog posts found yet. Check back soon!
					</Typography>
				)}
			</Container>
		</BlogLayout>
	);
}

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), 'public', 'posts');
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const slug = filename.replace(/\.md$/, '');
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, 'utf8');

		// Parse the front matter
		const { data: frontMatter } = matter(fileContents);

		// Basic validation for required fields
		if (!frontMatter.title || !frontMatter.date || !frontMatter.description) {
			console.warn(
				`Warning: Missing required front matter fields in ${filename}`
			);
			// You might want to skip this post or provide default values
		}

		return {
			slug,
			frontMatter: {
				title: frontMatter.title || 'Untitled Post',
				date: frontMatter.date || 'No date',
				description: frontMatter.description || 'No description available.',
			},
		};
	});
	// .sort((a, b) => {
	// 	// Optional: Sort posts by date, most recent first
	// 	const dateA = new Date(a.frontMatter.date);
	// 	const dateB = new Date(b.frontMatter.date);
	// 	return dateB.getTime() - dateA.getTime();
	// });

	return {
		props: {
			posts,
		},
	};
}
