import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'




/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */


const NavImage = () => (
    <StaticQuery
        query={graphql`
     query {
       placeholderImage: file(relativePath: { eq: "city1-crop1.jpg" }) {
         childImageSharp {
           fluid(maxWidth: 10000) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
   `}
        render={data =>
            <header>
                <div className="fixed-top navbar navbar-expand-sm navbar-inverse justify-content-between">
                    <h1 style={{ color: 'white' }}>The City Church Network</h1>
                </div>
            </header>
        }
    />
)
export default NavImage

/*
const generateStyle = (imageUrl) => {
  return {
    backgroundImage:
      "url(" + imageUrl + ")"
  }
}

const Image = function ({ imageUrl }) {
  return (
    <header style={generateStyle(imageUrl)}>
      <div className="image-title">
        <h1>The City Church Network</h1>
        <h3 className="lead">Churches that multiply disciples and churches until there's No Place Left</h3>
      </div>
    </header>
  );
}

export default Image;*/
