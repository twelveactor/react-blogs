import {useState,useEffect} from 'react'
import moment from 'moment'

export function useFormTimes(){
  const [timeObj, setTimeObj] = useState({
    time:0,
    year:0,
    month:0,
    data:0,
    weekday:0
  });
  //获取 当前时间
 const time = moment().format('YYYY-MM-DD');   //2020-08-25 10:23:59
//获取年份
  const year = moment().year();       //2020
  // moment().get('year');  //2020
//获取月份(0：一月份  11: 12月份 )
  const month =  moment().month();       //7
  // moment().get('month');  //7
//获取一个月的某一天
  const data = moment().date();       //25
  // moment().get('date');  //25
//获取小时
//   moment().hours();          //11
//   // moment().get('hours');     //11
// //获取分钟
//   moment().minutes();        //11
//   // moment().get('minutes');   //11
// //获取秒数
//   moment().seconds();        //17
//   // moment().get('seconds');   //17
//获取 今天星期几
  const weekday =  moment().format('dddd');     //Tuesday
  // moment().format('d');        //2
  // moment().day();              //2（0~6 分别代表周日到周六）
  // moment().weekday();          //2（0~6 分别代表周日到周六）
  // moment().isoWeekday();       //2（1~7 分别代表周一到周日）
  // moment().get('date');        //2
  // moment().get('weekday');     //2
  // moment().get('isoWeekday');  //2

  useEffect(() => {
    setTimeObj({
      time:time,
      year:year,
      month:month,
      data:data,
      weekday:weekday
    })
  }, [data]);



  return timeObj
}