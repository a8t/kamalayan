import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { palette, size, breakpoints } from 'assets/styleVariables.json'

const Container = styled.div`
    @media screen and (min-width: ${breakpoints.nums.large}px) {
        position: fixed;

        width: 500px;
    }

    @media screen and (min-width: ${breakpoints.nums.xlarge}px) {
        width: 600px;
    }

    display: ${props =>
        props.location.pathname.split('/').length > 2 ? 'block' : 'none'};
    background: ${palette.bgOverlay};
    padding: 30px;
    margin-bottom: 100px;
    width: 80vw;
    left: 50px;
    top: 100px;
`

const MainContainer = styled.div`
    @media screen and (min-width: ${breakpoints.nums.large}px) {
        width: 600px;
    }
`

const List = styled.ul`
    list-style: circle;
`

const ListItem = styled.li``

const Title = styled.h1``

const LinkContainer = styled.div``

const PostLink = ({ post }) => (
    <LinkContainer key={post.frontmatter.path}>
        <Link to={`${post.frontmatter.path}`}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </LinkContainer>
)

const RecentPosts = ({ edges, location }) => {
    return (
        <MainContainer>
            <Container location={location}>
                <Title>Recent</Title>
                <List>
                    {edges
                        .slice(0, 5)
                        .map(edge => (
                            <ListItem>{PostLink({ post: edge.node })}</ListItem>
                        ))}
                </List>

                <Link to="/blog">Return to blog home</Link>
            </Container>
        </MainContainer>
    )
}

export default RecentPosts
