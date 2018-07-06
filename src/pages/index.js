import React from 'react'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = props => (
    <div id="wrapper">
        <Header
            onOpenLink={props.handleOpenLink}
            onOpenArticle={props.handleOpenArticle}
            timeout={props.timeout}
        />
        <Main
            isArticleVisible={props.isArticleVisible}
            timeout={props.timeout}
            articleTimeout={props.articleTimeout}
            article={props.article}
            onCloseArticle={props.handleCloseArticle}
            onOpenLink={props.handleOpenLink}
            posterSizes={props.data.headerImage.sizes}
        />
        <Footer timeout={props.timeout} />
    </div>
)

export default IndexPage

export const pageQuery = graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                title
                description
            }
        }

        headerImage: imageSharp(id: { regex: "/poster.png/" }) {
            sizes(maxWidth: 1240) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
