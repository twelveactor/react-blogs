import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  //position: relative;
  //top: 0;
  //left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 50%;
  background-attachment: fixed;

  .header {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
    //display: inline-block;
    object-fit: cover;
    background-color: rgba(73, 73, 73, 0.3); 
    color: #ffffff;
    text-shadow: 0 0 0 #fff,
    0 0 0 #fff,
    0 0 0 #fff;


    .img {
      width: 100%;
      height: 100%;
      //保持宽高比填充，超出部分裁剪(推荐)
      object-fit: cover;
      //内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些
      //object-fit: scale-down;
      //保持宽高缩放填充
      //object-fit: contain;
      //拉伸/缩小填充(推荐)
      //object-fit: fill;
    }

    .header-content {
      width: 50%;
      //height: 50%;
      //color: #ffffff;
      font-size: 35px;
      font-weight: bolder;
      word-spacing: 20px;
      text-align: center;
      color: #ffffff;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .des {
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;

        .ant-divider {
          border-block-start: 1px solid rgba(253, 253, 253, 0.9);
        }

        .icons {
          margin-right: 5px;
        }
      }
    }
  }

  .preview {
    width: 60%;
    height: 100%;
    margin-top: 10px;

    display: flex;

    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;

    position: relative;
    left: 50%;
    transform: translate(-50%);

    //border: 1px solid #e1e1e1;
    .md-editor {
      --md-bk-color: none; // 编辑器背景颜色 无
      --md-color: #000000;
      padding: 0 10px;
    }

    .menu {
      //height: 200px;
      width: 300px;
      //box-sizing: border-box;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      padding: 10px;
      //overflow: hidden;
      //color: white;


      position: absolute;
      top: 0;
      right: -320px;

    .menu-text{
      height: 30px;
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      justify-content: space-between;
      padding: 0 5px;
    }
    }
  }
`