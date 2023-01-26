import styled from 'styled-components'

export const NotFountWrapper = styled.div`
  height: ${props => props.height || 600}px;
  width: ${props => props.width || 600}px;
  //background-color: #1e1e1e;
  background-image: linear-gradient(to right, #974444 10%, #801e1e 31%, #981d1d 100%);
  //display: flex;
  //justify-content: center;
  //align-items: center;
  overflow: hidden;

  position: relative;

  .not-fount {
    width: 100vw;
    position: fixed;
    text-shadow: 0 0 10px #8e0000;
    font-size: 48vw;
    font-weight: bolder;
    text-align: center;
    color: red;
    //Letter-spacing: 200px;
    z-index: 0;
    font-style: oblique;
    opacity: .6;
  }

  .canvas {
    position: absolute;
    //left: 50%;
    //top: 0;
    //transform: translate(-50%, 30%);
    background-color: rgba(255, 255, 255, 0);
    z-index: 9;

    svg {
      background-color: rgba(255, 255, 255, 0) !important;
      background-image: none;
      z-index: 2;
    }
  }

  svg {
    background-color: rgba(255, 255, 255, 0) !important;
    background-image: none;
    z-index: 2;
  }
`