import React, {memo, useEffect,useRef} from 'react'

import * as THREE from 'three';
import {ParticleWrapper} from "./style";

const Particle =  memo(function () {

  const canvasRef = useRef();

  /**
   * three
   */

  let camera, scene, renderer;

  let points;

  const particles = 10000;
  let drawCount = 100;

  renderer = new THREE.WebGLRenderer( { antialias: false ,alpha:true} );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  useEffect(()=>{
    canvasRef.current.appendChild( renderer.domElement );
  },[renderer])

  //

  camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 5, 3500 );
  camera.position.z = 2750;

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0x050505 );
  // scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const positions2 = [];
  const colors = [];
  const color = new THREE.Color();
  const n = 2000, n2 = n / 2; // 粒子从正方体中散发出来
  for ( let i = 0; i < particles; i ++ ) {
    // positions
    const x = Math.random() * n - n2;
    const y = Math.random() * n - n2;
    const z = Math.random() * n - n2;

    positions.push( x, y, z );
    positions2.push( z * 0.3, x * 0.4, y * 0.3 );

    // colors

    const vx = ( x / n ) + 0.5;
    const vy = ( y / n ) + 0.5;
    const vz = ( z / n ) + 0.5;

    color.setRGB( vx, vy, vz );

    colors.push( color.r, color.g, color.b );

  }

  const gl = renderer.getContext();

  const pos = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, pos );
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( positions ), gl.STATIC_DRAW );

  const pos2 = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, pos2 );
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( positions2 ), gl.STATIC_DRAW );

  const rgb = gl.createBuffer();
  gl.bindBuffer( gl.ARRAY_BUFFER, rgb );
  gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( colors ), gl.STATIC_DRAW );

  const posAttr1 = new THREE.GLBufferAttribute( pos, gl.FLOAT, 3, 4, particles ); // 发散
  // const posAttr2 = new THREE.GLBufferAttribute( pos2, gl.FLOAT, 3, 4, particles ); // 聚拢正方形
  geometry.setAttribute( 'position', posAttr1 );

  // setInterval( function () {
  //   const attr = geometry.getAttribute( 'position' );
  //   geometry.setAttribute( 'position', ( attr === posAttr1 ) ? posAttr2 : posAttr1 );
  // }, 4000 );

  geometry.setAttribute( 'color', new THREE.GLBufferAttribute( rgb, gl.FLOAT, 3, 4, particles ) );

  //

  const material = new THREE.PointsMaterial( { size: 10, vertexColors: true } );

  points = new THREE.Points( geometry, material );

  // Choose one:
  // geometry.boundingSphere = ( new THREE.Sphere() ).set( new THREE.Vector3(), Infinity );
  points.frustumCulled = false;
  scene.add( points );
  // console.log(window.innerWidth)
  useEffect(()=>{
    window.addEventListener( 'resize', onWindowResize );
    // console.log(window.innerWidth)
    return ()=>{
      window.removeEventListener('resize',onWindowResize)
    }
  })


  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function animate() {
    render();
    requestAnimationFrame( animate );
  }

  function render() {
    drawCount = ( Math.max( 2000, drawCount ) + Math.floor( 10 * Math.random() ) ) % particles;
    points.geometry.setDrawRange( 0, drawCount );
    const time = Date.now() * 0.0001;
    points.rotation.x = time * 0.8;
    points.rotation.y = time * 0.4;
    renderer.clear()
    renderer.render( scene, camera );
  }
  useEffect(()=>{
    animate()
  })

  return (
    <ParticleWrapper>
      <div ref={canvasRef} className={'canvas-ref'}/>
    </ParticleWrapper>
  )
})

export default Particle