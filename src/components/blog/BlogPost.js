'use client';

import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize'; // Crucial for safety!
import rehypeHighlight from 'rehype-highlight'; // For code highlighting

export default function BlogPost({ markdownContent, frontMatter }) {
	return (
		<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
			<Typography
				variant="h3"
				component="h1"
				gutterBottom
				sx={{ fontWeight: 900 }}
			>
				{frontMatter.title}
			</Typography>
			<Typography variant="subtitle1" color="#a6a69c" gutterBottom>
				{frontMatter.date}
			</Typography>
			<Box elevation={0} sx={{ p: 2, mt: 3 }}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[
						// rehypeRaw, // Use with caution! Only if you allow raw HTML within Markdown
						rehypeSanitize, // ESSENTIAL for sanitization
						rehypeHighlight,
					]}
					components={{
						p: ({ children }) => (
							<Typography variant="body1" sx={{ mb: 1.5 }}>
								{children}
							</Typography>
						),
						// You can also style other elements this way
						h1: ({ children }) => (
							<Typography variant="h4" component="h1" sx={{ mt: 3, mb: 1 }}>
								{children}
							</Typography>
						),
						h2: ({ children }) => (
							<Typography
								variant="h5"
								component="h2"
								sx={{ mt: 2.5, mb: 1, fontWeight: 600 }}
							>
								{children}
							</Typography>
						),
						ul: ({ children }) => (
							<Box component="ul" sx={{ ml: 2, mb: 1.5 }}>
								{' '}
								{/* Add left margin for list bullets */}
								{children}
							</Box>
						),
						ol: ({ children }) => (
							<Box component="ol" sx={{ ml: 2, mb: 1.5 }}>
								{children}
							</Box>
						),
						li: ({ children }) => (
							<Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
								{children}
							</Typography>
						),
					}}
				>
					{markdownContent}
				</ReactMarkdown>
			</Box>
		</Container>
	);
}
