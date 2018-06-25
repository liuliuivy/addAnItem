import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import ItemsCol from './itemsCol';
import { loadItems } from '../actions/items';

class ShowItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items } = this.props;
        return <Row className="show-grid">
            <Col sm={6}>
                <ItemsCol title={'COLUMN 1'} items={items.filter(i => i.col == 1)} />
            </Col>
            <Col sm={6}>
                <ItemsCol title={'COLUMN 2'} items={items.filter(i => i.col == 2)} />
            </Col>
        </Row>
    }

    componentDidMount() {
		this.props.loadItems();
	}
}

const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => {
            dispatch(loadItems());            
        }
    }
}

const mapStateToProps = ({ items, filter }) => {
    return {
        items: items.filter(i => i.text.includes(filter))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowItems)
