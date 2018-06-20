import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import styled from 'styled-components'
import { palette, breakpoints } from 'assets/styleVariables.json'

const Container = styled.div`
    background: ${palette.bgOverlay};

    max-width: 800px;
    margin: 0 30px;
    padding: 0 30px;
    @media screen and (min-width: ${breakpoints.nums.xlarge}px) {
        max-width: 1000px;
    }
`

const Content = styled.div`
    a {
        border-bottom: none;
        pointer-events: none;
        cursor: normal;
    }

    > p:first-of-type:first-letter,
    > center + p:first-letter {
        color: #903;
        float: left;
        font-family: Georgia;
        font-size: 4rem;
        line-height: 3rem;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
    }
`

const AuthorDate = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 80px;
`

const Divider = styled.span`
    margin: 0 10px;
`

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <Container>
                <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
                <AuthorDate>
                    <h1>{post.frontmatter.title}</h1>
                    <h2>
                        {post.frontmatter.author} <Divider>|</Divider>{' '}
                        {post.frontmatter.date}
                    </h2>
                </AuthorDate>
                <Content dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
            </Container>
        )
    }
}

export default BlogPostTemplate

export const blogPostQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
            }
        }
    }
`
