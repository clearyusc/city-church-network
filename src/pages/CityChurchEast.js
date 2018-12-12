import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ChurchInfo from '../components/ChurchInfo'
import Section from '../components/Section'

const CityChurchEast = () => (
    <Layout>
        <SEO title="City Church East" />
        <Section>
            <ChurchInfo
                name="City Church East"
                location="1712 Randolph Pl, Memphis, TN 38120"
                geolocation={{ 'lat': 35.101997, 'lng': -89.841691 }}
                meetingTime="Sundays at 5:30pm"
                contact={{ 'name': 'Ryan Cleary', 'phone': '(832) 367-4886', 'email': 'rclearyusc@gmail.com' }} />
        </Section>
    </Layout>
)

export default CityChurchEast