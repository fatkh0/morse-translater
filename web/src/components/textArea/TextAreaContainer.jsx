import React from "react";
import { validate } from "../../utils/validation";
import TextArea from "./TextArea";

class TextAreaContaner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.textAreaValue,
            isValid: true
        }

        this._onChangeBound = this._onChange.bind(this);
        this._onFocusTextAreaBound = this._onFocusTextArea.bind(this);
    }

    render() {
        let value = this.state.value;

        if (this.props.currentLanguage !== this.props.setSelectedLanguage) {
            value = this.props.textAreaValue;
        }
        
        return (
            <TextArea
                value={value}
                isValid={this.state.isValid}
                onChange={this._onChangeBound}
                onFocus={this._onFocusTextAreaBound}
            />
        );
    }

    _onChange(event) {
        const value = event.target.value.toLowerCase();
        
        const isValid = validate(value, this.props.currentLanguage);

        this.setState({ value, isValid }, () => {
            this.props.onTextChange(value)
        });
    }

    _onFocusTextArea() {
        this.props.setSelectedLanguage(this.props.currentLanguage)
    }
}

export default TextAreaContaner;