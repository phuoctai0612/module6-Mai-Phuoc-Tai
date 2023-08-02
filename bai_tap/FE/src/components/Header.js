import { Link } from "react-router-dom"

export function Header(){
    return(
        <header className="header-area" >      
        <div className="top-header-area">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="robertoNav">
              <Link to="/" >    <a className="nav-brand" href=""><img src="https://th.bing.com/th/id/OIP.VKj5XpBvWrb1M2W57neTZQHaE7?pid=ImgDet&rs=1" 
          width={"70px"} alt="" /></a></Link>
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span /><span /><span />_page_limit</span>
                </div>
                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                  </div>
                  <div className="classynav">
                    <ul id="nav">
                  <Link to="/" >    <li className="active"><button className="btn btn-success">Bài hát</button></li></Link>
                  
                    </ul>
                  
                  </div>
                  {/* Nav End */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}