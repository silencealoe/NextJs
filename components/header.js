function Header({children}){
  return(
    <div >
      <div className="header">
          {children}
      </div>
    
    <style jsx>{`
    .header{
      width:100%;
      height:60px;
      background:pink;
      line-height:60px;
      text-align:center;
      font-weight:bold;
    }
    `}
    </style>
    </div>
  )

}
export default Header
