/* Typing Animation */

const text=["Automation Engineer","SDET","AI Enthusiast"]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

current=text[i]

if(isDeleting){

document.querySelector(".typing").textContent=current.substring(0,j--)

if(j<0){

isDeleting=false
i++

if(i==text.length){
i=0
}

}

}

else{

document.querySelector(".typing").textContent=current.substring(0,j++)

if(j==current.length){
isDeleting=true
}

}

setTimeout(type,120)

}

type()


/* GSAP Scroll Animations */

gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero-title",{

y:-100,
opacity:0,
duration:1

})

gsap.from(".section-title",{

scrollTrigger:{

trigger:".section-title",
start:"top 80%"

},

y:100,
opacity:0,
duration:1

})

gsap.from(".skill-card",{

scrollTrigger:{

trigger:"#skills",
start:"top 80%"

},

y:100,
opacity:0,
stagger:0.3

})

gsap.from(".project-card",{

scrollTrigger:{

trigger:"#projects",
start:"top 80%"

},

scale:0.8,
opacity:0,
stagger:0.3

})


/* ThreeJS 3D Background */

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

camera.position.setZ(30)

const geometry=new THREE.TorusGeometry(10,3,16,100)

const material=new THREE.MeshStandardMaterial({

color:0x38bdf8,
wireframe:true

})

const torus=new THREE.Mesh(geometry,material)

scene.add(torus)

const light=new THREE.PointLight(0xffffff)

light.position.set(20,20,20)

scene.add(light)

function animate(){

requestAnimationFrame(animate)

torus.rotation.x+=0.01
torus.rotation.y+=0.005
torus.rotation.z+=0.01

renderer.render(scene,camera)

}

animate()
