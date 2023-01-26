import styled from 'styled-components'

export const MainWrapper = styled.div`
  background-color: #F2F4FA;
  display: flex;
  flex-direction: column;
  .float-button{
    transform: rotate(360deg);
    animation: floatButton 1s infinite;
  }
  @keyframes floatButton {
    0% {
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
    0% {
      transform: rotate(0);
    }
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  
  .header-img{
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${require("../../assets/img/back/wallhaven-9mg6wk_3840x2160.png")});
    overflow: hidden;
    pointer-events: none;
    height: 100%;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 100px;

  .content-top-user {
    background-color: #ffffff;
    display: flex;
    //justify-content: space-around;
    height: 200px;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgb(103 118 128 / 20%);
    position: relative;
    top: -4rem;
    padding: 40px 70px;

    .top-left {
      width: 49%;
      display: flex;

      .left-img {
        width: 200px;
        height: 200px;
        border-radius: 30px;
        border: 10px solid #ffffff;
        overflow: hidden;
        position: relative;
        top: -5rem;
        background-color: #afdeec;
        box-shadow: 0 20px 40px rgb(103 118 158 / 20%);

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .left-info {
        flex: 1;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: var(--AllFontSize);

        .info-name {
          font-size: var(--TitleFontSize);
          font-weight: bolder;
        }

        .info-dec {
          font-size: var(--DescriptionFontSize);
          color: var(--AllColor);
        }

        .tags {
          display: flex;
          flex-direction: row;

          .tag {
            margin: 0 5px;
          }
        }
      }
    }

    .top-left::after {
      content: '';
      background-color: #cdcdcd;
      height: 100%;
      width: 1px;
    }

    .top-right {
      width: 49%;
      padding: 10px 0 10px 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      .right-info {
        display: flex;
        font-size: 18px;
        justify-items: center;

        .dec {
          //width: 100px;
          margin: 0 20px;

          .title {
            font-size: 16px;
            color: #474747;
            padding: 5px;
          }

          .info-dec {
            font-size: 14px;
            color: #7e7e7e;
            padding: 5px;
          }
        }
      }
    }
  }

  .content-top-user:hover {
    box-shadow: 0 20px 40px rgb(103 118 128 / 40%);
  }

  .content-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .left-content {
      width: 200px;
      height: 400px;
      background-color: #ffffff;
      box-shadow: 0 20px 40px rgb(103 118 128 / 20%);
      border-radius: 20px;
      padding: 20px 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .blogs {
        width: 120px;
        height: 80px;
        background-color: #b7d7f0;
        border-radius: 20px;
        text-align: center;
        line-height: 80px;
        font-size: 20px;
      }

      .blogs:hover {
        //background-color: #afdeec;
        border-radius: 20px;
        background: #b7d7f0;
        box-shadow: inset 6px 6px 12px #708392,
          inset -6px -6px 12px #feffff;
        color: #b34b05;
      }

      .active {
        border-radius: 20px;
        background: #b7d7f0;
        box-shadow: inset 6px 6px 12px #708392,
          inset -6px -6px 12px #feffff;
        color: #b34b05;
      }
    }

    .left-content:hover {
      box-shadow: 0 20px 40px rgb(103 118 128 / 40%);
    }

    .main-content {
      flex: .9;
      box-shadow: 0 20px 40px rgb(103 118 128 / 20%);
      background-color: #ffffff;
      border-radius: 20px;
      padding: 20px;

      display: flex;
      flex-direction: column;
      //align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .blogs-item {
        width: 100%;
        height: 240px;
        overflow: hidden;
        background-color: #f8f8f8;
        border-radius: 20px;
        margin-bottom: 20px;

        display: flex;
        flex-direction: row;
        
        animation: blogsItem 2s;


        .item-img {
          width: 40%;
          height: 100%;
          overflow: hidden;
          //background-repeat: no-repeat;

          .img {
            width: 100%;
            height: 100%;
            animation: toImgScale 1s;
          }
          .img:hover {
            transform: scale(1.5,1.5);//transform表示变换，scale表示范围、大小，这是长宽都变为2倍的实现代码。
            animation: fromImgScale 1s;
          }
        }
        @keyframes fromImgScale {
          0% { transform: scale(1,1);}
          100% { transform: scale(1.5,1.5);}
        }
        @keyframes toImgScale {
          0% { transform: scale(1.5,1.5);}
          100% { transform: scale(1,1);}
        }
        .item-dec {
          //height: 30%;
          width: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
          font-size: 22px;
          padding: 20px 30px;

          .create-time {
            font-size: 13px;
            display: flex;
            justify-content: start;
            color: #878787;
            font-weight: bold;
            .time {
              margin: 0 5px;
            }
          }

          .name {
            font-weight: bolder;
            margin-bottom: 15px;
          }
          .other{
            display: flex;
            //justify-content: space-evenly;
            font-size: 12px;
            width: 100%;
            .other-style{
              width: 20%;
            }
          }

          .dec {
            height: 80px;
            font-size: 14px;
            line-height: 2;
          }
          .tags{
            width: 100%;
            
          }
        }
      }

      @keyframes blogsItem {
        0% {
          transform: scale(0,0);
        }
        100% {
          transform: scale(1,1);
        }
      }
      
      .blogs-item:hover {
        box-shadow: 0 0 5px rgba(28, 64, 92, 0.4);
      }
    }

    //.main-content:hover{
    //  box-shadow: 0 20px 40px rgb(103 118 128 / 40%);
    //}

    // .right-content {
    //   width: 100px;
    //   height: 400px;
    //   background-color: #ffffff;
    //   box-shadow: 0 20px 40px rgb(103 118 128 / 15%);
    //   border-radius: 20px;
    //   padding: 20px 10px;
    //
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   justify-content: space-around;
    //
      //   background-image: url(${require('../../assets/img/back/bg1.jpg')});
    //   background-position: 50% 40%;/*这个是按从左往右，从上往下的百分比位置进行调整*/
    //   background-repeat: no-repeat;
    //   background-size: cover;//平铺扩张
    //   //background-size: 100% 100%;/*按比例缩放*/
    // }
    //
    // .right-content:hover {
    //   box-shadow: 0 20px 40px rgb(103 118 128 / 40%);
    // }
  }
`

export const FooterWrapper = styled.div`
  height: 100px;
  line-height: 100px;
  text-align: center;

  .h3 {
    font-weight: bolder;
    color: #b5b5b5;
  }
`