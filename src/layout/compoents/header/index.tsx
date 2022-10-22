
import { Link } from "react-router-dom";
import { navList } from '@/routes'
import './index.less'

const Header = () =>{
  return (
    <header className="home-layout-header">
      <ul className="layout-header-nav">
      {
        navList.map((nav, i) => {
          return (
            <li className="layout-header-navItem" key={`${nav.path}_${i}`}>
              <Link to={`${nav.path}`}>{nav.label}</Link>
            </li>
          )
        })
      }
      </ul>
    </header>
  )
}

export default Header