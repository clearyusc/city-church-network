import React from 'react'

import { graphql } from "gatsby"
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ChurchInfo from '../components/ChurchInfo'
import Section from '../components/Section'


export default function ChurchTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const church = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={church.name} />
            <Section>
                <ChurchInfo
                    name={church.name}
                    location={church.location}
                    geolocation={{ 'lat': church.geolocation_lat, 'lng': church.geolocation_lng }}
                    meetingTime={church.meetingTime}
                    contact={{
                        'name': church.contact_name,
                        'phone': church.contact_phone,
                        'email': church.contact_email,
                        'image': church.featuredImage.childImageSharp.fluid
                    }}
                />
            </Section>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        location
        geolocation_lat
        geolocation_lng
        meetingTime
        contact_name
        contact_phone
        contact_email
        featuredImage {
            childImageSharp{
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
            }
        }
      }
    }
  }
`

