import React from "react";

import TextAreaContaner from "../textArea/TextAreaContainer";
import TitleContainer from "../title/TitleContainer";

const Field = React.memo(({ title, ...props }) => {
    return (
        <div className="field">
            <TitleContainer title={title} />
            <TextAreaContaner {...props} />
        </div>
    );
})

export default Field;