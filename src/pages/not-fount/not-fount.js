import React, {memo, useEffect, useRef} from 'react'
import {NotFountWrapper} from "./style";
import {useWindowSize} from "../../utils/useWindowSize";
import * as THREE from 'three';
import { SVGRenderer } from 'three/addons/renderers/SVGRenderer.js';


const NotFount = memo(function () {
  const {width,height} = useWindowSize()
  const canvas = useRef();

  /**
   * three 3d 背景
   */
  const camera = new THREE.PerspectiveCamera(33,window.innerWidth / window.innerHeight ,0.1, 100)
  camera.position.z = 10
  const scene = new THREE.Scene()
  // const color = new THREE.Color("rgb(255,255,255)");
  const renderer = new SVGRenderer({antialias: true,alpha:true})
  // renderer.setSize(600,600)
  renderer.setSize(width, height)
  useEffect(()=>{
    // renderer.setClearColor(color,1)
    canvas.current.appendChild(renderer.domElement)
  },[canvas])

  // 创建 模型
  const vertices = []; // 外圈随机粒子矩阵
  const divisions = 50; // 数量

  for (let i = 0; i <= divisions; i++) {
    // 计算弧度
    const v = ( i / divisions ) * ( Math.PI * 2 );
    const x = Math.sin( v );
    const z = Math.cos( v );
    vertices.push( x, 0, z );
  }
  const geometry = new THREE.BufferGeometry();
  // itemSize = 3 因为每个顶点都是一个三元组。
  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

  // 材质 基础线 及 一条连续的线
  for ( let i = 1; i <= 3; i ++ ) {
    const material = new THREE.LineBasicMaterial( {
      color: Math.random() * 0xffffff,
      linewidth: 10
    } );
    const line = new THREE.Line( geometry, material );
    line.scale.setScalar( i / 3 );
    scene.add( line );
  }

  const material = new THREE.LineDashedMaterial( {
    color: 'blue',
    linewidth: 1,
    dashSize: 10,
    gapSize: 10
  } );
  const line = new THREE.Line( geometry, material );
  line.scale.setScalar( 2 );
  scene.add( line );

  // 窗口适应
  useEffect(() => {
    window.addEventListener( 'resize', onWindowResize );
    return () => {
      window.removeEventListener('resize',onWindowResize)
    };
  }, [window.innerWidth,window.innerHeight]);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }
  function animate() {
    let count = 0;
    const time = performance.now() / 1000;
    scene.traverse( function ( child ) {
      child.rotation.x = count + ( time / 3 );
      child.rotation.z = count + ( time / 4 );
      count ++;
    } );
    // renderer.setClearColor(color,0)
    // renderer.clear()
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
  }

  useEffect(() => {
    animate()
  });



  return (
    <NotFountWrapper width={width} height={height}>
      <div className={'not-fount'}>404</div>
      <div ref={canvas} className={'canvas'}/>
      {/*<canvas ref={canvas} className={'canvas'}/>*/}
    </NotFountWrapper>
  )
})


export default NotFount