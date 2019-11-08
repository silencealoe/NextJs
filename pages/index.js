import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Router } from 'next/router'
import axios from 'axios'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



const Home = (props) => {
  //利用钩子事件是可以作很多事情的，比如转换时的加载动画，关掉页面的一些资源计数器....
  //--------------------history--------------------
  //on方法监听
  const [show,setshow]=useState(true)
  console.log(props)
  Router.events.on('routeChangeStart',(...args)=>{ //路由发生变化时，执行方法
    console.log('routerchangestart',...args)
    // console.log(show)
    setshow(false)
  })
  Router.events.on('routeChangeComplete',(...args)=>{ //路由结束变化
    console.log('routeChangecomplete',...args)
    setshow(true)
  })
  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  })
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
  })

  //---------------hash---------------------
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
  })

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
  })
  
  return(
    <div>
   
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>仓库</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>团队</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>状态</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="pie-chart" />
              <Link href="/mypage/login">
                <span>我的</span>                
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Head>
              <title>index</title>
            </Head>
            <div>
              {/* index */}
              {
              show?
              <p>123</p>:''
            }
            </div>
          
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {
              props.todolist.list.map((item,index)=>{
                return(
                  <p>{item}</p>
                )
              })
            }
            </div>
           
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
Home.getInitialProps=async ()=>{//getInitialProps静态方法用来获取远端数据
    const navlist={
      list:['首页','商品列表','朋友','我的']  
    }
    let promise=new Promise((resolve)=>{
      axios.get('http://rap2api.taobao.org/app/mock/232506/getTodoList').then(res=>{
        console.log(res.data)
        resolve(res.data)
      })
    })
    let todolist=await promise
    let data={
      navlist,
      todolist
    }
    return data
}

export default Home
