import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            />
        )

        const applicationURL =
            'https://docs.google.com/forms/d/1I73zEWzUlrjvWL4LD6kuhHg0DzZQs5MnABVgnI2gl7o/edit'

        return (
            <div
                id="main"
                style={
                    this.props.timeout
                        ? { display: 'flex' }
                        : { display: 'none' }
                }
            >
                <article
                    id="midya"
                    className={`${
                        this.props.article === 'midya' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Kamalayan Midya Project 2018</h2>
                    <p>
                        In collaboration with{' '}
                        <a href="https://artreach.org/" target="_blank">
                            ArtReach
                        </a>{' '}
                        in Toronto, Kamalyan is putting together a summer media
                        project for Filipino youth in the Toronto area. Our
                        goals are to get youth involved with media production;
                        to develop their technical, program development, and
                        speaking skills for radio and TV; and to inspire them to
                        create social change. We strive to connect Philippine
                        youth to their culture and to issues in both Canada and
                        the Philippines.
                    </p>
                    <p>
                        If you're interested, you can view the application{' '}
                        <a href={applicationURL}>here</a>. The deadline for
                        applications is June 24, 2018. We look forward to
                        hearing from you!
                    </p>
                    {close}
                </article>

                <article
                    id="about"
                    className={`${
                        this.props.article === 'about' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">About</h2>
                    <p>
                        Kamalayan means “awareness” or “consciousness” in
                        Filipino. We aim to uplift and inform young people so
                        that they may move forward responsibly, conscious of
                        their power and their crucial role in creating change.
                        Kamalayan’s regular workshops and events take a critical
                        look at Philippine history, culture, and current events
                        to encourage, dialogue, awareness and consciousness as a
                        foundation for youth empowerment.
                    </p>
                    <p>We are based in Toronto, Canada.</p>
                    {close}
                </article>

                <article
                    id="contact"
                    className={`${
                        this.props.article === 'contact' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Contact</h2>
                    <p>
                        If you'd like to get in touch, you can fill out the form
                        below, or shoot us an email at{' '}
                        <a href="mailto:info@kamalayan.ca">info@kamalayan.ca</a>.
                        You can also find us on Facebook{' '}
                        <a href="https://www.facebook.com/kamalayankonsciousness/">
                            here
                        </a>.
                    </p>
                    <form
                        method="POST"
                        action="https://formspree.io/info@kamalayan.ca"
                    >
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4" />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="special"
                                />
                            </li>
                            <li>
                                <input type="reset" value="Reset" />
                            </li>
                        </ul>
                    </form>
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: React.PropTypes.object,
    article: React.PropTypes.string,
    articleTimeout: React.PropTypes.bool,
    onCloseArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool,
}

export default Main
