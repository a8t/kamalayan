import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'assets/styleVariables.json'

const ExcerptContainer = styled.div`
    width: 800px;
    padding: 30px;
    border-radius: ${size.borderRadius};
    margin: ${size.elementMargin};
    background: ${palette.bgOverlay};
`

const PostExcerpt = props => {
    const { excerpt } = props.post
    return <ExcerptContainer>Excerpt: {excerpt}</ExcerptContainer>
}

export default PostExcerpt
