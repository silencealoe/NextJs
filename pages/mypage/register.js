import Header from '../../components/header'
import Link from 'next/link'
import Head from 'next/head'
import router from 'next/router'
function Register(){
  return(
    <div>
      <Head>
        <title>Regitser</title>
      </Head>
      <Header>Register</Header>
      <Link href="/mypage/login">
        <a>
          to login
        </a>
      </Link>
      <button onClick={()=>{router.push('/mypage/login')}}>to login</button>



    </div>
  )
}
export default Register