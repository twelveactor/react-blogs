import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  animation: blogsItems 2s;
  @keyframes blogsItems {
    0% {
      transform: scale(0,0);
    }
    100% {
      transform: scale(1,1);
    }
  }
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
        object-fit: cover;
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
`