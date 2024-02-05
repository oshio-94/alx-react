import React, { Component } from "react";
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

class Footer extends Component {
    render() {
        return (
          <div className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          </div>
        )
    }
}
export default Footer;