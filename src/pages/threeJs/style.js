import styled from 'styled-components'

export const ThreeJsWrapper = styled.div`

`

export const THeaderWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${require('../../assets/img/back/953337.jpg')});
  background-position: 50% -200px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  outline: none;
  position: relative;

  
  .header-text {
    height: 100%;
    width: 100%;
    position: absolute;
    //background-color: rgba(0, 0, 0, .5);
    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;

    .title {
      font-weight: bolder;
      letter-spacing: 6px;
    }

    .link {
      padding-top: 5px;
      color: #e6e6e6;
    }
  }

  .three-3d {
    height: 300px;
    //opacity:0.1;
    //background-color: rgba(234, 84, 84, 0.2);
    overflow: hidden;
  }
`

export const TContentWrapper = styled.div`
  width: 100%;
  height: ${props => props.height}px;

  display: flex;
  flex-direction: column;
  padding: 40px;

  .demo {
    display: flex;

  }

  .demo::after {
    content: '';
    display: inline-block;
    background-color: #717171;
    width: 80%;
    height: 1px;
    margin: auto; // 伪元素居中
    line-height: 100px;
    align-items: center;
    text-align: center;
    vertical-align: middle;
  }

  .list {
    flex: 1;
    padding: 40px 0;
    display: flex;
    justify-content: space-around;

    .item {
      width: 180px;
      height: 130px;
      overflow: hidden;
      border: 1px solid #818181;
      //background-color: chartreuse;
      object-fit: cover;
      border-radius: 10px;

      .img {
        //width: 100%;
        height: 100px;
      }

      .item-name {
        display: flex;
        justify-content: center;
        height: 30px;
        //align-items: center;
        //text-align: center;
        line-height: 30px;
      }
    }
  }
`