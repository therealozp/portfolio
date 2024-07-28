'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { gsap } from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import Image from 'next/image';

gsap.registerPlugin(Draggable);

const projects = [
	{
		id: 1,
		name: 'tldvuwen',
		fullName: 'the last data structures visualizer you will ever need',
		image: '/images/dsa-viz/dsa-viz-astar.gif',
		description:
			'Vite + raw data structures knowledge. a data structures visualizer that is actually interactive, and a pathfinder that I am especially proud of.',
		status: 'deployed',
		url: 'https://visual-dsa.vercel.app/',
		date: '01/2024 - present',
	},
	{
		id: 2,
		name: 'LegAI',
		fullName: 'LegAI',
		image: 'N/A',
		description:
			'an AI retrieval system for legal documents. per-case information retrieval with Chroma and Postgres, complete with a NextJS frontend. runner up for Morgan & Morgan AI challenge.',
		status: 'github',
		url: '',
		date: '10/2023',
	},
	{
		id: 9,
		name: 'Cash Clams',
		fullName: 'Cash Clams',
		image: '/images/cash-clams/cash-clams.png',
		description:
			'ShellHacks hackathon submission. a finance literacy app that allows user to pick a theme, and develop 10 section courses on that very theme to learn finance concepts. includes a quiz module.',
		status: 'github',
		url: 'https://github.com/therealozp/cash-clams',
		date: '09/2023',
	},
	{
		id: 3,
		name: 'ARIS',
		fullName: 'ARIS Platform',
		image: 'N/A',
		description:
			"a custom 3D editor for 3D models using ThreeJS that allows for scene editing. AR viewer created with Google's model-viewer.",
		status: 'deployed',
		url: 'https://arisplatform.io/',
		date: '06/2023 - present',
	},
	{
		id: 4,
		name: 'ChanceMap',
		fullName: 'ChanceMap',
		image: '/images/chancemap/chancemap.png',
		description:
			'a social media for college students and high school students who are looking for extracurricular opportunities. 1000+ users in first iteration.',
		status: 'down',
		url: 'https://chancemap.com/',
		date: '06/2021 - 06/2022',
	},
	{
		id: 5,
		name: 'Cureator',
		fullName: 'Cureator',
		image: '/images/cureator/Cureator.png',
		description:
			'a medicine and pharmacy finder for the Vietnamese market. includes local and international medicine, breakdowns of causes and common symptoms. made as a PWA with NextJS and custom backend with GraphQL and Go.',
		status: 'down',
		url: 'https://cureator.vercel.app/',
		date: '06/2021 - 10/2021',
	},
	{
		id: 6,
		name: 'Excellaca',
		fullName: 'Excel Academy',
		image: '/images/excellaca/excellaca-mockup.png',
		description:
			'a learning platform that is made by students, for students. includes video courses, a discussion community, and other nifty features. 100+ weekly users when active.',
		status: 'down',
		url: 'https://excellaca.org',
		date: '06/2021 - 10/2022',
	},
	{
		id: 7,
		name: 'VSPACE Ed',
		fullName: 'VSPACE Education',
		image: '/images/vspace/vspace-img.png',
		description:
			'marketing website made for an educational institution that provides English courses to students of all abilities. 5000+ visits in first month launch of website. Framer Animations, Figma, and NextJS.',
		status: 'down',
		url: 'https://vspace.org.vn',
		date: '06/2021 - 10/2021',
	},
	{
		id: 8,
		name: 'Lexi',
		fullName: 'Lexi',
		image: '/images/lexi/landing.png',
		description:
			'a quiz app that helps you learn English vocabulary. 1000+ users in first month of launch.',
		status: 'deployed',
		url: 'https://lexi.vercel.app',
		date: '01/2021',
	},
	{
		id: 10,
		name: 'Queb',
		fullName: 'Queb',
		image: '/images/queb/queb.png',
		description:
			'a platform that matches prospective mentors and students through a strict set of criteria. built the recommendation system, and the feedback framework. won 3rd prize in city-wide scientific research competition.',
		status: 'down',
		url: '',
		date: '03/2022',
	},
];

