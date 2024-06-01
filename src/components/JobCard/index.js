import {Link} from 'react-router-dom'

import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    title,
    rating,
    location,
    employementType,
    jobDescription,
    packagePerAnnum,
    id,
  } = jobData

  return (
    //jump to the jobs
    <Link to={`/jobs/${id}`}>
      <li>
        <div className="job-items">
          <div className="logo-tile">
            <img src={companyLogoUrl} alt="company-logo" />
            <div className="title-rating">
              <h1>{title}</h1>
              <div className="rating-con">
                <BsStarFill className="rating-icon" />
                <p className="rating-heading">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-pac">
            <div className="location-employee-con">
              <div className="location-con">
                <MdLocationOn className="location-symb" />
                <p>{location}</p>
              </div>
              <div>
                <BsFillBriefcaseFill className="brief-con" />
                <p>{employementType}</p>
              </div>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr />
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
