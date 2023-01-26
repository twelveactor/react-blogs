import styled from 'styled-components'

export const EditorArticleWrapper = styled.div`
  background-color: #FFFFFF;
  border: 0;

  .header-editor {
    //height:130px;
    padding: 10px;  
    background-color: #FFFFFF;
    border: 0;
    .header-handle{
      display: flex;
      flex-direction: row;
      padding: 0 5px;
      align-items: center;
      margin-bottom: 15px;
      .back{
        width: 49%;
      }
      .public{
        width: 49%;
        display: flex;
        justify-content: right;
      }
    }
    .header-title{
      padding: 10px 5px;
    }
  }

  .md-editor {
    //height: 1000px;
    height: ${props => props.editHeight}px;
    width: 100%;
    //padding: 5px;
    //margin-top: 10px;
    background-color: #FFFFFF;
    border: 0;
    border-top: 1px dashed #f4f4f4;
    
  }
`