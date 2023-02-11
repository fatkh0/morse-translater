import React from "react";

import Field from "./Field";

class FieldContainer extends React.Component {
    render() {
        return <Field {...this.props} />
    }
}

export default FieldContainer;