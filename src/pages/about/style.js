import styled from 'styled-components'

export const AboutWrapper = styled.div`
  height: ${props => props.height}px;
  //height: 100%;
  width: ${props => props.width}px;
  overflow: hidden;
  //background-color: #ffffff;
  background-image: url(${require('../../assets/img/back/c85ca642880411ebb6edd017c2d2eca2.jpg')});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  //background: rgb(238,174,202);
  //background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  position: relative;

  .swiper {
    //height: ${props => props.height}px;
    height: 100%;
    width: ${props => props.width}px;

    .item {
      height: 100%;
      width: 100%;

      padding: 0 100px;

      .line1 {
        margin-top: 80px;
        height: 140px;
        width: 100%;
        font-size: 2em;
        font-weight: bolder;
        background-image: linear-gradient(to right, #f8fbfd 0%, #fd6bf9 51%, #fd3c3c 100%);
        -webkit-background-clip: text;
        color: transparent;
      }

      .content-item {
        margin: 20px 0 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .flip-card {
          margin: 10px;
          background-color: transparent;
          width: 190px;
          height: 254px;
          perspective: 1000px;
          font-family: sans-serif;
          animation: cardR 2s;
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
          border: 1px solid #dadada;
          border-radius: 1rem;
        }

        .flip-card-front {
          background: linear-gradient(120deg, rgba(109, 241, 255, 0.8) 60%);
          color: #d60c0c;
        }

        .flip-card-back {
          //background: white;
          background: linear-gradient(120deg, rgb(255, 174, 145, .9) 30%);
          color: #f8a9a9;
          transform: rotateY(180deg);

          .title {
            font-size: 30px;
            font-weight: bolder;
            background-image: linear-gradient(to right, #b4e2ff 10%, #6bfdd6 31%, #f86f6f 100%);
            -webkit-background-clip: text;
            color: transparent;
          }

          .des {
            //margin-left: 10px;
            //display: flex;
            //justify-content: left;
            font-size: 16px;
            font-weight: bolder;
            background-image: linear-gradient(to right, #ffffff 10%, #ffffff 31%, #f3f3f3 100%);
            text-shadow: 0 0 10px #fff0f0;
            -webkit-background-clip: text;
            color: transparent;
          }
        }

        @keyframes cardR {
          0% {
            transform: scale(0, 0);
          }
          100% {
            transform: scale(1, 1);
          }
        }
      }

    }

    .item2 {
      //height: 100%;
      height: 100%;
      width: 100%;

      //padding: 0 100px;
      .content {
        height: 100%;
        //overflow: scroll;
        margin-top: 100px;
        display: flex;
        justify-content: center;

        .flip-card {
          margin: 10px;
          background-color: transparent;
          width: 190px;
          height: 70%;
          perspective: 1000px;
          font-family: sans-serif;
          animation: cardR 2s;
        }

        .title {
          font-size: 1.5em;
          font-weight: 900;
          //text-align: center;
          margin: 0;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          //text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }


        .flip-card-front {
          box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
          position: absolute;
          display: flex;
          flex-direction: column;
          //justify-content: center;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border: 1px solid #dadada;
          border-radius: 1rem;
          
          padding: 10px 40px;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            display: none; /* Chrome Safari */
          }
          -ms-overflow-style: none; /* IE 10+ */
          scrollbar-width: none; /* Firefox */
        }

        .flip-card-front {
          background: linear-gradient(120deg, rgba(255, 187, 168, 0.6) 30%, rgba(251, 251, 251, 0.6) 78%);
          //background: chartreuse;
          color: black;
        }

      }
    }
  }

  .control {
    position: absolute;
    left: 50%;
    bottom: 10px;
    color: white;
    font-size: 30px;
    animation: controlA 2s infinite alternate;
    cursor: pointer;
  }

  @keyframes controlA {
    0% {
      bottom: 3px;
    }
    100% {
      bottom: 10px;
    }
  }
`