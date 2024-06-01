import {Link} from 'react-router-dom'
import ProfileDetails from '../ProfileDetails'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div>
      <h>Find the Job that Fits to Your Life.</h>
      <p>Millions of people searchig fro the jobs in curret sutuation</p>
      <Link to="/jobs">
        <button type="button" className="butt">
          Find Jobs
        </button>
        <ProfileDetails />
      </Link>
    </div>
  </>
)

export default Home
