import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { palette, size } from '../assets/styleVariables.json'
import artsweek from '../images/artsweek.png'

const padding = 30

const FaqContainer = styled.div`
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

class FaqPage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <FaqContainer>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <h1>Frequently Asked</h1>
                <div>
                    <h2>WHO IS KAMALAYAN?</h2>
                    <p>
                        Kamalayan means “awareness” or “consciousness” in
                        Filipino. We aim to uplift and inform young people so
                        that they may move forward responsibly, conscious of
                        their power and their crucial role in creating change.
                        Kamalayan’s workshops and events take a critical look at
                        Philippine history, culture, and current events to
                        encourage, dialogue, awareness and consciousness as a
                        foundation for youth empowerment.{' '}
                    </p>

                    <p>
                        We actively participate with community partners such as
                        Radyo Migrante, TV Migrante, the Filipino Canadian
                        Writers and Journalists Network, and more.{' '}
                    </p>

                    <p>
                        Our kollective have been volunteer radio hosts and
                        programmers in Toronto-based Radyo Migrante at Vibe
                        105.5 FM. Radyo Migrante is a 10-year old, multi-
                        awarded Filipino-English radio talk show housed at York
                        University. In 2017, TV Migrante was launched as a
                        sister show of Radyo Migrante. Members of the collective
                        have been featured as cultural workers of these outlets.
                    </p>
                </div>
            </FaqContainer>
        )
    }
}

export default FaqPage

export const pageQuery = graphql`
    query FaqQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
