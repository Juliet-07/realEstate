/*
 * component: switch
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 * EmBED switch component
 */

import React, {useState, useEffect, createRef} from "react";
import {SwitchWrap} from "./switch.styles";

const Switch = ({click, initialState}) => {
    const [switched, setSwitched] = useState(initialState || null);

    const handleSwitch = e => {
        setSwitched(e.target.checked);
        click(e.target.checked);
    };

    return (
        <SwitchWrap switched={switched}>
            <div className="main">
                <div className="btn">
                    <span>
                        <input type="checkbox" className="check"
                            onClick={handleSwitch}
                            defaultChecked={switched}/>
                        <span className="ball"/>
                    </span>
                </div>
                <div className="overlay"/>
            </div>
        </SwitchWrap>
    );
};

export default Switch;
