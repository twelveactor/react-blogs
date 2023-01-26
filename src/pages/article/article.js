// 文章信息
import { memo ,useState,useEffect} from 'react'
import {useLocation} from "react-router-dom";
import { ArticleWrapper } from "./style";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {ScheduleTwoTone,TagsTwoTone} from "@ant-design/icons";
import { Divider, Tag,Timeline} from 'antd';


const Article = memo(function () {
  const [text,setText] = useState(``);
  const [tags, setTags] = useState([]);
  const [randomColor] = useState(['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple']);
  const [menuList, setMenuList] = useState([]);
  // 获取 主页路由 跳转传递的 对象
  const {state} = useLocation()
  // console.log(state)


  useEffect(() => {
    setText(JSON.parse(state.content))
    setTags(JSON.parse(state.tags) || [])
  }, [state]);



  const handleMenu = (list) => {
    // console.log(list)
    setMenuList(list)
  }
  return (
    <ArticleWrapper backImg={state.coverInfo.imgURL}>
      <div className="header">
        {/*<img src={require(`../../assets/img/${state.state.imgUrl}`)} alt="" className={'img'} />*/}
        <div className={'header-content'}>
          <p className={'text-nowrap'}>{state.title}</p>
          <Divider orientation="left" />
          <div className={'des'}>
            <p><ScheduleTwoTone className={'icons'}/>发表于:{state.createAt}</p>
            <p><TagsTwoTone className={'icons'}/>
              分类：{
              tags.map(tag=>{
                // 生成随机 颜色
                let colorIndex = Math.floor(Math.random() * randomColor.length - 1)
                // console.log(randomColor[colorIndex])
                return <Tag color={randomColor[colorIndex]} key={tag}>{tag}</Tag>
              })
            }
            </p>
          </div>
        </div>
      </div>
      {/* 仅预览模式，不显示 bar 和编辑框，只支持初始化设置。 */}
      <div className={'preview'}>
        <MdEditor modelValue={text}
                  previewOnly
                  onGetCatalog={handleMenu} // 动态获取markdown目录
         />
        <div className={'menu '}>
          <div className={'menu-text'}>
            <div>目录</div>
            <div>{menuList.length}</div>
          </div>
          <Timeline className={'line'}>
            {
              menuList.map((item,index)=>{
                // console.log(item)
                return <Timeline.Item color="green" key={index}>{item.text}</Timeline.Item>
              })
            }

          </Timeline>
        </div>
      </div>

    </ArticleWrapper>
  )
})

export default Article