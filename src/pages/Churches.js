import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'


const removeWhiteSpace = (word) => {
  return word.replace(/ /g, "");
}

const ChurchSummary = function ({ church }) {
  return (
    <Link to={'/' + removeWhiteSpace(church.name) + '/'} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{church.name}</h5>
        <small>{church.location}</small>
      </div>
      <p className="mb-1">{church.meetingTime}</p>
    </Link>
  );
}


const listOfChurches = [
  { name: 'City Church East', location: 'East Memphis', meetingTime: 'Sundays 5:30pm' },
  { name: 'Foundations Church', location: 'Olive Branch', meetingTime: 'Mondays 6:30pm' }
]


const ChurchesPage = () => (
  <Layout>
    <SEO title="Churches" />
    <Section header="Our Churches">
      <p>More churches coming soon...</p>
      <div class="list-group">
        {
          listOfChurches.map(church => {
            return <ChurchSummary church={church}></ChurchSummary>
          })
        }
      </div>
    </Section>
  </Layout>
)

export default ChurchesPage
