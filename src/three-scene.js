import React, {Component} from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'


class ThreeScene extends Component {

    componentDidMount() {
        const scene = new THREE.Scene()
        // scene.add(new THREE.AxesHelper(1.25))
        scene.background = new THREE.Color(0x00000)
        // var texture = new THREE.TextureLoader().load( "threebg.jpeg" );
        // scene.background = texture;
        
        const light = new THREE.AmbientLight(0xffffff, 6)
        light.position.set( 0, 0, 30 );
        scene.add( light );
     
        
        const camera = new THREE.PerspectiveCamera(
            70,
            1,
            0.1,
            1000
        )
        
        camera.position.z = 5
        camera.position.y = 1.5
        camera.position.x = 1.25
        
        
        
        const renderer = new THREE.WebGLRenderer({antialias: true})
        renderer.physicallyCorrectLights = false
        renderer.shadowMap.enabled = true
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.setSize(1000, 1000)
        document.body.appendChild(renderer.domElement)
        
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enableZoom = false
        controls.enablePan = false
        controls.target.set(1.25, 1.5, 0)
        
        const loader = new GLTFLoader()
        loader.load(
            'straight.glb',
            function (gltf) {
                gltf.scene.traverse(function (child) {
                    if ((child).isMesh) {
                        const m = child
                        m.receiveShadow = true
                        m.castShadow = true
                    }
                    if ((child).isLight) {
                        const l = child
                        l.castShadow = true
                        l.shadow.bias = -0.003
                        l.shadow.mapSize.width = 2048
                        l.shadow.mapSize.height = 2048
                    }
                })
                scene.add(gltf.scene)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )
        
        window.addEventListener('resize', onWindowResize, false)
        function onWindowResize() {
            // camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            // renderer.setSize(window.innerWidth, window.innerHeight)
            render()
        }
        
        const stats = Stats()
        document.body.appendChild(stats.dom)
        
        function animate() {
            requestAnimationFrame(animate)
        
            controls.update()
        
            render()
        
            stats.update()
        }
        
        function render() {
            renderer.render(scene, camera)
        }
        
        animate()
    }

    render() {
        return(
            <div
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
    }
}

export default ThreeScene;