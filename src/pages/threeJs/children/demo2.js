import React, {memo, useRef,useEffect} from 'react'
import * as THREE from 'three'
import Stats from 'three/addons/libs/stats.module.js';
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {useWindowSize} from "../../../utils/useWindowSize";


const Demo1 = memo(function (props) {
  const webgl = useRef()
  const { width,height } = useWindowSize()

  // 创建 场景
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('black')

  // 创建 透视相机（PerspectiveCamera）
  const camera = new THREE.PerspectiveCamera(50 , width / height ,1 ,1000)
  camera.position.z = 100

  const renderer = new THREE.WebGLRenderer({antialias:true})
  renderer.setPixelRatio(window.devicePixelRatio) // 设置像素密度为 windows.设备像素比
  renderer.setSize(width,height)

  // 轨道控制器
  const controls = new OrbitControls(camera,renderer.domElement)
  // 添加坐标辅助器
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper );

  const state = new Stats()

  // 创建立体模型
  // const geometry = new THREE.BoxGeometry(30,30,30)
  // const material = new THREE.MeshLambertMaterial()
  // const cube = new THREE.Mesh(geometry,material)
  // scene.add(cube)
  // 创建 12 面缓冲体
  const geometry = new THREE.DodecahedronGeometry(20,0)
  const material = new THREE.MeshLambertMaterial()
  const cube = new THREE.Mesh(geometry,material)
  scene.add(cube)


  // 创建 球体
  const sphere = new THREE.SphereGeometry(0.5,50,50)

  // 创建 轨道 点 线 , 参数 ：颜色 ，强度，距离
  const light1 = new THREE.PointLight(0xff0040, 2, 100)
  // 球体和基础网格材质，这种材质不受光照的影响
  light1.add( new THREE.Mesh(sphere , new THREE.MeshBasicMaterial({ color: 0xff0040 } )))
  scene.add(light1)

  const light2 = new THREE.PointLight(0x0040ff, 2, 50 )
  light2.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff } )))
  scene.add(light2)

  const light3 = new THREE.PointLight(0x80ff80, 2, 50 )
  light3.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 } )))
  scene.add(light3)

  const light4 = new THREE.PointLight(0xffaa00, 2, 50 )
  light4.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 } )))
  scene.add(light4)

  const light5 = new THREE.PointLight(0x8B00FF, 2, 50 )
  light5.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x8B00FF } )))
  scene.add(light5)

  const light6 = new THREE.PointLight(0x00FF00, 2, 50 )
  light6.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x00FF00 } )))
  scene.add(light6)

  const light7 = new THREE.PointLight(0xFF7F00, 2, 50 )
  light7.add( new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xFF7F00 } )))
  scene.add(light7)


  const onWindowsResize = () => {
    camera.aspect = width / height
    // 如果屏幕缩放比改变，设置 投影矩阵
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth,window.innerHeight)
  }

  useEffect(()=>{
    window.addEventListener('resize',onWindowsResize)

    return ()=>{
      window.removeEventListener('resize',onWindowsResize)
    }
  })

  // 轨道控制器更新
  controls.update()

  function animate() {
    // 请求动画帧
    // 当然啦，我们的确可以用setInterval，但是，requestAnimationFrame有很多的优点。
    // 最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
    requestAnimationFrame( animate );

    const time = Date.now() * 0.0005

    // sin 方法返回一个 -1 到 1 之间的数值，表示给定角度（单位：弧度）的正弦
    light1.position.x = Math.sin(time * 0.7) * 30
    // cos 方法返回一个 -1 到 1 之间的数值，表示角度（单位：弧度）的余弦值。
    light1.position.y = Math.cos(time * 0.5) * 40
    light1.position.z = Math.cos(time * 0.3) * 30

    light2.position.x = Math.sin(time * 0.3) * 30
    light2.position.y = Math.cos(time * 0.8) * 40
    light2.position.z = Math.cos(time * 0.2) * 30

    light3.position.x = Math.sin(time * 0.4) * 30
    light3.position.y = Math.cos(time * 0.9) * 50
    light3.position.z = Math.cos(time * 0.3) * 30

    light4.position.x = Math.sin(time * 0.8) * 70
    light4.position.y = Math.cos(time * 0.8) * 20
    light4.position.z = Math.cos(time * 0.6) * 50

    light5.position.x = Math.sin(time * 0.4) * 10
    light5.position.y = Math.cos(time * 0.2) * 40
    light5.position.z = Math.cos(time * 0.6) * 50

    light6.position.x = Math.sin(time * 0.1) * 30
    light6.position.y = Math.cos(time * 0.5) * 40
    light6.position.z = Math.cos(time * 0.6) * 50

    light7.position.x = Math.sin(time * 0.4) * 60
    light7.position.y = Math.cos(time * 0.7) * 80
    light7.position.z = Math.cos(time * 0.1) * 30

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;

    renderer.render( scene, camera );
    state.update();
  }
  useEffect(()=>{
    animate();
  })


  useEffect(() => {
    // renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的<canvas>元素。
    webgl.current.appendChild(renderer.domElement)
    webgl.current.appendChild(state.dom)
    return ()=>{
      console.log('销毁demo2')
      scene.remove(light1,light2,light3,light4,light5,light6,light7,cube)
      scene.clear();
      renderer.dispose();
      renderer.content = null;

      cancelAnimationFrame(animate)
      geometry.dispose()
      material.dispose()
      sphere.dispose()
      light1.dispose()
      light2.dispose()
      light3.dispose()
      light4.dispose()
      light5.dispose()
      light6.dispose()
      light7.dispose()
    }
  }, [renderer]);



  return (
    <div ref={webgl} />
  )

})




export default Demo1