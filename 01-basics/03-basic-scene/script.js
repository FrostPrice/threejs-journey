// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // Add the mesh to the scene!!!

// sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera (Just a point of view, and there can be multiple cameras)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // fov = field of view (degrees), aspect_razio = width of the render divided by the height of the render
// Axis:
camera.position.z = 3; // z === sides
camera.position.x = 1; // x === forward/backward
camera.position.y = 1; // y === up
scene.add(camera); // Add the camera to the scene!!!

// Renderer (Render the scene from the camera point of view, it's drawn into a canvas)
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
