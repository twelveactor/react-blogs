import React, {memo, useRef,useEffect} from 'react'
import * as THREE from 'three'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js';
import {useWindowSize} from "../../../utils/useWindowSize";


const Demo1 = memo(function (props) {
  const webgl = useRef()
  const {width,height} = useWindowSize()
  let camera, scene, renderer, composer;
  let mesh;

  let afterimagePass;
  const params = {
    enable: true
  };

  // 渲染器。这里是施展魔法的地方
  renderer = new THREE.WebGLRenderer({ antialias:true,alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio) // 设置为 Windows 的设备像素比
  renderer.setSize( width, height );// updateStyle（第三个参数）希望保持你的应用程序的尺寸，但是以较低的分辨率来渲染，以一半的分辨率来进行渲染。
  renderer.setClearAlpha(0);
  // 将 canvas 加入dom,不能在虚拟dom中
  useEffect(() => {
    // renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的<canvas>元素。
    webgl.current.appendChild(renderer.domElement)
    webgl.current.appendChild(state.dom)
    // console.log(renderer)
    return ()=>{
      console.log('销毁demo1')
      scene.remove(mesh)
      scene.clear();
      scene = null;
      camera = null;
      renderer.dispose();
      renderer.content = null;
      renderer = null;
      cancelAnimationFrame(animate)
      geometry.dispose()
      material.dispose()
    }
  }, [renderer]);

  /**
   * 创建 PerspectiveCamera（透视摄像机）。
   * fov: 视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
   * aspect: 长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
   * 近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中
   */
   // camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
   camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 400;
  // camera.lookAt(0,0,0)

  // 创建一个场景：为了真正能够让你的场景借助three.js来进行显示，我们需要以下几个对象：场景、相机和渲染器，这样我们就能透过摄像机渲染出场景。
   scene = new THREE.Scene();
  // 纹理贴图
  // const texture = new THREE.TextureLoader().load( require('../../../assets/img/back/953337.jpg') );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set( 4, 4 );
  // scene.background = texture // 设置 图片 背景
  scene.background = new THREE.Color( 0x000000 );
  scene.fog = new THREE.Fog(0x000000,1,1000) // 线性雾: Fog( color : Integer, near : Float, far : Float )

  /**
   * 创建 BoxGeometry（立方体）对象。参数 宽高纵深，后三个可选为 分段数
   */
  const geometry = new THREE.BoxGeometry( 150, 150, 150,2,2,2 );
  // 材质
  const material = new THREE.MeshNormalMaterial()
  // 一个Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。
  mesh = new THREE.Mesh( geometry, material );
  // cube.layers.set(1) //分层渲染，threejs的.layer属性，使运动的物体与静止的物体处于不同的层
  // 将 立方体 立锥体 实例对象添加到场景中
  scene.add( mesh );

  /**
   * 创建 状态监听器
   */
  const state = new Stats()


  /**
   * 创建轨道控制器
   */
  const controls = new OrbitControls(camera,renderer.domElement)

  /**
   * 创建 辅助坐标
   */
  // const axHelper = new THREE.AxesHelper(5)
  // scene.add(axHelper)



  // 后期处理： 效果合成器，产生最终视觉效果的后期处理过程链
  // postprocessing

  composer = new EffectComposer( renderer );
  let renderPass = new RenderPass( scene, camera )
  composer.addPass( renderPass  );

  afterimagePass = new AfterimagePass();
  // afterimagePass.uniforms["damp"].value = 0.8
  composer.addPass( afterimagePass );// 将运动幻影添加到过程链

  useEffect(()=>{
    window.addEventListener('resize',onWindowsResize)
    // console.log(window.innerWidth,window.innerHeight)

    return () => {
      window.removeEventListener('resize',onWindowsResize)
    }
  },[window.innerWidth,window.innerHeight])


  const onWindowsResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix() // 窗口变化，摄像机也要变化
    renderer.setSize(window.innerWidth,window.innerHeight)
    composer.setSize(window.innerWidth,window.innerHeight)
  }



  useEffect(()=>{
    const gui = new GUI( { name: 'Damp setting' } );
    /**
     * 创建 GUI
     */
     gui.add( afterimagePass.uniforms[ 'damp' ], 'value', 0.88,1 ).step( 0.001 ); // gui 渲染运动幻影
     gui.add(params , 'enable')

    return () => {
      gui.destroy()
    }
  })

  controls.update()
  // 现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。
  // 为此，我们需要使用一个被叫做“渲染循环”（render loop）或者“动画循环”（animate loop）的东西。
  function animate() {
    // 当然啦，我们的确可以用setInterval，但是，requestAnimationFrame有很多的优点。
    // 最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
    requestAnimationFrame( animate );
    // 使立方体动起来
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    // 根据 enable 可以设置是否开启 运动阴影
    if ( params.enable ) {
      composer.render();
    } else {
      renderer.render( scene, camera );
    }

    state.update()
    // renderer.render( scene, camera );
  }

  useEffect(()=>{
    animate();
  })


  return (
    <div ref={webgl} />
  )

})




export default Demo1