import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'

//import '../scss/app.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Section>
      <div className="jumbotron shadow mt-4">
        <h1 className="display-4">The City Church Network</h1>
        <p className="lead">Churches that multiply disciples and churches until there's No Place Left</p>
        <hr className="my-4" />
        <p>What would it look like to see the book of Acts unfold in our day, in our cities?  We exist to glorify God by making disciples and planting churches out of lostness, until there is no place left where the gospel is not proclaimed.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/About/" role="button">Learn more</Link>
        </p>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
