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
                <h2>Who is Kamalayan?</h2>
                <p>
                    Kamalayan Konsciousness Kollective is a collective of youth
                    ages 16 to 29 interested in engaging discourse, raising
                    awareness, and empowering other youth to about the
                    Philippines. We have organized workshops and events on
                    Philippine history, culture, and current events. We also
                    actively participate with community partners such as Radyo
                    Migrante, TV Migrante, the Filipino Writers Network, and
                    more.
                </p>
                <p>
                    Our organizers have been volunteer radio hosts and
                    programmers on Toronto-based program Radyo Migrante at Vibe
                    105.5 FM. Radyo Migrante is a 10-year old, multi- awarded
                    Filipino-English radio talk show housed at York University.
                    In 2017, TV Migrante was launched as a sister show of Radyo
                    Migrante. Members of the collective have been featured as
                    cultural workers and as co-hosts in the program.
                </p>
                <h2>What is the Kamalayan Midya Project?</h2>
                <p>
                    The Kamalayan Youth Midya Project is a media production
                    program which includes training for radio, and tv production
                    as well as lessons of Philippine history. In the past, youth
                    in the Kamalayan collective who wanted to be involved in
                    media were invited on a drop in basis. Youth assisted in the
                    studio and attended free training from the community radio
                    station. This project idea is the result of our collective’s
                    years of experience as media volunteers. We hope to broaden
                    the Filipino youth voice by working with our partners Radyo
                    Migrante and TV Migrante.
                </p>
                <h2>Who can participate?</h2>
                <p>
                    Anyone of Filipino descent between the ages of 16-29 can
                    participate. No media experience is required as long as you
                    have an interest in learning!
                </p>
                <h2>Is there a cost?</h2>
                <p>
                    The programs is free for participants. TTC tokens will also
                    be provided, and food will be available during the sessions.
                </p>
                <h2>What will be learned?</h2>
                <p>
                    This project will provide youth participants to chance to
                    get actively involved in radio and tv production. The lack
                    of available resources for Philippine youth to pursue the
                    arts provides ample reason for this project. It provides an
                    opportunity for those who would not have considered pursuing
                    content production otherwise. These collective workshops
                    acknowledge these needs by cultivating the space for seeking
                    identity. It serves the purpose of community engagement in
                    Canada in addition to reaching their maximum potential
                    through script writing, hosting, interviewing, research and
                    other technical skills. The existence of TV and Radio
                    Migrante provides real and practical experience. Production
                    training will be given by TV and Radyo Migrante studio staff
                    and the VX3 exchange staff of Vibe105.
                </p>
                <p>
                    Kamalayan members also will host complementary study
                    sessions on Philippine history, the history of Filipinos in
                    Canada, and other issues being faced by the community. These
                    study sessions are meant teach but also provide inspiration
                    for the youth participants for their final project.
                    Moreover, youth participants will be able to cultivate their
                    relationship with themselves, their local communities,
                    external communities and beyond. The participants would be
                    able to contribute to the work of TV and Radyo Migrante’s
                    vision as engaged community media outlets, making this a
                    mutually beneficial partnership.
                </p>
                Workshops include:
                <ul>
                    <li>
                        Ethno-specific model of media training that can be
                        replicated for other marginalized and racialized groups
                        in Toronto.
                    </li>
                    <li>History + current events discussions</li>
                    <li>Media workshop and on-the-set training</li>
                    <li>
                        Exposure to Alternative media outlets serving the
                        Filipino community
                    </li>
                    <li>Use of Filipino-English language in news media</li>
                </ul>
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

export const faqQuery = graphql`
    query FaqQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
