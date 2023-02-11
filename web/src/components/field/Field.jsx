import React from "react";

import TextAreaContaner from "../textArea/TextAreaContainer";
import Title from "../title/Title";
import './field.sass'

const Field = React.memo(({ title, ...props }) => {
    return (
        <div className="field">
            <Title title={title} />
            <TextAreaContaner {...props} />
        </div>
    );
})

export default Field;