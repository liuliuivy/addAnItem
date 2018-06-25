import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Well } from 'react-bootstrap';
import classNames from 'classnames/bind';

import { connect } from 'react-redux';
import { deleteItem } from '../actions/items';

import "./itemsCol.css";

class ItemsCol extends Component {
    render() {
        return (
            <div>
                <Well>{this.props.title}</Well>
                <ListGroup>
                    {this.props.items.map((item, i) => <div 
                        key={item.id} 
                    >
                        <ListGroupItem 
                            className = {classNames("item", {"item--inverse": i%2 === 1 })}
                        >
                            <p>{item.text}</p>
                            <Button style = {{float: "right"}} onClick={() => this.props.deleteItem(item.id)}
                            >
                                x
                                </Button>
                        </ListGroupItem>

                    </div>
                    )}
                </ListGroup>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    }
}

ItemsCol = connect(
    null,
    mapDispatchToProps
)(ItemsCol)


export default ItemsCol;