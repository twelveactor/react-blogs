import React, {memo, useRef,useEffect} from 'react'
import './demo3.css'
import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';


const Demo3 = memo(function (props) {
  const webgl = useRef()
  const objects = [];

  let moveForward = false; // 移动向前
  let moveBackward = false; // 移动向后
  let moveLeft = false;  // 移动向左
  let moveRight = false; // 移动向右
  let canJump = false;  // 跳跃

  let prevTime = performance.now(); // 时间类函数，时间精度降低
  const velocity = new THREE.Vector3(); // 三维向量
  const direction = new THREE.Vector3(); // 三维向量
  const vertex = new THREE.Vector3(); // 三维向量
  const color = new THREE.Color();

  let blocker,instructions;

  /**
   * 创建相机
   */
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight , 1 ,1000)
  camera.position.y = 10

  /**
   * 创建场景
   */
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xFFFFFF)
  scene.fog = new THREE.Fog(0x000000,0,750)

  // 灯光:半球光:光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。
  const light = new THREE.HemisphereLight( 0xffcd2a, 0x009dff, 0.75 );
  light.position.set( 0.5, 1, 0.75 );
  scene.add( light );

  const controls = new PointerLockControls( camera, document.body );
  useEffect(()=>{
     blocker = document.getElementById( 'blocker' );
     instructions = document.getElementById('instructions')
    // console.log(instructions)
    instructions.addEventListener( 'click', onClickOrLockOrUnlock );
    controls.addEventListener( 'lock', onClickOrLockOrUnlock);
    controls.addEventListener( 'unlock',onClickOrLockOrUnlock);
    return () => {
      instructions.removeEventListener('click',onClickOrLockOrUnlock)
      controls.removeEventListener('lock',onClickOrLockOrUnlock)
      controls.removeEventListener('unlock',onClickOrLockOrUnlock)
    }
  })
  const onClickOrLockOrUnlock = (type) => {
    console.log(type.type)
    if (type.type === 'click'){
      controls.lock();
    }else if (type.type === 'lock'){
      instructions.style.display = 'none';
      blocker.style.display = 'none';
    }else if (type.type === 'unlock'){
      blocker.style.display = 'block';
      instructions.style.display = '';
    }
  }
  scene.add( controls.getObject() );

  const onKeyDown = function ( event ) {
    switch ( event.code ) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward = true;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft = true;
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveBackward = true;
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight = true;
        break;
      case 'Space':
        if ( canJump === true ) velocity.y += 350;
        canJump = false;
        break;
    }
  };

  const onKeyUp = function ( event ) {
    switch ( event.code ) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward = false;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft = false;
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveBackward = false;
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight = false;
        break;
    }
  };
  useEffect(()=>{
    document.addEventListener( 'keydown', onKeyDown );
    document.addEventListener( 'keyup', onKeyUp );
    return () => {
      document.removeEventListener('keydown',onKeyDown)
      document.removeEventListener('keyup',onKeyUp)
    }
  })

  // 核心 ： 光线投射，这个类用于进行raycasting（光线投射）。 光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。
  const raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );

  // floor，地面倾斜 180 度 ， 平面缓冲几何体
  let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
  floorGeometry.rotateX( - Math.PI / 2 );
  // vertex displacement

  let position = floorGeometry.attributes.position;

  for ( let i = 0, l = position.count; i < l; i ++ ) {
    vertex.fromBufferAttribute( position, i );
    vertex.x += Math.random() * 20 - 10;
    vertex.y += Math.random() * 2;
    vertex.z += Math.random() * 20 - 10;
    position.setXYZ( i, vertex.x, vertex.y, vertex.z );
  }

  floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

  position = floorGeometry.attributes.position;
  const colorsFloor = [];

  for ( let i = 0, l = position.count; i < l; i ++ ) {

    color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
    colorsFloor.push( color.r, color.g, color.b );

  }

  floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) );

  const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );

  const floor = new THREE.Mesh( floorGeometry, floorMaterial );
  scene.add( floor );

  // objects

  const boxGeometry = new THREE.BoxGeometry( 20, 20, 20 ).toNonIndexed();

  position = boxGeometry.attributes.position;
  const colorsBox = [];

  for ( let i = 0, l = position.count; i < l; i ++ ) {

    color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
    colorsBox.push( color.r, color.g, color.b );

  }

  boxGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsBox, 3 ) );

  for ( let i = 0; i < 500; i ++ ) {

    const boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: true } );
    boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

    const box = new THREE.Mesh( boxGeometry, boxMaterial );
    box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
    box.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
    box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;

    scene.add( box );
    objects.push( box );

  }

  //

  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  useEffect(()=>{
    webgl.current.appendChild( renderer.domElement)
    return ()=>{
      console.log('销毁demo3')
      scene.clear();
      renderer.dispose();
      renderer.content = null;
      cancelAnimationFrame(animate)
      floorGeometry.dispose()
      boxGeometry.dispose()
    }
  },[renderer])

  //

 useEffect(()=>{
   window.addEventListener( 'resize', onWindowResize );
   return () => {
     window.removeEventListener( 'resize', onWindowResize );
   }
 })

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

  function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();
    if (controls.isLocked === true) {
      raycaster.ray.origin.copy(controls.getObject().position);
      raycaster.ray.origin.y -= 10;
      const intersections = raycaster.intersectObjects(objects, false);
      const onObject = intersections.length > 0;
      const delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;
      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }
      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += (velocity.y * delta); // new behavior
      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  useEffect(()=>{
    animate()
  })

return (
    <div ref={webgl} >
        <div id="blocker">
          <div id="instructions">
            <p style={{fontSize:'48px'}}>
              Click to play
            </p>
            <p>
              操作介绍：<br/>
              移动: WASD<br/>
              跳跃: SPACE<br/>
              视野: MOUSE
            </p>
          </div>
        </div>
    </div>
  )

})




export default Demo3