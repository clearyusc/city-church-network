import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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


/*const listOfChurches = [
  { name: 'City Church East', location: 'East Memphis', meetingTime: 'Sundays 5:30pm' },
  { name: 'Foundations Church', location: 'Olive Branch', meetingTime: 'Mondays 6:30pm' }
]*/


/*
return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {}, // additional data can be passed via context
                })
            })
        })
*/

/*function getInfo() => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(JSON.stringify(result, null, 4))

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/churchTemplate.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}*/
function getDom(data) {
  return data.allMarkdownRemark.edges.forEach(({ node }) => {
    return <ChurchSummary church={{ 'name': node.fields.slug, 'location': 'blah', 'meetingTime': '5:00pm' }} />
  })
}
function logData(data) {
  console.log(data)
}

const ChurchesPage = () => (
  <Layout>
    <SEO title="Churches" />
    <Section header="Our Churches">
      <p>More churches coming soon...</p>
      <div className="list-group">

        <StaticQuery
          query={graphql`
          query {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
              }
            }
        `}
          render={data => (
            data.allMarkdownRemark.edges.map(function (edge, i) {
              return <ChurchSummary church={{ 'name': edge.node.fields.slug, 'location': 'blah', 'meetingTime': '5:00pm' }} />
            })
          )
          }
        />
      </div>
    </Section>
  </Layout>
)

export default ChurchesPage
