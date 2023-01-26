import styled from 'styled-components'

export const OnLinePdfWrapper = styled.div`
  height:${props => props.height}px;
  overflow-y: scroll;
  .react-pdf__Page{
    //width: 595px;
  }
  .pdf-view {
    display: flex;
    justify-content: center;
    padding: 30px 50px;
    overflow: hidden;
    box-sizing: border-box;
    height: 900px;
    position: relative;
  }

  .container {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
    //width: max-content;
    //margin: 0 auto;
    //overflow: scroll;
    //box-sizing: border-box;
    height: 825px;
    
    .react-pdf__Document{
      width:595px;
      //overflow: hidden;
      height: ${props => props.pageHeight}px;
      
    }
    
  }

  .page-tool {
    position: absolute;
    bottom: 35px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    user-select: none;
  }

  .page-tool-item {
    padding: 8px 15px;
    //padding-left: 10px;
    cursor: pointer;
  }

  input {
    display: inline-block;
    width: 50px;
    text-align: center;
    margin-right: 10px;
    height: 24px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

`