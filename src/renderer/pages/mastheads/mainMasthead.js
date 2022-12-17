import React from 'react';

export default class Masthead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentDidMount() {}
    render() {
        return (
          <>
              <div className="mastheadMainAreaContainer" >
                  <div className="mastheadAppNameContainer" >
                  electron-react-boilerplate-ipfs
                  </div>
                  <div style={{display:"inline-block",textAlign:"left",fontSize:"12px"}} >
                      <li>fork of electron-react-boilerplate</li>
                      <li>install ipfs-http-client</li>
                      <li>access local IPFS node, which must be installed by user</li>
                      <li>production ready</li>
                  </div>
              </div>
          </>
        );
    }
}
