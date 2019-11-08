import {Fragment} from 'react'
import Header from '../../components/header'
import Head from 'next/head'
import Link from 'next/link'
import router, { Router } from 'next/router'

function NameList(){
 
  function gotoDeail(name,age){
    // router.push('/detail?name=大头&age=20')
    //在Next.js中只能通过query来传递参数，不能通过path：id来传递
    router.push({ //编程式跳转传递参数
      pathname:'/detail',
      query:{
        name,
        age
      }
    })
  }
  return(
    <Fragment>
      <Head>
        <title>detail</title>
      </Head>
      <Header>namelist</Header>
      <ul>
        <li>
          <Link href="/detail?name=小明&age=12">
              <a>小明</a>
          </Link>
        </li>
        <li>
          <Link href="/detail?name=小王&age=16">
              <a>小王</a>
          </Link>
        </li>
        <li>
          <Link href={{pathname:'/detail',query:{name:'小红',age:13}}}>
              <a>小红</a>
          </Link>
        </li>
        <li onClick={gotoDeail.bind(null,'大头',20)}>
          <a>大头</a>
        </li>
        <li onClick={gotoDeail.bind(null,'大熊',24)}>
          <a>大熊</a>
        </li>
      </ul>

    </Fragment>
  )
}
export default NameList