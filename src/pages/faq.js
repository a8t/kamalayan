import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { palette, size } from '../assets/styleVariables.json'

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
                    <h2>Who is Kamalayan?</h2>
                    <p>Kamalayan means consciousness.</p>
                    <p>
                        The Kamalayan:Konsciousness Kollective is a kollective
                        of youth interested in engaging, raising awareness, and
                        empowering others about the Philippines and the Filipino
                        community. In the past we have organized workshops and
                        events on Philippine history, culture, and current
                        events. We also actively participate with community
                        partners such as Radyo Migrante, TV Migrante, the
                        Filipino Canadian Writers and Journalists Network, and
                        more.
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
                <div>
                    <h2>What is the Kamalayan Midya Project?</h2>
                    <p>
                        The Kamalayan Youth Midya Project is a media production
                        program which includes training for radio, and tv
                        production as well as lessons of Philippine history. In
                        the past, youth in the Kamalayan collective who wanted
                        to be involved in media were invited on a drop in basis.
                        Youth assisted in the studio and attended free training
                        from the community radio station. This project idea is
                        the result of our collective’s years of experience as
                        media volunteers. We hope to broaden the Filipino youth
                        voice by working with our partners Radyo Migrante and TV
                        Migrante.
                    </p>
                </div>
                <div>
                    <h2>What will participants learn?</h2>
                    <p>
                        In this project participants will have weekly workshops
                        on:
                        <ul>
                            <li>Newswriting</li>
                            <li>Scriptwriting</li>
                            <li>Radio and TV hosting</li>
                            <li>Concept development</li>
                        </ul>
                        At Kamalayan we ground our work with the realities and
                        history of the Filipino community in Toronto, Canada as
                        well as the motherland, the Philippines. Discussions on
                        history and current events are an integral part of this
                        project.
                    </p>
                    <p>
                        Participants will have a final group project of helping
                        produce a radio or tv episode with our media partners.
                    </p>
                </div>
                <div>
                    <h2>Who can participate?</h2>
                    <p>
                        Youth of Filipino descent between the ages of 16-29 can
                        participate. No professional media experience is
                        required. An interest in learning and working as a group
                        will help!
                    </p>
                </div>
                <div>
                    <h2>Wait, do I have to speak Filipino?</h2>
                    <p>
                        Not necessarily, the workshops will be given in English
                        and our media partners are Filipino-English programming.
                    </p>
                </div>
                <div>
                    <h2>How many participants will be included?</h2>
                    <p>We're looking into accepting about 6-10 applicants.</p>
                </div>
                <div>
                    <h2>Is there a cost?</h2>
                    <p>
                        The programs is free for participants. TTC tokens will
                        also be provided, and food will be available during the
                        sessions.
                    </p>
                </div>
                <div>
                    <h2>What will I get by doing this?</h2>
                    <p>
                        Skills and experience! You will meet a lot of great
                        interesting people along the way and with the training
                        and final project you will get a certificate of
                        completion ...and who knows what other opportunities
                        will come your way!
                    </p>
                    <p>
                        Kamalayan members also will host complementary study
                        sessions on Philippine history, the history of Filipinos
                        in Canada, and other issues being faced by the
                        community. These study sessions are meant teach but also
                        provide inspiration for the youth participants for their
                        final project. Moreover, youth participants will be able
                        to cultivate their relationship with themselves, their
                        local communities, external communities and beyond. The
                        participants would be able to contribute to the work of
                        TV and Radyo Migrante’s vision as engaged community
                        media outlets, making this a mutually beneficial
                        partnership.
                    </p>
                </div>
                <h2>How do I get involved?</h2>
                <p>
                    Glad you asked! You can find the application{' '}
                    <a
                        href="https://goo.gl/forms/4mosbV2stTlZGMXW2"
                        target="_blank"
                        ref="noopen"
                    >
                        here.
                    </a>{' '}
                    The deadline is June 24, 2018.
                </p>
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
