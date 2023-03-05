import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(
	scene,
	glbPath,
	options = { recieveShadow: true, castShadow: true }
) {
	const { recieveShadow, castShadow } = options;
	return new Promise((resolve, reject) => {
		const loader = new GLTFLoader();
		loader.load(
			glbPath,
			(gltf) => {
				const object = gltf.scene;
				object.name = 'desk';
				object.position.x = 0;
				object.position.y = 0;
				object.recieveShadow = recieveShadow;
				object.castShadow = castShadow;

				scene.add(object);

				object.traverse((child) => {
					if (child.isMesh) {
						child.castShadow = castShadow;
						child.recieveShadow = recieveShadow;
						// child.geometry.computeBoundingBox();
						// child.geometry.boundingBox.expandByScalar(10);
						child.frustumCulled = false;
					}
				});

				resolve(object);
			},
			undefined,
			(error) => {
				reject(error);
			}
		);
	});
}
