import React, { Component } from 'react'
import PostLink from 'components/blogComponents/PostLink'

class BlogLayout extends Component {
    render() {
        const {
            blog: { edges },
        } = this.props

        const Listing = () => {
            const Posts = edges
                .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
                .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
            return <div>{Posts}</div>
        }
        return (
            <div>
                <Listing />
                {this.props.children}
            </div>
        )
    }
}

export default BlogLayout

export const blogLayoutQuery = graphql`
    query AllBlogPostsQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`
