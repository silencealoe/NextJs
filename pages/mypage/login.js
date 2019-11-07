import Header from '../../components/header'
function Login(){
  return(
    <div>
      <Header>{'login'}</Header>
      <input type="text" placeholder="input your username"/>
      <input type="password"/>
      <button>submit</button>
    </div>
  )
}
export default Login