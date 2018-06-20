import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { palette, size } from 'assets/styleVariables.json'

const ExcerptContainer = styled.div`
    max-width: 800px;
    width: 100vw;
    padding: 30px;
    border-radius: ${size.borderRadius};
    margin-bottom: ${size.elementMargin};
    background: ${palette.bgOverlay};
`

const PostExcerpt = props => {
    const { excerpt, frontmatter } = props.post
    return (
        <ExcerptContainer key={frontmatter.path}>
            <h2>{frontmatter.title}</h2>
            <p>{excerpt}</p>
            <Link to={frontmatter.path}>Continue reading</Link>
        </ExcerptContainer>
    )
}

export default PostExcerpt