/*
    taken from GSAP
    This helper function makes a group of elements animate along the y-axis in a seamless, responsive loop.
    Features:
    - Uses yPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
    - When each item animates up or down enough, it will loop back to the other side
    - Optionally pass in a config object with values like draggable: true, center: true, 
      speed (default: 1, which travels at roughly 100 pixels per second), paused (boolean), repeat, 
      reversed, enterAnimation, leaveAnimation, and paddingBottom.
    - The returned timeline will have the following methods added to it:
    - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
    - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
    - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
    - current() - returns the current index (if an animation is in-progress, it reflects the final index)
    - times - an Array of the times on the timeline where each element hits the "starting" spot.
    - elements - an Array of the elements that are being controlled by the timeline
    */
function verticalLoop(items, config) {
	let timeline;
	// items = gsap.utils.toArray(items);
	config = config || {};
	gsap.context(() => {
		let onChange = config.onChange,
			lastIndex = 0,
			tl = gsap.timeline({
				repeat: config.repeat,
				onUpdate:
					onChange &&
					function () {
						let i = tl.closestIndex();
						if (lastIndex !== i) {
							lastIndex = i;
							onChange(items[i], i);
						}
					},
				paused: config.paused,
				defaults: { ease: 'none' },
				onReverseComplete: () =>
					tl.totalTime(tl.rawTime() + tl.duration() * 100),
			}),
			length = items.length,
			startY = items[0].offsetTop,
			times = [],
			heights = [],
			spaceBefore = [],
			yPercents = [],
			curIndex = 0,
			center = config.center,
			clone = (obj) => {
				let result = {},
					p;
				for (p in obj) {
					result[p] = obj[p];
				}
				return result;
			},
			pixelsPerSecond = (config.speed || 1) * 100,
			snap =
				config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
			timeOffset = 0,
			container =
				center === true
					? items[0].parentNode
					: gsap.utils.toArray(center)[0] || items[0].parentNode,
			totalHeight,
			getTotalHeight = () =>
				items[length - 1].offsetTop +
				(yPercents[length - 1] / 100) * heights[length - 1] -
				startY +
				spaceBefore[0] +
				items[length - 1].offsetHeight *
					gsap.getProperty(items[length - 1], 'scaleY') +
				(parseFloat(config.paddingBottom) || 0),
			populateHeights = () => {
				let b1 = container.getBoundingClientRect(),
					b2;
				startY = items[0].offsetTop;
				items.forEach((el, i) => {
					heights[i] = parseFloat(gsap.getProperty(el, 'height', 'px'));
					yPercents[i] = snap(
						(parseFloat(gsap.getProperty(el, 'y', 'px')) / heights[i]) * 100 +
							gsap.getProperty(el, 'yPercent')
					);
					b2 = el.getBoundingClientRect();
					spaceBefore[i] = b2.top - (i ? b1.bottom : b1.top);
					b1 = b2;
				});
				gsap.set(items, {
					// convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
					yPercent: (i) => yPercents[i],
				});
				totalHeight = getTotalHeight();
			},
			timeWrap,
			populateOffsets = () => {
				timeOffset = center
					? (tl.duration() * (container.offsetWidth / 2)) / totalHeight
					: 0;
				center &&
					times.forEach((t, i) => {
						times[i] = timeWrap(
							tl.labels['label' + i] +
								(tl.duration() * heights[i]) / 2 / totalHeight -
								timeOffset
						);
					});
			},
			getClosest = (values, value, wrap) => {
				let i = values.length,
					closest = 1e10,
					index = 0,
					d;
				while (i--) {
					d = Math.abs(values[i] - value);
					if (d > wrap / 2) {
						d = wrap - d;
					}
					if (d < closest) {
						closest = d;
						index = i;
					}
				}
				return index;
			},
			populateTimeline = () => {
				let i, item, curY, distanceToStart, distanceToLoop;
				tl.clear();
				for (i = 0; i < length; i++) {
					item = items[i];
					curY = (yPercents[i] / 100) * heights[i];
					distanceToStart = item.offsetTop + curY - startY + spaceBefore[0];
					distanceToLoop =
						distanceToStart + heights[i] * gsap.getProperty(item, 'scaleY');
					tl.to(
						item,
						{
							yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
							duration: distanceToLoop / pixelsPerSecond,
						},
						0
					)
						.fromTo(
							item,
							{
								yPercent: snap(
									((curY - distanceToLoop + totalHeight) / heights[i]) * 100
								),
							},
							{
								yPercent: yPercents[i],
								duration:
									(curY - distanceToLoop + totalHeight - curY) /
									pixelsPerSecond,
								immediateRender: false,
							},
							distanceToLoop / pixelsPerSecond
						)
						.add('label' + i, distanceToStart / pixelsPerSecond);
					times[i] = distanceToStart / pixelsPerSecond;
				}
				timeWrap = gsap.utils.wrap(0, tl.duration());
			},
			customAnimations = () => {
				let { enterAnimation, leaveAnimation } = config,
					eachDuration = tl.duration() / items.length;
				items.forEach((item, i) => {
					let anim = enterAnimation && enterAnimation(item, eachDuration, i),
						isAtEnd =
							anim &&
							tl.duration() -
								timeWrap(times[i] - Math.min(eachDuration, anim.duration())) <
								eachDuration - 0.05;
					anim &&
						tl.add(anim, isAtEnd ? 0 : timeWrap(times[i] - anim.duration()));
					anim = leaveAnimation && leaveAnimation(item, eachDuration, i);
					isAtEnd = times[i] === tl.duration();
					anim && anim.duration() > eachDuration && anim.duration(eachDuration);
					anim && tl.add(anim, isAtEnd ? 0 : times[i]);
				});
			},
			refresh = (deep) => {
				let progress = tl.progress();
				tl.progress(0, true);
				populateHeights();
				deep && populateTimeline();
				populateOffsets();
				customAnimations();
				deep && tl.draggable
					? tl.time(times[curIndex], true)
					: tl.progress(progress, true);
			},
			onResize = () => refresh(true),
			proxy;
		gsap.set(items, { y: 0 });
		populateHeights();
		populateTimeline();
		populateOffsets();
		customAnimations();
		window.addEventListener('resize', onResize);
		function toIndex(index, vars) {
			vars = clone(vars);
			Math.abs(index - curIndex) > length / 2 &&
				(index += index > curIndex ? -length : length); // always go in the shortest direction
			let newIndex = gsap.utils.wrap(0, length, index),
				time = times[newIndex];
			if (time > tl.time() !== index > curIndex) {
				// if we're wrapping the timeline's playhead, make the proper adjustments
				time += tl.duration() * (index > curIndex ? 1 : -1);
			}
			if (vars.revolutions) {
				time += tl.duration() * Math.round(vars.revolutions);
				delete vars.revolutions;
			}
			if (time < 0 || time > tl.duration()) {
				vars.modifiers = { time: timeWrap };
			}
			curIndex = newIndex;
			vars.overwrite = true;
			gsap.killTweensOf(proxy);
			return tl.tweenTo(time, vars);
		}
		tl.elements = items;
		tl.next = (vars) => toIndex(curIndex + 1, vars);
		tl.previous = (vars) => toIndex(curIndex - 1, vars);
		tl.current = () => curIndex;
		tl.toIndex = (index, vars) => toIndex(index, vars);
		tl.closestIndex = (setCurrent) => {
			let index = getClosest(times, tl.time(), tl.duration());
			setCurrent && (curIndex = index);
			return index;
		};
		tl.times = times;
		tl.progress(1, true).progress(0, true); // pre-render for performance
		if (config.reversed) {
			tl.vars.onReverseComplete();
			tl.reverse();
		}
		if (config.draggable && typeof Draggable === 'function') {
			proxy = document.createElement('div');
			let wrap = gsap.utils.wrap(0, 1),
				ratio,
				startProgress,
				draggable,
				// dragSnap,
				align = () =>
					tl.progress(
						wrap(startProgress + (draggable.startY - draggable.y) * ratio)
					),
				syncIndex = () => tl.closestIndex(true);
			typeof InertiaPlugin === 'undefined' &&
				console.warn(
					'InertiaPlugin required for momentum-based scrolling and snapping. https://gsap.com/pricing'
				);
			draggable = Draggable.create(proxy, {
				trigger: items[0].parentNode,
				type: 'y',
				onPressInit() {
					gsap.killTweensOf(tl);
					startProgress = tl.progress();
					refresh();
					ratio = 1 / totalHeight;
					gsap.set(proxy, { y: startProgress / -ratio });
				},
				onDrag: align,
				onThrowUpdate: align,
				inertia: true,
				snap: (value) => {
					let time = -(value * ratio) * tl.duration(),
						wrappedTime = timeWrap(time),
						snapTime = times[getClosest(times, wrappedTime, tl.duration())],
						dif = snapTime - wrappedTime;
					Math.abs(dif) > tl.duration() / 2 &&
						(dif += dif < 0 ? tl.duration() : -tl.duration());
					return (time + dif) / tl.duration() / -ratio;
				},
				onRelease: syncIndex,
				onThrowComplete: syncIndex,
			})[0];
			tl.draggable = draggable;
		}
		tl.closestIndex(true);
		onChange && onChange(items[curIndex], curIndex);
		timeline = tl;
		return () => window.removeEventListener('resize', onResize); // cleanup
	});
	return timeline;
}

