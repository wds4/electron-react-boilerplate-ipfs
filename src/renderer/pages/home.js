import React from 'react';
import Masthead from './mastheads/mainMasthead.js';
import * as MiscAppFxns from "./lib/app/misc.ts";

const updateMainColWidth = MiscAppFxns.updateMainColWidth;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {
        updateMainColWidth();
    }
    render() {
        return (
            <>
                <div id="menuCol" className="menuCol" >
                </div>
                <div id="mainCol" >
                    <Masthead />
                    <div id="mainPanel" >
                        <div className="h4" >Home</div>

                    </div>
                </div>
            </>
        );
    }
}
