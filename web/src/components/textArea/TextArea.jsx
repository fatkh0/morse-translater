import React from "react";

import './textarea.sass';

const TextArea = React.memo(({value, isValid, onChange, onFocus, ...props}) => {
    return (
        <textarea
            className={`textarea  ${!isValid ? 'textarea--invalid': ''}`}
            onFocus={onFocus}
            value={value}
            onChange={onChange}
        />
    );
})

export default TextArea;