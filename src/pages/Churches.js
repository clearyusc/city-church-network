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
        <small>{church.location ? church.location : <span></span>}</small>
      </div>
      <p className="mb-1">{church.meetingTime ? church.meetingTime : <span></span>}</p>
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

function getChurchInfo(slug) {
  return new Promise((resolve, reject) => {
    graphql(`
      query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
          frontmatter {
            name
            location
            meetingTime
          }
        }
      }
    `).then(result => {
        return result.data.markdownRemark.frontmatter.location;
        resolve()
      })
  })
}

function getNameFromSlug(slug) {
  return slug.replace(/([A-Z])/g, ' $1').trim()
}

const ChurchesPage = () => (
  <Layout>
    <SEO title="Churches" />
    <Section header={
      {
        "title": "Our Churches",
        "classes": "display-4"
      }}>
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
            // TODO: Figure out how to load not just the slugs but also the info
            data.allMarkdownRemark.edges.map(function (edge, i) {
              const location = getChurchInfo(edge.node.fields.slug);
              console.log('LOCATOION = ' + location);
              const churchName = getNameFromSlug(edge.node.fields.slug)
              return <ChurchSummary key={i} church={{ 'name': churchName }} />
            })
          )
          }
        />
      </div>
    </Section>
  </Layout>
)

export default ChurchesPage
