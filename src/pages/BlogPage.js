import React from 'react';

import BlogPost from '../components/blog/BlogPost';

import { Box } from '@mui/material';
import BlogLayout from '../components/layouts/BlogLayout';

export default function BlogPage({ markdownContent, frontMatter }) {
	return (
		<BlogLayout>
			<Box component="main" sx={{ flexGrow: 1 }}>
				<BlogPost markdownContent={markdownContent} frontMatter={frontMatter} />
			</Box>
		</BlogLayout>
	);
}
