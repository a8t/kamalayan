import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { palette, size } from '../assets/styleVariables.json'
import artsweek from '../images/artsweek.png'

const padding = 30

const ProgramsContainer = styled.div`
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

class ProgramsPage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <ProgramsContainer>
                <Helmet>
                    <title>{siteTitle} • Programs</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <h1>Programs</h1>
                <section>
                    <h2>Mulat Midya</h2>
                    <p>
                        The Mulat Midya Project is a media training program in
                        Toronto for Filipino/a/x youth who are interested in
                        developing podcasting skills and are passionate about
                        current issues that affect both the diaspora and
                        homeland.
                    </p>
                    <section>
                        <h3>Who Can Join the Program? </h3>
                        <p>
                            Any Filipino/a/x youth aged 13-29 years old who live
                            in Toronto may join.
                            <br />
                            Having previous experience in podcasting is not
                            required but an interest in sharing and learning
                            about Filipino migration stories and current issues
                            is an asset!
                        </p>
                    </section>
                    <section>
                        <h3>Registration and dates</h3>
                        <ul>
                            <li>
                                The workshops will run on weekends, for 5 weeks
                            </li>
                            <li>
                                Cohort 1 (ages 19-29) will start on Saturday
                                June 19
                            </li>
                            <li>
                                Cohort 2 (ages 13-18) will start on Saturday
                                July 31
                            </li>
                        </ul>
                    </section>
                    <h3>
                        Interested? {''}
                        <a href="https://airtable.com/shrsm7qYg1oqRHfxM">
                            Register here.
                        </a>
                    </h3>
                    <p>The registration deadline for cohort 2 is Sunday, July 25, 2021.</p>
                    <h3>
                        Questions? Contact {''}
                        <a href="mailto:info@kamalayan.ca">info@kamalayan.ca</a>
                        .
                    </h3>
                </section>
            </ProgramsContainer>
        )
    }
}

export default ProgramsPage

export const pageQuery = graphql`
    query ProgramsQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
