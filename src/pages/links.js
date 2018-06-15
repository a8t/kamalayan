import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { palette, size } from '../assets/styleVariables.json'

const padding = 30

const LinksContainer = styled.div`
    margin-bottom: 100px;
    max-width: calc(40em + ${2 * padding}px);
    > p {
        font-size: 1em;
    }
    background: ${palette.bgOverlay};
    padding: ${padding}px;
    box-sizing: border-box;
    border-radius: ${size.borderRadius};
`

const linksData = [
    {
        organizationName: 'Anakbayan Toronto',
        urls: [
            {
                url: 'https://anakbayantoronto.com/',
                urlDescription: 'Website',
            },
            {
                url: 'https://www.facebook.com/Anakbayan.Toronto/',
                urlDescription: 'Facebook',
            },
        ],
    },
    {
        organizationName: 'Migrante Canada',
        urls: [
            {
                url: 'http://migrante.ca/',
                urlDescription: 'Website',
            },
            {
                url: 'https://twitter.com/migrantecanada?lang=en',
                urlDescription: 'Twitter',
            },
        ],
    },
    {
        organizationName: 'TV Migrante',
        urls: [
            {
                organizationUrl: 'https://twitter.com/tv_migrante',
                urlDescription: 'Twitter',
            },
        ],
    },
    {
        organizationName: 'Radyo Migrante',
        urls: [
            {
                organizationUrl: 'https://www.facebook.com/RadyoMigrante/',
                urlDescription: 'Facebook',
            },
        ],
    },
    {
        organizationName: 'Gabriela Ontario',
        urls: [
            {
                organizationUrl: 'https://gabrielaon.wordpress.com/',
                urlDescription: 'Website',
            },
            {
                organizationUrl: 'https://www.facebook.com/gabrielaontario/',
                urlDescription: 'Facebook',
            },
        ],
    },
    {
        organizationName: 'Kapisanan Philippine Centre for Arts & Culture',
        urls: [
            {
                organizationUrl: 'http://www.kapisanancentre.com/',
                urlDescription: 'Website',
            },
            {
                organizationUrl: 'https://www.facebook.com/kapisanan/',
                urlDescription: 'Facebook',
            },
            {
                organizationUrl: 'https://twitter.com/kapisanan',
                urlDescription: 'Twitter',
            },
        ],
    },
]

const ListItem = styled.li`
    list-style: none;
    margin-top: 30px;
`
const ListItemTitle = styled.h3`
    margin-bottom: 0;
`
const ListItemLink = styled.a`
    &:not(:last-child) {
        margin-right: 40px;
        position: relative;
        &::before {
            border-right: 2px solid rgba(255, 255, 255, 0.3);
            content: '';
            color: blue;
            height: 100%;
            position: absolute;
            right: -20px;
            top: 2px;
        }
    }
`

class Links extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const renderList = linksData.map(eachOrg => {
            const links = eachOrg.urls.map(eachUrl => {
                return (
                    <ListItemLink
                        href={eachUrl.url}
                        ref="noopen"
                        target="_blank"
                    >
                        {eachUrl.urlDescription}
                    </ListItemLink>
                )
            })
            return (
                <ListItem>
                    <ListItemTitle>{eachOrg.organizationName}</ListItemTitle>
                    {links}
                </ListItem>
            )
        })

        return (
            <LinksContainer>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <h1>Links</h1>
                <h2>Some of our friends:</h2>

                <ul>{renderList}</ul>
            </LinksContainer>
        )
    }
}

export default Links

export const pageQuery = graphql`
    query LinksQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
