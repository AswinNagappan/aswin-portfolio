const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 50

const nodes = []
const nodeCount = 120

const geometry = new THREE.SphereGeometry(0.4,8,8)

const material = new THREE.MeshBasicMaterial({
color:0x00ffcc
})

for(let i=0;i<nodeCount;i++){

const node = new THREE.Mesh(geometry,material)

node.position.x = (Math.random()-0.5)*80
node.position.y = (Math.random()-0.5)*80
node.position.z = (Math.random()-0.5)*80

scene.add(node)

nodes.push(node)

}

const lineMaterial = new THREE.LineBasicMaterial({
color:0x00ffcc,
opacity:0.3,
transparent:true
})

function connectNodes(){

nodes.forEach(a=>{

nodes.forEach(b=>{

const distance = a.position.distanceTo(b.position)

if(distance < 12){

const points = []

points.push(a.position)
points.push(b.position)

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(lineGeometry,lineMaterial)

scene.add(line)

}

})

})

}

connectNodes()

function animate(){

requestAnimationFrame(animate)

nodes.forEach(node=>{
node.rotation.x += 0.002
node.rotation.y += 0.002
})

scene.rotation.y += 0.0005

renderer.render(scene,camera)

}

animate()

window.addEventListener("resize",()=>{

camera.aspect = window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})
