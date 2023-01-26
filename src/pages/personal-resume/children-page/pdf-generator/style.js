import styled from 'styled-components'

export const PdfGeneratorWrapper = styled.div`
  //height: 841.89px;
  height: ${props => props.height}px;
  //position: relative;
  //left: 50%;
  //transform: translate(-50%);
  display: flex;
  justify-content: center;

  .right-pdf {
    //margin-top: 10px;
    //position: relative;
    //left: 50%;
    //transform: translate(-50%);

    //width: 100%;
    //background-color: white;
  }

  iframe {
    background-color: #ffffff;
    opacity: .8;
    //width: 700px;
    //height: 2000px;
  }

  .pdf-viewer {
    width: 100%;
    height: 100%;

    background-color: white;

  }

  .menu {
    height: 100%;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    color: white;
    //position: absolute;
    //top: 0;
    //left: 68.5%;
    //border-radius: 0 5px 5px 0;
    .menus {
      .ant-list-items {
        color: white;

        .ant-list-item:hover {
          background-color: #83cfff;

          .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-description {
            color: rgb(255 255 255);;
          }
        }
      }
    }
  
    .upload-head{
      height:70px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
`
