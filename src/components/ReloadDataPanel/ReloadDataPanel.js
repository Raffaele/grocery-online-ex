import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ReloadDataPanel extends Component {
    render() {
        return <div>
            <h2>Failed to load data... </h2>
            <Button bsStyle="info" onClick={this.props.reloadFn} >
                Try again
            </Button>
        </div>;
    }
}

ReloadDataPanel.propTypes = {
    reloadFn: PropTypes.func
};

export default ReloadDataPanel;
