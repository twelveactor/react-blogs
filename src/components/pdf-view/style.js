import {Font, StyleSheet} from "@react-pdf/renderer";
const aa = require('./华文中宋.TTF')

Font.register({
  family: 'ariblk',
  src:aa
})
export const styles = StyleSheet.create({
  myFontFamilyH2:{
    fontFamily:'ariblk',
    fontSize:12
  },
  myFontFamilyH3:{
    fontFamily:'ariblk',
    fontSize:10
  },
  // 一个页面
  page:{
    fontFamily:'ariblk',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: '#ffffff',
  },
  // 页面中的一个区域
  personalSectionImg:{
    backgroundColor: '#ffffff',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'left'
  },
  personalSectionContent:{
    backgroundColor: '#ffffff',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'left'
  },
  personalSectionPersonal:{
    backgroundColor: '#ffffff',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  img:{
    width:'60px',
    height:'70px',
    overflow:'hidden'
  },
  name:{
    marginLeft:'20px',
  },
  phone:{
    marginLeft:'20px',
    fontSize:'14px'
  },
  email:{
    marginLeft:'20px',
    fontSize:'14px'
  },
  // 分割线
  cutOff:{
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#96e0f8',
    width:'100%',
    height:'20px',
    borderLeft: '4px solid #00759c'
  },
  // 教育经历
  schoolName:{
    backgroundColor: '#ffffff',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  educate:{
    backgroundColor: '#ffffff',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'left'
  },
  des:{
    fontFamily:'ariblk',
    fontSize:8
  },
});