import React from 'react';
import Masthead from './mastheads/mainMasthead.js';
import * as MiscAppFxns from "./lib/app/misc.ts";
import * as IpfsFxns from "./lib/ipfs/ipfsHttpClient"

const updateMainColWidth = MiscAppFxns.updateMainColWidth;

const isIpfsNodeAvailable = IpfsFxns.isIpfsNodeAvailable;
const getMyPeerID = IpfsFxns.getMyPeerID;
const getIpfsNodeVersion = IpfsFxns.getIpfsNodeVersion;
const getIpfsNodeID = IpfsFxns.getIpfsNodeID;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {
        updateMainColWidth();

        const isNodeAvail = await isIpfsNodeAvailable();

        if (!isNodeAvail) {
            document.getElementById("nodeNotRunning").style.display = "block"
        }
        if (isNodeAvail) {
            document.getElementById("nodeRunning").style.display = "block"

            const myPeerID = await getMyPeerID();
            document.getElementById("myPeerIdContainer").innerHTML = myPeerID

            const ipfsVersion = await getIpfsNodeVersion();
            document.getElementById("ipfsVersionContainer").innerHTML = ipfsVersion

            const ipfsNodeID = await getIpfsNodeID();
            document.getElementById("ipfsNodeIdContainer").innerHTML = ipfsNodeID
        }

    }
    render() {
        return (
            <>
                <div id="menuCol" className="menuCol" >
                </div>
                <div id="mainCol" >
                    <Masthead />
                    <div id="mainPanel" >
                        <div id="nodeNotRunning" style={{display:"none"}} >
                            You need to make sure you have an ipfs node installed an running on your local machine.
                            To do this, download and run <a href="https://docs.ipfs.tech/install/ipfs-desktop/" target="_blank">IPFS Desktop</a>.
                            <br /><br />
                            If your local IPFS node is running but you get this message, and if your javascript console contains an error saying something like:
                            <span style={{color:"red"}} >Access to fetch has been blocked by CORS policy</span>,
                            then you may need to change your IPFS config. You can do this in IPFS Desktop by going to Settings and under API.HTTPHeaders, enter:
                            <pre>
                            "Access-Control-Allow-Origin": [ "*" ]
                            </pre>
                            Then restart the IPFS node; then restart this app.
                        </div>
                        <div id="nodeRunning" style={{display:"none"}} >
                            <div className="h4" >Your local IPFS node is installed and running!</div>

                            <br/>

                            <div>
                                <div className="leftCol" >my peerID:</div>
                                <div className="rightCol" id="myPeerIdContainer"></div>
                            </div>

                            <br/>

                            <div >version info:</div>
                            <pre id="ipfsVersionContainer"></pre>

                            <br/>

                            <div >id info:</div>
                            <pre id="ipfsNodeIdContainer"></pre>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
