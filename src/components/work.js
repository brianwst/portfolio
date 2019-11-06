import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Work = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div id="main">
        <div className="container">
          <div className="row">
            <div className="10u 12u$(small)">
              <div className="content" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
      }
    }
  `
export default Work
