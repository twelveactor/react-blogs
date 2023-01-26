import React, {memo, useState,useEffect } from 'react';
import { Button, Drawer, Space,Form,Input ,DatePicker, Table,Switch,Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const MyDrawer = memo((props) => {
  const {type,savaPdfInfoCallBack,data,editData} = props
  const [open, setOpen] = useState(false);
  const [placement] = useState('right');
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [records, setRecords] = useState({});
  const [newData] = useState(data.slice(0,data.length-1)); // 将数据改变一下，slice 不改变原数组

  useEffect(() => {
    // console.log(type)
    // 页面初始化 判空
    if (Object.keys(type).length !== 0 || !Object.prototype.isPrototypeOf(type)){
      setOpen(true)
    }
  },[type]);

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    // console.log('Success:', values);
    // 子传父，将数据给父组件传递过去
    savaPdfInfoCallBack(type,values)
  };
  // 弹窗中的弹窗的确认提交
  const onFinishChildren = (values) => {
    console.log('Success:', values);
    editData(records,values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  // 表格
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'key',
      editable:true,
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'option',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={event => onTableEdit(record)}>修改</Button>
        </Space>
      ),
    },
  ];
  const onTableEdit = (record) => {
    // console.log('dasdasd',record)
    setRecords(record)
    setChildrenDrawer(true)
  }
  // 抽屉 中的 抽屉关闭
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false)
  }

  const colors = [
    {
      back:'#96e0f8',
      fColor:'#00759c'
    },
    {
      back:'#fa9bb9',
      fColor:'#95002c'
    },
    {
      back:'#bc9cff',
      fColor:'#230083'
    },
    {
      back:'#a7ffa7',
      fColor:'#047300'
    },
    {
      back:'#ffdeb2',
      fColor:'#735200'
    },
    {
      back:'#ffb2b2',
      fColor:'#730000'
    },
    {
      back:'#e59bfa',
      fColor:'#000c95'
    },
    {
      back:'#c3fffa',
      fColor:'#009590'
    },
    {
      back:'#d90ffa',
      fColor:'#630073'
    },
    {
      back:'#c7c3ff',
      fColor:'#000c95'
    },
  ]
  return (
    <>
      <Drawer
        title={type.title}
        placement={placement}
        labelAlign={'left '}
        width={500}
        onClose={onClose}
        open={open}
        destroyOnClose
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        {
          type.key === 1 ?
            <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="姓名" name="title"
            >
              <Input />
            </Form.Item>
            <Form.Item label="电话号码" name="phone"
            >
              <Input />
            </Form.Item>
            <Form.Item label="邮箱" name="email"
            >
              <Input />
            </Form.Item>
            <Form.Item label="城市" name="city"
            >
              <Input />
            </Form.Item>
            <Form.Item label="期望岗位" name="job"
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" onClick={onClose}>
              OK
            </Button>
          </Form>
            :
            <></>
        }
        {
          type.key === 2 || type.key === 4 || type.key === 5 ?
            <Form name={"dynamic_form_nest_item"} onFinish={onFinish} autoComplete="off" layout="vertical" preserve={false}>
            <Form.List name="infoList">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        flexDirection:'column',
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item{...restField} label={type.key === 2 ? '学校名称':type.key === 4 ? '公司名称':'项目名称'} name={[name, 'name']}>
                        <Input />
                      </Form.Item>
                      <Form.Item{...restField} label={type.key === 2 ?'专业名称':type.key === 4 ? '职位名称':'github or gitee 地址'} name={[name, 'career']}>
                        <Input />
                      </Form.Item>
                      {
                        type.key === 5 ?
                          <></>
                          :
                          <Form.Item{...restField} label={type.key === 2 ?'学历':'所在城市'} name={[name, 'level']}>
                          <Input />
                        </Form.Item>
                      }
                      <Form.Item{...restField} label={type.key === 2 ?'再读时间':type.key === 4 ? '工作时间':'项目周期'} name={[name, 'time']}>
                        <RangePicker picker="month" />
                      </Form.Item>
                      <Form.Item{...restField} label={type.key === 2 ?'专业（经历）描述':type.key === 4 ? '项目描述':'项目描述'} name={[name, 'des']}>
                        <TextArea rows={4} />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      添加 {type.title}
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={onClose}>
                OK
              </Button>
            </Form.Item>
          </Form>
            :
            <></>
        }

        {
          type.key === 3 || type.key === 6 || type.key === 7 ?
            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off"  preserve={false}>
            <Form.List name="infoList">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        flexDirection:'column',
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item{...restField} label={type.key === 3 ? '掌握技能描述':type.key === 6 ? '荣誉名称':'总结描述'} name={[name, 'name']}>
                        <Input.TextArea  rows={1} />
                      </Form.Item>
                      {
                        type.key === 6 ? <Form.Item{...restField} label={'获奖时间'} name={[name, 'time']}>
                          <RangePicker picker="month" />
                        </Form.Item>:<></>
                      }
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>

                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      添加 {type.title}
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={onClose}>
                OK
              </Button>
            </Form.Item>
          </Form >
            :
            <></>
        }

        {
          type.key === 8 ?
            <Table columns={columns} pagination={false} dataSource={newData} />
            :
            <></>
        }
        <Drawer
          title={records.title || 'base'}
          // closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          destroyOnClose
        >
          <Form
            name="basic"
            onFinish={onFinishChildren}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item label="修改模块名称" name={'title'} initialValue={records.title}
            >
              <Input />
            </Form.Item>
            <Form.Item label="是否隐藏模块" name={'isHide'} valuePropName={'checked'}
            >
              <Switch defaultChecked={records.isHide}/>
            </Form.Item>
            <Form.Item label="颜色更换" name={'color'} initialValue={colors[0]}
            >
              <Radio.Group
                size="small"
                style={{
                  marginTop: 16,
                }}
              >
                {
                  colors.map(item=>{
                    return (
                      <Radio.Button value={item}
                                    style={{backgroundColor:`${item.back}`,borderRadius:0}}
                                    key={item.back}>{item.back}</Radio.Button>
                    )
                  })
                }
              </Radio.Group>
            </Form.Item>
            <Button type="primary" htmlType="submit" onClick={onChildrenDrawerClose}>
              OK
            </Button>
          </Form>
        </Drawer>
      </Drawer>
    </>
  );
})

export default MyDrawer;