import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, links }) => (
  <header className="fixed-top" style={{ 'box-shadow': '0 4px 6px rgba(0,0,0,0.1)' }}>
    <div className="navbar navbar-expand-sm navbar-dark navbar-inverse justify-content-between">
      <div className="nav-item">
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>
      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            {
              links.map(function (link, i) {
                return <li className="nav-item" key={i}>
                  <Link className="nav-link" to={link}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}>
                    {link}
                  </Link>
                </li>;
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
