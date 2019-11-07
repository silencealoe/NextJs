import Header from '../../components/header'
import Link from 'next/link'
import router from 'next/router'
function Login(){
  function toIndex(){
    router.push('/')
  }
  return(
    <div>
      <Header>login</Header>
      <Link href="/mypage/register">  
      {
        //用<Link>标签进行跳转是非常容易的，但是又一个小坑需要你注意一下，就是他不支持兄弟标签并列的情况
      }
        <a>to register</a>
      </Link>
      <input type="text" placeholder="input your username"/>
      <input type="password"/>
      <button onClick={toIndex}>submit</button>
    </div>
  )
}
export default Login