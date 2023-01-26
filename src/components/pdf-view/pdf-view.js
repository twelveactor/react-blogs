// 个人简历页面开发
import React, {memo, useState} from 'react'
import {styles} from "./style";
import { Document, Page,Text ,Image,View} from '@react-pdf/renderer'

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.myFontFamilyH3} {...props}>
    {children}
  </Text>
);

const PdfView = memo(function (props) {
  const {imgUrl,data,personal,educate,job,project,skill,introduce,honor,colors} = props
  const [subtitle] = useState(false) // 是否换页
  // const [indexTag, setIndexTag] = useState(0); // 在哪换页，0 不换页 ，1 个人信息 2 教育背景 3工作经历 4个人开源项目 5荣誉奖项 6个人总结


  return (
      <Document title={'简历生成器'}
                author={'chengLi'}
                subject={'简历'}
                keywords={'简历'}
                creator={'chengLi'}
                producer={'chengLi'}
                pageMode={'fullScreen'}
                useOutlines
                twoPageLeft
      >
        <Page size={[595.28, 841.89]}
              style={styles.page}
              orientation={'portrait'}>
          {/* 个人信息 */}
          {
            data[0].isHide ? <></>
              :
              <View style={styles.personalSectionContent}>
                <View style={styles.personalSectionImg}>
                  <Image src={imgUrl || 'https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image'}
                         style={styles.img}/>
                </View>
                <View style={styles.personalSectionPersonal} fixed>
                  <Text style={styles.name}>{personal.title || 'XX'}</Text>
                  <View style={[{
                    display:'flex',
                    flexDirection: 'row'}]}>
                    <Text style={styles.phone}>{personal.phone || '188******99'}</Text>
                    <Text style={styles.email}>{personal.email || '12****3@qq.com'}</Text>
                  </View>
                  <View style={[{
                    display:'flex',
                    flexDirection: 'row'}]}>
                    <Text style={styles.phone}>{personal.city || '地球村'}</Text>
                    <Text style={[{fontSize:'14px'}]}> {`| ${personal.job}` || 'XX开发岗'}</Text>
                  </View>
                </View>
              </View >
          }

          {/* 教育背景 */}
          {
            data[1].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[1].title || '教育背景'}</Text>
                </View>
                <View render={(e) => (
                  educate.map(item=>{
                    return (
                      <View style={{marginTop:'5px'}}>
                        <View style={styles.schoolName}>
                          <Text style={styles.myFontFamilyH2}>{item.name || 'XX大学'}</Text>
                          <Text style={styles.myFontFamilyH2}>
                            { item.time === undefined || item.time === ''? '':`${item.time[0].$y}年${item.time[0].$m}-${item.time[1].$y}年${item.time[1].$m}`}
                          </Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.myFontFamilyH3}>{item.career || 'XX 专业'}</Text>
                          <Text style={styles.myFontFamilyH3}>{item.level || ' XX 学历'}  </Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.des}>
                            {item.des || '专业描述......'}
                          </Text>
                        </View>
                      </View>
                    )
                  })
                )} />
              </>
          }

          {/* 专业技能 */}
          {
            data[2].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[2].title || '专业技能'}</Text>
                </View>
                <View render={()=>(
                  skill.map(item=>{
                    return(
                      <View fixed wrap={true}>
                        <Text style={styles.des} fixed wrap={true}>
                          {item.name || '1、我会react,vue........'}
                        </Text>
                      </View>
                    )
                  })
                )} />
              </>
          }

          {/* 工作经历 */}
          {
            data[3].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[2].title || '工作经历'}</Text>
                </View>
                <View render={(e) => (
                  job.map(item=>{
                    return (
                      <View style={{marginTop:'5px'}}>
                        <View style={styles.schoolName}>
                          <Text style={styles.myFontFamilyH2}>{item.name || 'XX巴巴'}</Text>
                          <Text style={styles.myFontFamilyH2}>
                            { item.time === undefined || item.time === ''? '':`${item.time[0].$y}年${item.time[0].$m}-${item.time[1].$y}年${item.time[1].$m}`}
                          </Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.myFontFamilyH3}>{item.career || 'XX架构师岗'}</Text>
                          <Text style={styles.myFontFamilyH3}>{item.level || ' XX城市'}  </Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.des}>
                            {item.des || '岗位描述......'}
                          </Text>
                        </View>
                      </View>
                    )
                  })
                )} />
              </>
          }

          {
            subtitle ? <Subtitle break/>:<></>
          }

          {/* 个人开源项目 */}
          {
            data[4].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[4].title || '个人开源项目'}</Text>
                </View>
                <View render={(e) => (
                  project.map(item=>{
                    return (
                      <View style={{marginTop:'5px'}}>
                        <View style={styles.schoolName}>
                          <Text style={styles.myFontFamilyH2}>{item.name || 'XX项目'}</Text>
                          <Text style={styles.myFontFamilyH2}>
                            { item.time === undefined || item.time === ''? '':`${item.time[0].$y}年${item.time[0].$m}-${item.time[1].$y}年${item.time[1].$m}`}
                          </Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.myFontFamilyH3}>{item.career || ''}</Text>
                        </View>
                        <View style={styles.educate}>
                          <Text style={styles.des}>
                            {item.des || '描述......'}
                          </Text>
                        </View>
                      </View>
                    )
                  })
                )} />
              </>
          }

          {/* 荣誉奖项 */}
          {
            data[5].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[5].title || '荣誉奖项'}</Text>
                </View>
                <View render={(e) => (
                  honor.map(item=>{
                    return (
                      <View style={styles.schoolName}>
                        <Text style={styles.myFontFamilyH2}>{item.name || 'XX荣誉'}</Text>
                        <Text style={styles.myFontFamilyH2}>
                          { item.time === undefined || item.time === '' ? '':`${item.time[0].$y}年${item.time[0].$m}-${item.time[1].$y}年${item.time[1].$m}`}
                        </Text>
                      </View>
                    )
                  })
                )} />
              </>
          }

          {/* 个人总结 */}
          {
            data[6].isHide ? <></>
              :
              <>
                <View style={[styles.cutOff,{backgroundColor: `${colors.back}`,borderLeft: `4px solid ${colors.fColor}`}]}>
                  <Text style={[{marginLeft:'15px',fontSize:'13px',color:`${colors.fColor}`}]}>{data[6].title || '个人总结'}</Text>
                </View>
                <View render={()=>(
                  introduce.map(item=>{
                    return(
                      <View fixed wrap={true}>
                        <Text style={styles.des} fixed wrap={true}>
                          {item.name || '1、我.....'}
                        </Text>
                      </View>
                    )
                  })
                )}
                />
              </>
          }
        </Page>
      </Document>
  )
})

export default PdfView