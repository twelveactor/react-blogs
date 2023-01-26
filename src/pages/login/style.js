import styled from 'styled-components'

export const LoginBackContainerWrapper = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background: url(${require("../../assets/img/login/city_in_the_clouds_by_tatasz_d8yebbu.png")}) no-repeat center 0;
  background-size: cover;
  .back-btn{
    width: 50px;
    height: 50px;
    background-color:${props => props.loginState ? '#E3D8E8':'#9B93D0'};
    border-radius: 100%;
    text-align: center;
    line-height: 50px;
    color: white;
    
    position: fixed;
    left: 10px;
    top: 10px;
    cursor: pointer;
  }
  .back-btn:hover{
    width:55px;
    height: 55px;
    text-align: center;
    line-height: 55px;
  }
`

export const LoginPageWrapper = styled.div`
  width: 90%;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //z-index: 9;
  //background-color: crimson;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  //opacity: .1;
  background-color:${props => props.loginState ? '#E3D8E8':'#9B93D0'} ;

  //#E3D8E8 登 #9B93D0注
  .back-img {
    //background-color: chocolate;
    width: 50%;
    height: 100%;
    background-color:${props => props.loginState ? '#E3D8E8':'#9B93D0'} ;
    border-radius: 30px 0 0 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      display: block;
      width: 80%;
      border-radius: 30px;
      overflow: hidden;
    }
  }

  .login-form {
    border-radius:0 30px 30px 0 ;
    background-color: ${props => props.loginState ? '#E3D8E8':'#9B93D0'};
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
      background-color: #f7f7fb;
      height: 85%;
      width: 60%;
      border-radius: 30px ;
      opacity: .7;
      display: flex;
      flex-direction: column;
      padding:20px 30px;
      
      .title{
        width: 100%;
        height: 100px;
        
        //padding: 5px 25px;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        font-size: 20px;
        color: black;
        font-weight: bolder;
        
        .reg{
          Letter-spacing:5px;
        }
        .regs{
          color: #61dafb;
          border-bottom: 1px solid #61dafb;
          cursor: pointer;
          font-size: 16px;
        }
        .regs:hover{}
      }
      
      .name{
        width: 100%;
        height: 50px;
        font-size: 40px;
        font-weight:bolder;
        color: black;
      }
      
      .input-form{
        flex: 1;
        padding: 60px 0;
        .btn{
          margin-top: 20px;
        }
      }
     
    }
  }
`