import React, {memo, useEffect, useRef} from 'react'
import {TContentWrapper, THeaderWrapper, ThreeJsWrapper} from "./style";
import * as THREE from "three";
import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {AfterimagePass} from "three/addons/postprocessing/AfterimagePass";
import {useWindowSize} from "../../utils/useWindowSize";
import {NavLink} from 'react-router-dom'


const ThreeJs = memo(function (props) {
  const webgl = useRef();
  const {height} = useWindowSize()
  // let model ;

  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 400;


  const scene = new THREE.Scene();
  // const texture = new THREE.TextureLoader().load( require('../../assets/img/back/953337.jpg') );
  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // // texture.repeat.set(1 );
  // scene.background = texture // 设置 图片 背景
  // scene.background = new THREE.Color( 0xa0a0a0 );
  scene.fog = new THREE.Fog(0x000000,1,1000) // 线性雾: Fog( color : Integer, near : Float, far : Float )

  const geometry = new THREE.BoxGeometry( 250, 250, 250,2,2,2 );
  const material = new THREE.MeshNormalMaterial()
  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );


  const renderer = new THREE.WebGLRenderer({ alpha: true ,antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.setSize( 600,300 );
  renderer.setClearColor( 0x000000, 0);// 这是默认的设置如果没有改过 默认就行
  renderer.setClearAlpha(0);

  useEffect(() => {
    // model = document.getElementById('threeModel')
    // model.globalAlpha = 0.1
    // model.appendChild(renderer.domElement)
    // renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的<canvas>元素。
    webgl.current.appendChild(renderer.domElement)
    return ()=>{
      console.log('销毁three')
      scene.clear();
      renderer.dispose();
      renderer.content = null;
    }
  },[renderer]);

  // 后期处理： 效果合成器，产生最终视觉效果的后期处理过程链
  // postprocessing
  const composer = new EffectComposer( renderer );
  let renderPass = new RenderPass( scene, camera )
  composer.addPass( renderPass  );

  const afterimagePass = new AfterimagePass();
  composer.addPass( afterimagePass );// 将运动幻影添加到过程链

  useEffect(()=>{
    window.addEventListener('resize',onWindowsResize)

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



  function animate() {
    requestAnimationFrame( animate );
    // 使立方体动起来
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;

    composer.render();
    // renderer.render( scene, camera );
  }

  useEffect(()=>{
    animate();
  })



  return (
   <ThreeJsWrapper>
     <THeaderWrapper>
      <div className={'header-text'}>
        <h1 className={'title'}>Three.js 小 demo 练习成果展示</h1>
        <div className={'link'}>
          <span>three.js 官方文档: </span>
          <a href="https://threejs.org/docs" className={'link'}>https://threejs.org/docs</a>
        </div>
        <div  className={'link'}>
          <span>three.js 官方案例: </span>
          <a href="https://threejs.org/examples"  className={'link'}>https://threejs.org/examples</a>
        </div>
      </div>

      {/*<div className={'3d'} ref={webgl} style={{ backgroundColor: 'rgba(255,255,255,0.2)'}}/>*/}
      <div className={'three-3d'} ref={webgl} id={'threeModel'} />
     </THeaderWrapper>

     <TContentWrapper height={height - 300}>
      {/*<div className={'custom'}>*/}
      {/*  <h1>自定义</h1>*/}
      {/*</div>*/}
      <div className={'demo'}>
        <h1>ThreeJs Mini Demo</h1>
      </div>
       <div className={'list'}>
          <div className={'item'}>
            <img src={require('../../assets/img/item/demo1.png')} alt="" className={'img'}/>
            {/*<p className={'item-name'}>运动幻影小方盒</p>*/}
            <NavLink to={'/three/demo1'} className={'item-name'}>运动幻影小方盒</NavLink>
          </div>
         <div className={'item'}>
           <img src={require('../../assets/img/item/demo2.png')} alt="" className={'img'}/>
           <NavLink to={'/three/demo2'} className={'item-name'}>光影六边盒</NavLink>
           {/*<p className={'item-name'}>光影六边盒</p>*/}
         </div>
         <div className={'item'}>
           <img src={require('../../assets/img/item/demo3.png')} alt="" className={'img'}/>
           <NavLink to={'/three/demo3'} className={'item-name'}>我的小世界</NavLink>
           {/*<p className={'item-name'}>我的小世界</p>*/}
         </div>
       </div>
     </TContentWrapper>

   </ThreeJsWrapper>
  )

})




export default ThreeJs