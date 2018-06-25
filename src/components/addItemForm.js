import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addItem } from '../actions/items';

const validate = values => {
    const errors = {};
    if (!values.itemText) {
        errors.itemText = 'Please enter an item'
    }
    if (!values.col) {
        errors.col = 'Please select a column'
    }
    return errors;
}

const renderInput = ({
    input,
    placeholder,
    type,
    meta: { touched, error }
}) => (
        <div>
            <div>
                <input {...input}
                    placeholder={placeholder}
                    type={type}
                    className={"form_field"}
                />
                {touched &&
                    error && <span>{error}</span>
                }
            </div>
        </div>
    )

const renderSelect = ({
    input,
    meta: { touched, error }
}) => (
        <div className={"select"}>
            <select 
                {...input}
                className={"form_field"}
            >
                <option value=''>CHOOSE COLUMN</option>
                <option value='1'>COLUMN 1</option>
                <option value='2'>COLUMN 2</option>
            </select>
            {touched && error && <span>{error}</span>}
        </div>
    );

class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit({ itemText: text, col }) {
        this.props.addItem(text, col);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    name="itemText"
                    type="text"
                    component={renderInput}
                    placeholder="Enter Item"
                />

                <Field
                    name="col"
                    component={renderSelect}
                />

                <div>
                    <button 
                        type="submit" 
                        disabled={submitting}
                        className={"form_field"}
                    >
                        ADD ITEM
                    </button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (text, col) => {
            dispatch(addItem(text, col));
        }
    }
}

AddItemForm = connect(
    null,
    mapDispatchToProps
)(AddItemForm)

export default reduxForm({
    form: 'addItemForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
})(AddItemForm)