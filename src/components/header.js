import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoImg from "./../Images/logo.png"
import headerStyle from "./header.module.css"
const Header = ({ siteTitle, siteSubTitle }) => (
  <div className={headerStyle.headContainer}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <div className={headerStyle.logoStyle}>
            <img src={logoImg} class="img-fluid" width={130} height={130}></img>
          </div>
        </div>
        <div className="col-sm-6">
          <p className={headerStyle.headerSubHeading}>{siteSubTitle}</p>
        </div>
        <div className="col-sm-4">
          <div className={headerStyle.donatebtn}>
            <p>DONATE NOW</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
