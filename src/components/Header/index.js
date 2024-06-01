import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav>
      <div>
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul>
            <li>
              <Link to="/">
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill />
              </Link>
            </li>
            <li>
              <button type="submit" onClick={onClickLogout} aria-label="close">
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">jobs</Link>
            </li>
            <li>
              <button type="submit" onClick={onClickLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
