import React from 'react'
import { graphql } from 'gatsby'

import BlogPost from '../components/blogpost'
import Layout from '../components/layout'

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <div id="main">
         {data.allMarkdownRemark.edges.map(({ node }) => (
           <BlogPost key={node.id} title={node.frontmatter.title} content={node.html}/>
         ))}
        </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
export default Blog