const ProjectSection = () => {
	const [selectedProject, setSelectedProject] = useState(0);

	useEffect(() => {
		const projectPageNames = gsap.utils.toArray('.projectPageName');
		const tl = verticalLoop(projectPageNames, {
			repeat: -1,
			center: true,
			paused: true,
			draggable: true,
		});
		projectPageNames.forEach((box, i) =>
			box.addEventListener('click', () =>
				tl.toIndex(i, { duration: 1, ease: 'power1.inOut' })
			)
		);

		// Cleanup on unmount
		return () => {
			tl.kill();
			projectPageNames.forEach((box, i) =>
				box.removeEventListener('click', () =>
					tl.toIndex(i, { duration: 1, ease: 'power1.inOut' })
				)
			);
		};
	}, []);

	return (
		<Grid
			display="flex"
			alignItems="center"
			p={2}
			height="90vh"
			container
			overflow="hidden"
		>
			<Grid
				sx={{
					height: '75vh',
				}}
				item
				xs={6}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '80vh',
						// overflowY: 'hidden',
					}}
				>
					{projects.map((project, index) => (
						<Typography
							key={project.name}
							variant="h1"
							sx={{
								cursor: 'pointer',
								fontFamily: 'Simplon Mono Medium Regular',
								textTransform: 'uppercase',
								fontWeight: '700',
								lineHeight: '1.4',
								letterSpacing: '0.05em',
								filter:
									selectedProject === index
										? 'brightness(1)'
										: 'brightness(0.6)',
								transition: 'filter 0.3s ease-in-out',
								fontSize: 'clamp(1.5rem, 6vw, 7rem)',
							}}
							className="projectPageName"
							onClick={() => setSelectedProject(index)}
						>
							{project.name}
						</Typography>
					))}
				</Box>
			</Grid>
			<Grid xs={6} item>
				<Box
					width="100%"
					height="100%"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							position: 'relative',
							height: '40vh',
							aspectRatio: '16/9',
							marginBottom: '32px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{projects[selectedProject].image !== 'N/A' ? (
							<Image
								src={projects[selectedProject].image}
								layout="fill"
								objectFit="cover"
							/>
						) : (
							<Typography sx={{ fontFamily: 'monospace' }}>
								this project doesn&apos;t have an image ╥ᆺ╥； (yet!)
							</Typography>
						)}
					</Box>
					<Box width="100%" height="30vh">
						<Typography
							variant="h5"
							sx={{ fontFamily: 'Simplon Mono Medium Regular' }}
						>
							{projects[selectedProject].fullName}
						</Typography>
						<Typography sx={{ fontFamily: 'monospace' }}>
							{projects[selectedProject].description}
						</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProjectSection;
