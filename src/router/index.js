import React from 'react'
// import Home from '../pages/home/home'
// import Main from "../pages/mians/main";
// import Login from '../pages/login/login'
// import Article from '../pages/article/article'
// import EditorArticle from '../pages/editor-article/editor-article'
// import PersonalResume from '../pages/personal-resume/personal-resume'
import {Navigate} from 'react-router-dom'

const Home = React.lazy(()=>import('../pages/home/home'))
const Main = React.lazy(()=>import('../pages/mians/main'))
const Login = React.lazy(()=>import('../pages/login/login'))
const Article = React.lazy(()=>import('../pages/article/article'))
const EditorArticle = React.lazy(()=>import('../pages/editor-article/editor-article'))
const PersonalResume = React.lazy(()=>import('../pages/personal-resume/personal-resume'))
const OnlinePdf = React.lazy(()=>import('../pages/personal-resume/children-page/online-PDF/online-pdf'))
const PdfGenerator = React.lazy(()=>import('../pages/personal-resume/children-page/pdf-generator/pdf-generator'))
const ThreeJs = React.lazy(()=>import('../pages/threeJs/threeJs'))
const Demo1 = React.lazy(()=>import('../pages/threeJs/children/demo1'))
const Demo2 = React.lazy(()=>import('../pages/threeJs/children/demo2'))
const Demo3 = React.lazy(()=>import('../pages/threeJs/children/demo3'))
const About = React.lazy(()=>import('../pages/about/about'))
const NotFount = React.lazy(()=>import('../pages/not-fount/not-fount'))



const routes = [
  {
    path:'/',
    element: <Navigate to={'/home'}/>
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'/main',
    element:<Main />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path: '/article',
    element: <Article />
  },
  {
    path:'/editorArticle',
    element:<EditorArticle />
  },
  {
    path: '/personalResume',
    element:<PersonalResume />,
    children:[
      {
        path:'/personalResume',
        element:<Navigate to={'/personalResume/onlinePdf'}/>
      },
      {
        path:'/personalResume/onlinePdf',
        element: <OnlinePdf />
      },
      {
        path:'/personalResume/pdfGenerator',
        element: <PdfGenerator />
      }
    ]
  },
  {
    path:'/three',
    element: <ThreeJs />,
  },
  {
    path:'/three/demo1',
    element: <Demo1 />
  },
  {
    path:'/three/demo2',
    element: <Demo2 />
  },
  {
    path:'/three/demo3',
    element: <Demo3 />
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'*',
    element: <NotFount />
  }
]

export default routes