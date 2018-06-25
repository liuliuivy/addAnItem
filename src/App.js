import React, { Component } from "react";
import "./App.css";
import { Well, Row, Col } from 'react-bootstrap';

import AddItemForm from './components/addItemForm';
import ShowItems from './components/showItems';
import SearchItem from './components/searchItem';
import AddAnItem from './components/addAnItem';
import LogList from './components/logList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Col sm = {8} smPush={2}>
                    <Row className="show-grid">
                        <Col sm = {7}>
                            <AddAnItem/>
                        </Col>
                        <Col sm = {5}>
                            <LogList/>
                        </Col>
                    </Row>

                    <Well>ADD AN ITEM</Well>
                    <Row className="show-grid">
                        <Col sm={4}>
                            <AddItemForm />
                            <SearchItem />
                        </Col>
                        <Col sm={8}>
                            <ShowItems />
                        </Col>
                    </Row>
                    
                    
                </Col>
            </div>
        );
    }
}

export default App;