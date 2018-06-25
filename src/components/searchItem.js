import React, { Component } from "react";
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setFilter } from '../actions/filter';

class SearchItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        this.props.setFilter(e.target.value)
    }

    render() {
        return (
            <form>
                <FormGroup>
                    SEARCH AN ITEM
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="SEARCH"
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilter: (text) => dispatch(setFilter(text))
    }
}

SearchItem = connect(
    null,
    mapDispatchToProps
)(SearchItem)


export default SearchItem;