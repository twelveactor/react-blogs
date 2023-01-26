import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: ${props => props.width+'px' || '100%'};
  height: ${props => props.height+'px' || '100%'};
  font-size: 38px;
  //background-color: #8DD9E7;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${require('../../assets/img/back/24aea7a7f9b6478698b6f8cdd6a016e0.jpg')});
  overflow: hidden;


  .intro {
    //width: 500px;
    //height: 300px;
    //background-color: chocolate;
    text-align: center;
    //line-height: 300px;
    

    // 居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .headline {
      //border-right: 2px solid #d6a8a8;
      font-size: 200%; /* 字体大小 */
      user-select: none; 
      font-weight: bolder;
      text-align: center; /* 文字横向居中 */
      white-space: nowrap; /* 文字不换行 */
      overflow: hidden; /* 多余的文字内容隐藏 */
      animation: fontSizeOpacity 5s ease 3s  infinite; /* 重点 steps() */
      -webkit-animation:fontSizeOpacity 5s ease 3s  infinite; /* Safari 和 Chrome */
    }
    .btn-line{
      margin-top: 20px;
      animation: fontSizeOpacity 5s ease 3s  infinite; /* 重点 steps() */
      -webkit-animation:fontSizeOpacity 5s ease 3s  infinite; /* Safari 和 Chrome */
    }

    /* 边框闪烁动画 模拟指针闪烁 */
    @keyframes fontSizeOpacity {
      0% {
        opacity: 1;
      }
      //25% {
      //  opacity: .5;
      //}
      50% {
        opacity: 0.1;
      }
      //75% {
      //  opacity: .5;
      //}
      100% {
        opacity: 1;
      }
    }


  }
`
