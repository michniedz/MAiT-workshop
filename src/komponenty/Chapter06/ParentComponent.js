import React from 'react';
import ChildComponent from './ChildComponent';
import GrandchildComponent from './GrandchildComponent';

const ParentComponent = (props) => {
    return (
        <div>  
            <h1>To jest komponent rodzica!</h1>
            {props.children}
            {/* <ChildComponent >
                <GrandchildComponent />
            </ChildComponent> */}
        </div>
    );
};

export default ParentComponent;