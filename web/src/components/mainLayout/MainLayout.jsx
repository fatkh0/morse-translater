import React from "react";
import { LANGUAGES_CONSTANT } from "../../constant/languagesConstant";

import FieldContainer from "../field/FieldContaner";
import { TITLES_NAME } from "./fieldsTitles";
import './mainLayout.sass';

const MainLayout = React.memo((props) => {

    const renderField = (language) => {
        return (
            <FieldContainer
                {...props}
                title={TITLES_NAME[language]}
                textAreaValue={props[language]}
                currentLanguage={language}
            />
        )
    }

    return (
        <div className='main-layout'>
            {renderField(LANGUAGES_CONSTANT.EN)}
            {renderField(LANGUAGES_CONSTANT.MRS)}
        </div>
    );
})

export default MainLayout;