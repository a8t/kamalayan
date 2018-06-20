import React, { Component } from 'react'
import RecentPosts from 'components/blogComponents/RecentPosts'
import styled from 'styled-components'
import { breakpoints } from 'assets/styleVariables.json'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    @media screen and (min-width: ${breakpoints.nums.large}px) {
        padding: 0 100px;
        flex-direction: ${() =>
            location.pathname.split('/').length > 2 ? 'row-reverse' : 'column'};
        justify-content: flex-start;
        align-items: ${() =>
            location.pathname.split('/').length > 2 ? 'flex-start' : 'center'};
        & > *:first-child {
            margin-right: 20px;
        }
    }
`

class BlogLayout extends Component {
    render() {
        const {
            blog: { edges },
        } = this.props

        return (
            <Container>
                {this.props.children}
                {RecentPosts(edges)}
            </Container>
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
