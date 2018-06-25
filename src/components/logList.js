import React, { Component } from "react";
import { connect } from 'react-redux';

import { loadLogs } from '../actions/logs';

class LogList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.logs.map(l => {
                    return <li key={l.id}>
                        {"The item "}<strong>{l.text}</strong>
                        {" was "}<strong>
                            {l.type + (l.type[l.type.length - 1] === 'e' ? 'd' : "ed")}
                        </strong>
                        {" at Column "} <strong>{l.col}</strong>
                    </li>
                })}
            </ul>
        );
    }

    componentDidMount() {
		this.props.loadLogs();
	}

}

const mapStateToProps = ({ logs = [] }) => {
    return {
        logs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadLogs: () => {
            dispatch(loadLogs());            
        }
    }
}

LogList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogList)


export default LogList;