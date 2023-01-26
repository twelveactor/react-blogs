import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  height: ${props => props ?  props.height:'1000'}px;
  display: flex;
  font-size: 18px;
`

export const LeftSiderWrapper = styled.div`
  width: 25%;
  height: 100%;
  // background-color: chocolate;
  // 立体阴影
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

  .logo-name {
    width: 100%;
    height: 60px;
    //background-color: cornflowerblue;
    font-weight: bolder;
    font-size: 28px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 5px;
    cursor: pointer;
  }

  .left-menu {
    padding-left: 10px;
    margin-top: 20px;

    .menu {
      font-weight: bold;
    }

    .menu-list {
      margin-top: 20px;

      .list-item {
        margin-top: 10px;
        padding: 5px;
      }

      .list-item:hover {
        background-color: #fdd8cb;
        border-radius: 12px;
      }
    }

  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  //background-color: #d5a60a;
  // 立体阴影
  //box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

`

export const RightSiderWrapper = styled.div`
  width: 30%;
  height: 100%;
  //background-color: crimson;
  // 立体阴影
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

  .top-toolbar {
    width: 100%;
    height: 60px;
    //background-color: chocolate;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;

    .head-portrait {
      text-align: center;
      line-height: 60px;
    }

    .git {
      width: 30px;
      height: 30px;
      font-size: 30px;
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .card-custom {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      .img {
        width: 100%;
        height: 100%;
      }

      .p-info {
        height: 20px;
        width: 100%;
        margin: 10px 0;
      }

      .p-info:hover {
        background-color: #f6dbe0;
        border-radius: 5px;
        padding: 0 5px;
      }
    }

    .card-custom-weather {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      position: relative;
      left: 0;
      top: 0;


      .img {
        width: 100%;
        height: 100%;
      }

      .weather-tag {
        position: absolute;
        top: -15px;
        left: -10px;
        color: white;
        font-weight: bold;
        font-size: 12px;

        .now {
          background-color: #9ebef6;
          border-radius: 5px 5px 0 0;
          padding: 0 5px;
          text-align: center;
        }

        .now-time {
          background-color: #9c9c9c;
          border-radius: 0 0 5px 5px;
          padding: 0 5px;
          text-align: center;
        }
      }

      .weather-info {
        position: absolute;
        top: 0;
        left: 30px;
        //letter-spacing: 3px;
        color: #808080;
      }
    }
  }

`