import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'

import Header from './header'
import AppCard from './AppCard'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'

import '../scss/gatstrap.scss'

//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './layout.css'

/* 
<Image imageFile='city1.jpg' />
*/

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} links={["About", "Churches", "Training", "Contact"]} />
        <br />
        <br />
        <div>
          {children}
        </div>
        <div className="d-flex flex-wrap align-content-around justify-content-around bg-secondary">
          <AppCard
            title='Who We Are'
            text='Our vision, values, and statement of faith'
            button={<Link className="btn btn-primary" to='/About/'>About Us</Link>}
            image="https://cdn.glitch.com/57cc6ea8-df91-4d73-b273-431849703c94%2Fben-duchac-66002-unsplash.jpg?1544197254888"></AppCard>
          <AppCard
            title='Where We Are'
            text='Find out information about the churches in our network'
            button={<Link className="btn btn-primary" to='/Churches/'>Our Churches</Link>}
            image='https://cdn.glitch.com/57cc6ea8-df91-4d73-b273-431849703c94%2Fmax-bottinger-149143-unsplash.jpg?1544196772659'></AppCard>
          <AppCard
            title='Get Training'
            text='Free training to equip believers both inside and outside our network'
            button={<Link className="btn btn-primary" to='/Training/'>Get Training</Link>}
            image='https://cdn.glitch.com/57cc6ea8-df91-4d73-b273-431849703c94%2Fdylan-gillis-533818-unsplash.jpg?1544197585318'></AppCard>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
