import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="toolbar-blur" />
                <i
                    className="fa fa-arrow-left back-arrow"
                    onClick={this.props.onBackButtonPress}
                />
                <h1 className="toolbar-title">KAMALAYAN</h1>
            </div>
        )
    }
}

Toolbar.propTypes = {}

export default Toolbar
