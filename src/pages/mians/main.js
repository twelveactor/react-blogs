import {memo, useEffect} from 'react'
import {
  GithubFilled,
  MailOutlined ,
  EnvironmentOutlined,
  FieldTimeOutlined,
  BookOutlined,
  ContainerTwoTone,
  SettingTwoTone,
  RocketTwoTone
} from '@ant-design/icons';
import { FloatButton,Tooltip ,message} from 'antd';
import {
  ContentWrapper,
  FooterWrapper,
  HeaderWrapper,
  MainWrapper
} from './style'
import {useNavigate} from "react-router-dom";
// import {
//   getArticleAll
// } from '../../service/mian'
import ArticleItem from '../../components/article_item/article-item'
import ArticleItemRight from '../../components/article-item-right/article-item-right'
import {
  changeArticleListAction
} from '../../store/actionsCreators'
import {shallowEqual, useDispatch, useSelector} from "react-redux";

// 数组对象排序
const compare = function (obj1, obj2) {
  let val1 = obj1.id;
  let val2 = obj2.id;
  if (val1 < val2) {
    return 1;
  } else if (val1 > val2) {
    return -1;
  } else {
    return 0;
  }
}

const Mains = memo(function () {
  const navigate = useNavigate() // 导航
  const [messageApi, contextHolder] = message.useMessage();
  // const [articleList,setArticleList] = useState([])

  // 1、redux 中将dispatch 映射给组件
  const dispatch = useDispatch()
  // 2、useSelector 将state映射到组件中 ，useDispatch 直接获取dispatch函数
  const { articleList } = useSelector(state => ({
    articleList:state.articleList
  }),shallowEqual)

  // console.log(articleLists)
  useEffect( ()=>{
    // getArticleAll().then(res=>{
    //   console.log(res)
    //   if (res.state){
    //     setArticleList(res.data[0])
    //   }
    // })
    dispatch(changeArticleListAction())
  },[dispatch])


  const handlePublicArticle = () => {
    console.log('发表文章')
    navigate('/editorArticle')
  }
  const handleBackTop = () => {
    if (window.scrollY === 0){
      messageApi.open({
        type:'warning',
        content:'已到达顶部,请不要重复点击!!!'
      })
    }
    window.scrollTo(0,0)
  }
  // 跳转文章详情
  // const handleToArticle = (item,index) => {
  //   console.log(item,index)
  // }
  const onToAbout = () => {
      navigate('/about')
  }

  return (
    <MainWrapper>

        <HeaderWrapper>
          {/*<img src={require("../../assets/img/back/20220316_175925_94907808_p0.jpg")}*/}
          {/*     alt=""*/}
          {/*     className={'header-img'}/>*/}
          <div className={'header-img'}/>
        </HeaderWrapper>

        <ContentWrapper>
          <div className={'content-top-user'}>
            <div className={'top-left'}>
              <div className={'left-img'}>
                <img src={require('../../assets/img/weather/winter.png')} alt="" className={'img'} loading={'lazy'}/>
              </div>
              <div className={'left-info'}>
                <div className="info-name text-nowrap">
                  温故知新
                </div>
                <div className="info-dec text-nowrap">
                  study blog
                </div>
                <ul className="tags">
                  <li className={'tag'}><GithubFilled style={{color:'#930092'}}/></li>
                  <li className={'tag'}><GithubFilled style={{color:'#7c6e02'}}/></li>
                </ul>
              </div>
            </div>
            <div className={'top-right'}>
              <div className={'right-info'}>
                <div className={'dec'}>
                  <p className={'title'}><MailOutlined style={{padding:"0 3px",fontSize:"15px"}}/>EMAIL</p>
                  <p className={'info-dec'}>2918747479@qq.com</p>
                </div>
                <div className={'dec'}>
                  <p className={'title'}><EnvironmentOutlined style={{padding:"0 3px",fontSize:"15px"}}/>LOCATION</p>
                  <p className={'info-dec'}>CHINA 江西九江</p>
                </div>
                <div className={'dec'}>
                  <p className={'title'}><FieldTimeOutlined style={{padding:"0 3px",fontSize:"15px"}}/>TIME</p>
                  <p className={'info-dec'}>2022-12-8</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'content-main'}>
            <div className="left-content">
              <div className="blogs active">
                <BookOutlined />
                文章
              </div>
              {/*<div className="blogs">*/}
              {/*  分类*/}
              {/*</div>*/}
              <div className="blogs" onClick={onToAbout}>
                关于
              </div>
            </div>
            <div className="main-content">
              {/*博客内容*/}
              {
                articleList.sort(compare).map((item,index)=>{
                  // console.log(item.id)
                  return (
                    index % 2 === 1 ? <ArticleItem item={item} key={item.id}/>:<ArticleItemRight item={item} key={item.id}/>
                  )
                })
              }
            </div>
          </div>
        </ContentWrapper>

        <FooterWrapper>
          <h3 className={'h3'}>脚注：温故而知新，可以为师矣。学而不思则罔，思而不学则殆！</h3>
        </FooterWrapper>

        {/* 悬浮按钮 */}
        {/*<FloatButton.Group icon={<CustomerServiceOutlined />} type="primary" trigger="hover">*/}
        <FloatButton.Group icon={<SettingTwoTone className={'float-button'}/>} type="primary" trigger="hover" >
          <Tooltip placement="left" title={'发表文章'} color={'#f50'}>
            <FloatButton icon={<ContainerTwoTone />}  onClick={handlePublicArticle}/>
          </Tooltip>
          <Tooltip placement="left" title={'返回顶部'} color={'#87d068'}>
            <FloatButton icon={<RocketTwoTone />} onClick={handleBackTop}/>
          </Tooltip>
        </FloatButton.Group>

        {contextHolder}

      </MainWrapper>
  )

})

export default Mains