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
              </div>
          </>
        );
    }
}
