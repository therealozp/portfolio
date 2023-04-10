import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from './model';

// import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
// import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

function easeOutCircular(x) {
	return -Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDesk = ({ animationFinished }) => {
	const refContainer = useRef();
	const [loading, setLoading] = useState(false);
	const refRenderer = useRef();
	// const [renderer, setRenderer] = useState();
	// const [camera, setCamera] = useState();
	// const [controls, setControls] = useState();
	/* eslint-disable react-hooks/exhaustive-deps */

	useEffect(() => {
		const { current: container } = refContainer;
		if (container && animationFinished) {
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
				-20,
				20 * Math.cos(Math.PI * 0.2)
			);

			const scale = sceneHeight * 0.007 + 4.8;
			const camera = new THREE.OrthographicCamera(
				-scale,
				scale,
				scale,
				-scale,
				0.1,
				50000
			);

			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;

			camera.position.copy(initialPosition);
			camera.lookAt(target);

			const ambientLight = new THREE.AmbientLight(0xfffffff, 1);

			const rectposX = 4.3;
			const rectposZ = 0;
			const rectposY = 6;

			const lampLight = new THREE.PointLight(0xfada4d, 2, 20);
			lampLight.position.set(rectposX, rectposY, rectposZ);
			lampLight.shadow.bias = -0.0006;
			// lampLight.lookAt(-5, 0, rectposZ);
			lampLight.castShadow = true;
			// const pointLightHelper = new THREE.PointLightHelper(lampLight, 1);
			// const axesHelper = new THREE.AxesHelper(5);

			// scene.add(axesHelper);
			scene.add(ambientLight);
			scene.add(lampLight);
			// scene.add(pointLightHelper);
			const controls = new OrbitControls(camera, renderer.domElement);

			controls.autoRotateSpeed = -2;
			controls.autoRotate = true;
			controls.target = target;
			// setControls(controls);
			setLoading(true);
			loadGLTFModel(scene, '/myroom.glb', {
				receiveShadow: true,
				castShadow: true,
			}).then(() => {
				animate();
				setLoading(false);
			});
			// console.log(scene);

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
	}, [animationFinished]);

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
					width: '480px',
					height: '480px',
					marginBottom: -40,
				},
				m: {
					width: '560px',
					height: '560px',
					// marginBottom: -140,
				},
				position: 'relative',
				'&:hover': {
					cursor: 'grab',
				},
			}}
			className="voxel-desk"
		>
			{loading && (
				<CircularProgress
					sx={{ position: 'absolute', top: '25%', right: '50%' }}
					size="3rem"
				/>
			)}
		</Box>
	);
};

export default VoxelDesk;
