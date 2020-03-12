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

                    <h2>WHAT IS THE KULTURA AT KAMALAYAN ART WEEK?</h2>
                    <p>
                        Kultura at Kamalayan Arts Week is a free program for
                        Filipino youth aged 13-29 that explores art-making as
                        well as Philippine history and current events. Learn how
                        to paint, write songs, create poetry, and much more
                        while learning about your Filipino roots.
                    </p>
                </div>
                <div>
                    <h2>WHAT WILL PARTICIPANTS LEARN?</h2>
                    <p>
                        In this project participants will have daily workshops
                        during the week of March Break (March 16 - 20, 2020) on
                        the following topics:
                    </p>
                    <img src={artsweek} style={{ width: '100%' }} />
                    <p>
                        At Kamalayan, we ground our work with the realities and
                        history of the Filipino community in Canada as well as
                        the motherland, the Philippines. Discussions on history
                        and current events are an integral part of this project.
                    </p>
                </div>
                <div>
                    <h2>WHO CAN PARTICIPATE?</h2>
                    <p>
                        Filipino youth between the ages of 13-29 can
                        participate. Priority will be given to high school
                        youth. No previous experience with art required—an
                        interest in learning and working as a group will help!
                    </p>
                </div>
                <div>
                    <h2>WILL THE WORKSHOPS BE IN TAGALOG OR ENGLISH?</h2>
                    <p>
                        The workshops will be given primarily in English. We
                        will happily accommodate participants who are more
                        comfortable with the Tagalog language!
                    </p>
                </div>
                <div>
                    <h2>HOW MANY PARTICIPANTS WILL BE INCLUDED?</h2>
                    <p>We're looking into accepting about 6-10 applicants.</p>
                </div>
                <div>
                    <h2>IS THERE A COST?</h2>
                    <p>
                        The program is free for participants. Lunch and
                        refreshments will be available during the sessions.
                    </p>
                </div>
                <div>
                    <h2>HOW DO I GET INVOLVED?</h2>
                    <p>
                        Glad you asked! You can find the application{' '}
                        <a href="http://bit.ly/kultura-form-2020">here</a>.
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
