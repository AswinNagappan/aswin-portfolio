gsap.registerPlugin(ScrollTrigger)

/* HERO ANIMATION */

gsap.from(".hero-title",{
y:-100,
opacity:0,
duration:1
})

/* SECTION SCROLL ANIMATIONS */

gsap.utils.toArray(".section-title").forEach(title=>{

gsap.from(title,{
scrollTrigger:{
trigger:title,
start:"top 80%"
},
y:100,
opacity:0,
duration:1
})

})

/* SKILL ANIMATION */

gsap.from(".skill",{
scrollTrigger:{
trigger:"#skills",
start:"top 80%"
},
y:100,
opacity:0,
stagger:0.2
})

/* PROJECT ANIMATION */

gsap.from(".project",{
scrollTrigger:{
trigger:"#projects",
start:"top 80%"
},
scale:0.8,
opacity:0,
stagger:0.3
})

/* THREEJS GALAXY */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=30

const starCount=10000
const positions=new Float32Array(starCount*3)

for(let i=0;i<starCount;i++){

const i3=i*3
const radius=Math.random()*25
const spin=radius*2

positions[i3]=Math.cos(spin)*radius
positions[i3+1]=(Math.random()-0.5)*2
positions[i3+2]=Math.sin(spin)*radius

}

const geometry=new THREE.BufferGeometry()

geometry.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
)

const material=new THREE.PointsMaterial({
color:0xffffff,
size:0.1
})

const stars=new THREE.Points(geometry,material)

scene.add(stars)

function animate(){

requestAnimationFrame(animate)

stars.rotation.y+=0.0005

renderer.render(scene,camera)

}

animate()

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})
