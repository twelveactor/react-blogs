import styled from 'styled-components'

export const PersonalResumeWrapper = styled.div`
  //width: 100%;
  height: 100%;
  //height:${props => props.height}px;
  background-image: url(${require('../../assets/img/back/24aea7a7f9b6478698b6f8cdd6a016e0.jpg')});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: white;
  //overflow: scroll;
`

export const ResumeHeaderWrapper = styled.div`
  width: 100%;
  height: 48px;
  background-color: rgba(53, 53, 53, 0.4);

  position: relative;
  left: 50%;
  //top: 10px;
  transform: translate(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  .back{
    position: absolute;
    left: 20px;
    top: 24px;
  }

  
  .inline-pdf {
    //width: 120px;
    font-size: 18px;
    margin: 0 20px;
    color: #ffffff;
    padding: 5px;

    display: flex;
    justify-content: center;
  }

  .inline-pdf:hover {
    border-radius: 20px;
    background-color: cornflowerblue;
    box-shadow: 0 0 20px #00ddfb;
    animation: headerTag 1s;
  }

  .pdf-generator {
    font-size: 18px;
    margin: 0 20px;
    padding: 5px;
    color: #ffffff;
    
    display: flex;
    justify-content: center;
  }

  .pdf-generator:hover {
    border-radius: 20px;
    background-color: cornflowerblue;
    box-shadow: 0 0 20px #00ddfb;
    animation: headerTag 1s;
  }

  @keyframes headerTag {
    0% {
      border-radius: 20px;
      background-color: cornflowerblue;
      box-shadow: 0 0 0 #00ddfb;
    }
    100% {
      0% {
        border-radius: 20px;
        background-color: cornflowerblue;
        box-shadow: 0 0 20px #00ddfb;
      }
    }
  }
  .icon-active{
    font-size: 20px;
    cursor: pointer;
  }
`

export const ResumeContentWrapper = styled.div`
  width: 100%;
  //height: 100%;
  //overflow: scroll;  
`