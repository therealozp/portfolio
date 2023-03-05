import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from './model';

function easeOutCircular(x) {
	return -Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDesk = () => {
	const refContainer = useRef();
	const [loading, setLoading] = useState(true);
	const refRenderer = useRef();
	// const [renderer, setRenderer] = useState();
	// const [camera, setCamera] = useState();
	// const [controls, setControls] = useState();

	/* eslint-disable react-hooks/exhaustive-deps */

	useEffect(() => {
		const { current: container } = refContainer;
		if (container) {
			const sceneWidth = container.clientWidth;
			const sceneHeight = container.clientHeight;

			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true,
			});

			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(sceneWidth, sceneHeight);
			renderer.outputEncoding = THREE.sRGBEncoding;
			container.appendChild(renderer.domElement);
			refRenderer.current = renderer;
			// setRenderer(renderer);

			const scene = new THREE.Scene();
			const target = new THREE.Vector3(-0.5, 1.2, 0);
			const initialPosition = new THREE.Vector3(
				20 * Math.sin(Math.PI * 0.2),
				10,
				20 * Math.cos(Math.PI * 0.2)
			);

			const scale = sceneHeight * 0.005 + 4.8;
			const camera = new THREE.OrthographicCamera(
				-scale,
				scale,
				scale,
				-scale,
				0.1,
				50000
			);

			camera.position.copy(initialPosition);
			camera.lookAt(target);

			// setCamera(camera);

			const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
			scene.add(ambientLight);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotateSpeed = -2;
			controls.autoRotate = true;
			controls.target = target;
			// setControls(controls);

			setLoading(true);

			loadGLTFModel(scene, '/cat.glb', {
				recieveShadow: false,
				castShadow: false,
			}).then(() => {
				animate();
				setLoading(false);
			});

			let req = null;

			let frame = 0;

			const animate = () => {
				req = requestAnimationFrame(animate);

				frame = frame <= 100 ? frame + 1 : frame;

				if (frame <= 100) {
					const p = initialPosition;
					const rotSpeed = -easeOutCircular(frame / 120) * Math.PI * 10;

					camera.position.y = 10;
					camera.position.x = -(
						p.x * Math.cos(rotSpeed) +
						p.z * Math.sin(rotSpeed)
					);
					camera.position.z = -(
						p.z * Math.cos(rotSpeed) -
						p.x * Math.sin(rotSpeed)
					);
					camera.lookAt(target);
				} else {
					controls.update();
				}

				renderer.render(scene, camera);
			};

			return () => {
				cancelAnimationFrame(req);
				renderer.domElement.remove();
				renderer.dispose();
			};
		}
	}, []);

	const handleResize = useCallback(() => {
		const { current: renderer } = refRenderer;
		const { current: container } = refContainer;
		if (container && renderer) {
			const sceneWidth = container.clientWidth;
			const sceneHeight = container.clientHeight;

			renderer.setSize(sceneWidth, sceneHeight);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize, false);
		return () => {
			window.removeEventListener('resize', handleResize, false);
		};
	}, [handleResize]);
	return (
		<Box
			ref={refContainer}
			sx={{
				s: {
					width: 280,
					height: 280,
					marginBottom: -40,
				},
				m: {
					width: 720,
					height: 720,
					marginBottom: -140,
				},
				l: {
					width: 720,
					height: 720,
					marginBottom: -200,
				},
				position: 'relative',
			}}
		>
			{loading && (
				<CircularProgress
					sx={{ position: 'absolute', top: '50%', bottom: '50%' }}
					size="3rem"
				/>
			)}
		</Box>
	);
};

export default VoxelDesk;
