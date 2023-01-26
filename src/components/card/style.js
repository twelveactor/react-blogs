import styled from 'styled-components'

export const CardWrapper = styled.div`
  margin: 10px;

  .flip-card {
    background-color: transparent;
    width: ${props => props.wid || 190}px;
    height: ${props => props.heit || 254}px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #bfbfbf;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, #ffffff 60%, rgb(255, 255, 255) 88%,
    rgb(255, 255, 255) 40%, rgba(109, 241, 255, 0.6) 48%);
    color: #ff0000;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
    bisque 40%, rgb(255, 185, 160) 78%);
    color: white;
    transform: rotateY(180deg);
  }
`