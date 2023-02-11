import React from 'react';
import './title.sass'


const Title = React.memo(({title}) => {

    return (
        <div className='title'>
            {title}
        </div>
    );
});

export default Title;