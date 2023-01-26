// 个人简历页面开发
import React,{memo} from 'react'
import {PersonalResumeWrapper, ResumeContentWrapper, ResumeHeaderWrapper} from "./style";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import { createFromIconfontCN} from '@ant-design/icons';
import {useWindowSize} from '../../utils/useWindowSize'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3834750_ghet1nv7a86.js',
});
const PersonalResume = memo(function () {
  const {height} = useWindowSize()
  const navigate = useNavigate()


  const onBack = () => {
    navigate('/main')
  }
  return (
    <PersonalResumeWrapper height={height}>

      <ResumeHeaderWrapper>
        <div className={'back'}>
          <IconFont type={'icon-fanhui'} className={'icon-active'} onClick={onBack}/>
        </div>
        <div className={'inline-pdf'}>
          <IconFont type={'icon-PDF-Local-default'} className={'icon-active'} />
          <NavLink to={'/personalResume/onlinePdf'} style={{ textDecoration: 'none',color:'#fff' }}>在线PDF</NavLink>
        </div>
        <div className={'pdf-generator'}>
          <IconFont type={'icon-gerenjianli'} className={'icon-active'} />
          <NavLink to={'/personalResume/pdfGenerator'} style={{ textDecoration: 'none',color:'#fff' }}>简历生成器</NavLink>
        </div>
      </ResumeHeaderWrapper>

      <ResumeContentWrapper>
        {/* 使用路由只需要使用一次，其他位置使用占位符*/}
        <Outlet />
      </ResumeContentWrapper>
    </PersonalResumeWrapper>
  )
})

export default PersonalResume