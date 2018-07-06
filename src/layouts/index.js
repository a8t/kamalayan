import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Toolbar from '../components/Toolbar'

class Template extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: '',
            loading: 'is-loading',
            pageTimeout: false,
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleBackButtonPress = this.handleBackButtonPress.bind(this)
        this.handleOpenLink = this.handleOpenLink.bind(this)
    }

    componentDidMount() {
        requestAnimationFrame(() => {
            this.setState({ loading: '' })
        })

        document.addEventListener('keydown', this.handleKeyPress, false)
        window.addEventListener(
            'popstate',
            event => {
                if (this.props.location.pathname === '/') {
                    this.setState({
                        isArticleVisible: false,
                        timeout: false,
                        articleTimeout: false,
                        article: '',
                    })
                }
            },
            false
        )
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false)
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article,
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            })
            requestAnimationFrame(() => {
                this.setState({
                    articleTimeout: !this.state.articleTimeout,
                })
            })
        }, 325)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout,
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout,
            })
            requestAnimationFrame(() => {
                this.setState({
                    isArticleVisible: !this.state.isArticleVisible,
                    article: '',
                })
            })
        }, 325)
    }

    handleKeyPress(event) {
        if (
            this.state.isArticleVisible &&
            (event.key === 'Escape' || event.code === 'Escape')
        ) {
            this.handleCloseArticle()
        }
    }

    handleOpenLink(link) {
        this.setState({
            isArticleVisible: false,
            articleTimeout: false,
            article: '',
        })

        setTimeout(() => {
            this.props.history.push(link)

            this.setState({ pageTimeout: true, pageFadeInTimeOut: true })

            requestAnimationFrame(() => {
                this.setState({ pageTimeout: false, pageFadeInTimeOut: false })
            })
        }, 325)
    }

    handleBackButtonPress() {
        this.setState({
            pageTimeout: true,
            timeout: false,
        })

        setTimeout(() => {
            this.props.history.push('/')
            requestAnimationFrame(() => {
                this.setState({
                    isArticleVisible: false,
                    article: '',
                    pageTimeout: false,
                })
            })
        }, 325)
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const { location, children } = this.props

        let rootPath = `/`
        const isAtRootPath = location.pathname === rootPath

        const isArticleVisible = !isAtRootPath || this.state.isArticleVisible

        let content

        if (isAtRootPath) {
            content = children(
                Object.assign({}, this.props, {
                    handleOpenLink: this.handleOpenLink,
                    handleOpenArticle: this.handleOpenArticle,
                    handleCloseArticle: this.handleCloseArticle,
                    timeout: this.state.timeout,
                    isArticleVisible: isArticleVisible,
                    articleTimeout: this.state.articleTimeout,
                    article: this.state.article,
                })
            )
        } else {
            content = (
                <div>
                    <Toolbar
                        className={`${
                            this.state.pageTimeout ? 'page-timeout' : ''
                        } ${
                            this.state.pageFadeInTimeOut
                                ? 'page-fade-in-timeout'
                                : ''
                        }`}
                        onBackButtonPress={this.handleBackButtonPress}
                    />
                    <div
                        id="wrapper"
                        className={`page ${
                            !isAtRootPath ? 'page-with-toolbar' : ''
                        } ${this.state.pageTimeout ? 'page-timeout' : ''} ${
                            this.state.pageFadeInTimeOut
                                ? 'page-fade-in-timeout'
                                : ''
                        }`}
                    >
                        <div>
                            <div
                                style={{
                                    maxWidth: '1140px',
                                }}
                            >
                                {children()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div
                className={`body ${this.state.loading} ${
                    isArticleVisible ? 'is-article-visible' : ''
                } ${!isAtRootPath ? 'body-with-toolbar' : ''}`}
            >
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta
                        name="Kamalayan Konsciousness"
                        content={siteDescription}
                    />

                    <meta
                        property="og:image"
                        content="https://i.imgur.com/VVApHzp.jpg"
                    />
                </Helmet>

                {content}

                <div id="bg" />
            </div>
        )
    }
}

export default Template

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
