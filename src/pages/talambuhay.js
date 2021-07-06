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
                    <title>{siteTitle} • Talambuhay</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <h1>Talambuhay</h1>
                <section>
                    <h2>Bridging Stories and Identities</h2>
                    <p>
                        It is a mentorship program and series of workshop for young Filipino/a/x women and LGBTQ+ (15 - 25 years old) to discuss issues such as racism, misogyny, homophobia, transphobia, culture shock and mental health.
                    </p>
                    <p>
                        These workshops will focus on topics like the history of migration to Canada, leadership development, community building and special topics based on lived experiences of participants.
                    </p>
                    <p>
                        Storytelling can be used to clear up misconceptions of what it means to be Filipino/a/x in Canada. This program aims to empower youth by building their skills and confidence to be leaders in their community.
                    </p>
                    <section>
                        <h3>Who Can Join the Program? </h3>
                        <p>
                            Any Filipino/a/x youth aged 15-25 years old who live
                            in Toronto may join.
                            <br/>
                            Workshops will be held in English and Filipino.
                        </p>
                    </section>
                    <section>
                        <h3>Registration and dates</h3>
                        <p>
                            The workshops will from September 2021 through to April 2022. 
                        </p>
                        <ul>
                            <li>
                                The workshops will from September 2021 through to April 2022. 
                            </li>
                            <li>
                                <b>September 9, 2021</b> Introduction
                            </li>
                            <li>
                                <b>September 23, 2021</b> Workshop on the Realities of Filipino Migration
                            </li>
                            <li>
                                <b>October 7, 2021</b> Group Mentoring on History of Women and Gender in the Philippines
                            </li>
                            <li>
                                <b>November 4, 2021</b> Workshop on Sexual Orientation and Gender Identity Expression (SOGIE)
                            </li>
                            <li>
                                Further dates and topics to be determined!
                            </li>
                        </ul>
                    </section>
                    <h3>
                        Interested? {''}
                        <a href="https://bit.ly/TalambuhayStories2021">
                            Register here.
                        </a>
                    </h3>
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
