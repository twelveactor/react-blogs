// 个人简历页面开发
import React, {memo, useState} from 'react'
import {PdfGeneratorWrapper} from "./style";
import {PDFViewer} from '@react-pdf/renderer'
import PdfView from '../../../../components/pdf-view/pdf-view'
import {List } from 'antd'
import {IdcardTwoTone,ContainerTwoTone,ToolTwoTone,BankTwoTone,AppstoreTwoTone,ProfileTwoTone,EditTwoTone} from '@ant-design/icons';
import {useWindowSize} from "../../../../utils/useWindowSize";
import MyDrawer from "../../../../components/drawer/drawer";
import UploadHead from "../../../../components/upload/upload-head";


const PdfGenerator = memo(function () {
  const [showToolbar] = useState(true);
  const {height} = useWindowSize()
  const [type, setType] = useState({}); // 子组件根据类型展示不同的样式
  // 个人信息状态管理
  const [personal, setPersonal] = useState({
    title:'',
    phone:'',
    email:'',
    city:'',
    job:''
  });
  // 教育背景状态信息
  const [educate, setEducate] = useState([
    {
      name:'',
      time:'',
      career:'',
      level:'',
      des:''
    }
  ]);
  // 工作经历信息
  const [job, setJob] = useState([
    {
      name:'',
      time:'',
      career:'',
      level:'',
      des:''
    }
  ]);
  // 开源项目
  const [project, setProject] = useState([
    {
      name:'',
      time:'',
      career:'',
      level:'',
      des:''
    }
  ]);
  // 技能介绍
  const [skill, setSkill] = useState([{
      name:''
    }]);
  // 个人介绍
  const [introduce, setIntroduce] = useState([
    {
      name:''
    }
  ]);
  // 个人荣誉
  const [honor, setHonor] = useState([
    {
      name:'',
      time:''
    }
  ]);
  // 数据源
  // const data =
  const [data, setData] = useState([
    {
      key:1,
      title: '个人信息',
      icon:<IdcardTwoTone />,
      des:'个人基本信息',
      isHide:false
    },
    {
      key:2,
      title: '教育背景',
      icon:<ContainerTwoTone />,
      des:'教育背景',
      isHide:false
    },
    {
      key:3,
      title: '专业技能',
      icon:<ToolTwoTone />,
      des:'专业技能',
      isHide:false
    },
    {
      key:4,
      title: '工作经历',
      icon:<BankTwoTone />,
      des:'工作经历',
      isHide:false
    },
    {
      key:5,
      title: '开源项目',
      icon:<AppstoreTwoTone />,
      des:'开源项目',
      isHide:false
    },
    {
      key:6,
      title: '荣誉奖项',
      icon:<ProfileTwoTone />,
      des:'个人总结',
      isHide:false
    },
    {
      key:7,
      title: '个人总结',
      icon:<ProfileTwoTone />,
      des:'个人总结',
      isHide:false
    },
    {
      key:8,
      title: '设置',
      icon:<EditTwoTone />,
      des:'设置模块',
      isHide:false
    }
  ]);
  // 颜色
  const [colors, setColors] = useState({
    back:'#96e0f8',
    fColor:'#00759c'
  });
  // urlImg
  const [imgUrl, setImgUrl] = useState('');

  // 父传子接收 上传的头像
  // const imgUrls = useCallback((img) => { // 优化
  //   setImgUrl(img)
  // },[imgUrl])
  const imgUrls = (img) => {
    setImgUrl(img)
  }

  const onListItemClick = (key) => {
    switch (key) {
      case 1:
        setType(data[0])
        break
      case 2:
        setType(data[1])
        break
      case 3:
        setType(data[2])
        break
      case 4:
        setType(data[3])
        break
      case 5:
        setType(data[4])
        break
      case 6:
        setType(data[5])
        break
      case 7:
        setType(data[6])
        break
      case 8:
        setType(data[7])
        break
      default:
        break
    }
  }
  // 父传子
  const savaPdfInfoCallBack = (type,info) => {
    switch (type.key) {
      case 1:
        setPersonal(info)
        break
      case 2:
        setEducate(info.infoList)
        break
      case 3:
        setSkill(info.infoList)
        break
      case 4:
        setJob(info.infoList)
        break
      case 5:
        setProject(info.infoList)
        break
      case 6:
        setHonor(info.infoList)
        break
      case 7:
        setIntroduce(info.infoList)
        break
      default:
        break
    }
  }
  // 父传子修改数据源
  const editData = (type,updateInfo) => {
    // console.log(type,updateInfo)
    data.map((item,index)=>{
      if (item.key === type.key){
        item.title = updateInfo.title
        data[index] = item
        const newData = [...data]
        setData(newData)

        if (updateInfo.isHide !== undefined){
          item.isHide = updateInfo.isHide
          data[index] = item
          const newData = [...data]
          setData(newData)
        }
      }
    })
    setColors(updateInfo.color)
    return null
  }

  return (
    <PdfGeneratorWrapper height={height}>
      {/* 控制简历的菜单 */}
      <div className={'menu'}>
        <div className={'upload-head'}>
          <UploadHead imgUrls={imgUrls}/>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          className={'menus'}
          renderItem={(item) => {
            // 如果 isHide 为 true 表示隐藏
            if (!item.isHide) {
              return (
                <List.Item  onClick={event => onListItemClick(item.key)}>
                  <List.Item.Meta
                    avatar={item.icon}
                    title={item.title}
                    description={item.des}
                  />
                </List.Item>
              )
            }
          }}
        />
      </div>

      <div style={{ flexGrow: 2 }} className={'right-pdf'}>
        <PDFViewer
          title={'javascript'}
          showToolbar={showToolbar}
          style={{
            width: '100%',
            height: '100%'}}
          className={'pdf-viewer'}
        >
          <PdfView imgUrl={imgUrl} data={data} colors={colors} personal={personal} educate={educate} job={job} project={project} skill={skill} introduce={introduce} honor={honor}/>
        </PDFViewer>
      </div>

     {/* 抽屉 */}
     <MyDrawer type={type} savaPdfInfoCallBack={savaPdfInfoCallBack} data={data} editData={editData}/>

    </PdfGeneratorWrapper>
  )
})


export default PdfGenerator