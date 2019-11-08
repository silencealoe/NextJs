import {withRouter} from 'next/router'
import Head from 'next/head'
import Header from '../components/header'
function Detail({router}){
  return(
    <div>
      <Head>
        <title>detail</title>
      </Head>
      <div>
        <Header>detail</Header>
        <h2>name:{router.query.name}</h2> 
        <p>age:{router.query.age}</p>
          
      </div>
    </div>
  )
}
export default withRouter(Detail) //