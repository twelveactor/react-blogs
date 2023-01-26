// 个人简历页面开发
import React, {memo, useEffect, useRef, useState} from 'react'
// import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page ,pdfjs} from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {  StyleSheet } from '@react-pdf/renderer';
import {OnLinePdfWrapper} from "./style";
import {useWindowSize} from "../../../../utils/useWindowSize";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// const pdf = require('./resume.pdf')
const pdf = require('./JavaScript.pdf')

const OnlinePdf = memo(function () {
  const [state, setState] = useState({
    pageNumber: 1,  //页码
    pageNumberInput: 1, // input 显示的值
    pageNumberFocus: false,  // 是否获得焦点
    numPages: undefined,  // 默认总页数
    pageWidth: 503, // 预览pdf的宽度
    fullscreen: false // 是否全屏
  });
  const {height} = useWindowSize()
  const [pageWidthOrHeight, setPageWidthOrHeight] = useState({
    width:0,
    height:0
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#121212'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  const inputPdfRef = useRef()
  useEffect(() => {
    // console.log(inputPdfRef.current.parentElement.clientHeight)
    // console.log(inputPdfRef.current.parentElement.clientWidth)
    // console.log(inputPdfRef)
    setPageWidthOrHeight({
      ...pageWidthOrHeight ,
      height:inputPdfRef.current.parentElement.clientHeight,
      width:inputPdfRef.current.parentElement.clientWidth })
  }, [inputPdfRef]);


  const lastPage = () => {
    if (state.pageNumber === 1) {
      return;
    }
    setState({ ...state,pageNumber:state.pageNumber - 1 });
  };
  const nextPage = () => {
    if (state.pageNumber === state.numPages) {
      return;
    }
    setState({...state,  pageNumber: state.pageNumber + 1 });
  };
  const onPageNumberFocus = (e) => {
    setState({...state,  pageNumberFocus: true });
  };
  const onPageNumberBlur = (e) => {
    setState({
      ...state,
      pageNumberFocus: false,
      pageNumberInput: state.pageNumber,
    });
  };
  const onPageNumberChange = (e) => {
    let value = e.target.value;
    value = value <= 0 ? 1 : value;
    value = value >= state.numPages ? state.numPages : value;
    setState({...state,  pageNumberInput: value });
  };
  const toPage = (e) => {
    if (e.keyCode === 13) {
     setState({ ...state, pageNumber: Number(e.target.value) });
    }
  };

  // 文档加载完成
  const  onDocumentLoadSuccess = (documents) => {
    // console.log('log',documents)
    setState({...state, numPages: documents.numPages });
  }

  const onPageClick = ({ dest, pageIndex, pageNumber }) => {
    console.log( dest, pageIndex, pageNumber)
  }
  return (
    <OnLinePdfWrapper pageHeight={pageWidthOrHeight.height} height={height}>
      <div className="pdf-view">
        <div className="container">
          <Document file={pdf}
                    renderMode="canvas"
                    onLoadSuccess={onDocumentLoadSuccess}
                    externalLinkTarget="_blank"
                    inputRef={inputPdfRef}
                    noData={<div>Please select a file.</div>}
                    loading={<div>Please wait!</div>}
                    onItemClick={onPageClick}>
            <Page pageNumber={state.pageNumber}
                  loading={'加载中...'}
                  width={pageWidthOrHeight.width}
                  height={pageWidthOrHeight.height}
                  renderMode="canvas"
                  renderInteractiveForms={true}
                  scale={1}
                  style={styles}
                  size='A4'/>
          </Document>
        </div>
        <div className="page-tool">
          <div>当前第{`\r[\r${state.pageNumber | 'NAN'}\r]\r`}页</div>
          <div className='page-tool-item' onClick={lastPage}> 上一页</div>
          <div className="input">
            <input
              value={state.pageNumberFocus ? state.pageNumberInput : state.pageNumber}
              onFocus={onPageNumberFocus}
              onBlur={onPageNumberBlur}
              onChange={onPageNumberChange}
              onKeyDown={toPage}
              type="number"
            /> {state.numPages}
          </div>
          <div className='page-tool-item' onClick={nextPage}> 下一页</div>
          <div>
            共{`\r[\r${state.numPages | 'NAN'}\r]\r`}页
          </div>
        </div>
      </div>
    </OnLinePdfWrapper>
  )
})

export default OnlinePdf