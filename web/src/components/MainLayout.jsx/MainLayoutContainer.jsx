import React from "react";
import { LANGUAGES_CONSTANT } from "../../constant/languagesConstant";
import { translate } from "../../utils/translator";
import MainLayout from "./MainLayout";

class MainLayoutContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: ''
        }

        this._onTextChangeBound = this._onTextChange.bind(this);
        this._setSelectedLanguageBound = this._setSelectedLanguage.bind(this);
    }

    render() {
        return <MainLayout
                    {...this.props}
                    {...this.state} 
                    setSelectedLanguage={this._setSelectedLanguageBound}
                    onTextChange={this._onTextChangeBound}
                />
    }

    _onTextChange(text) {
        const languages = {
            currentLanguage: this.state.selectedLanguage,
            translatedLanguage: Object
                .values(LANGUAGES_CONSTANT)
                .find(value => value !== this.state.selectedLanguage)
        }

        this.setState({
            [languages.currentLanguage]: text,
            [languages.translatedLanguage]: translate(text, languages)
        })
    }

    _setSelectedLanguage(selectedLanguage) {
        this.setState({ selectedLanguage });
    }
}

export default MainLayoutContainer;