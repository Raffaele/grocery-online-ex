import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './cathegoryList.css';

class CathegoryList extends Component {
    selectCathegory(index) {
        this.props.selectCathegory(index);
    }
    render() {
        
        return <div className="cathegory-list">
            <Button className="cathegory-list__item" bsStyle="warning" onClick={this.selectCathegory.bind(this, -1)}>All</Button>
            {this.props.cathegories.map((cathegory, index) =>
                <Button className="cathegory-list__item" bsStyle={cathegory.isSelected? 'primary' : 'warning'} onClick={this.selectCathegory.bind(this, index)} key={index}>
                     {cathegory.name}
                </Button>
             )}
        </div>;
    }
}

CathegoryList.propTypes = {
    cathegories: PropTypes.array
};

export default CathegoryList;
