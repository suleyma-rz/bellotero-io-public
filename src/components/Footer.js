import React, { Component } from 'react';
import logo from '../assets/bellotero-logo-white.svg';
import logoAppstore from '../assets/app-store.png';
import logoGooglePlay from '../assets/google-play.png';

class Footer extends Component {
  render() {
    return (
      <div className="FooterBlock">
        <div className="wrapper">
            <div class="cols col-25">
                <a href="home"><img src={logo} alt="Bellotero.io"/></a>
            </div>
            <div class="cols col-25">
                <ul>
                    <li>Belloterio.io</li>
                    <li><a href="Features">Features</a></li>
                    <li><a href="Solutions">Solutions</a></li>
                    <li><a href="Stories">Stories</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Blog">Blog</a></li>
                </ul>
            </div>
            <div class="cols col-25">
                <ul>
                    <li>Social</li>
                    <li><a href="https://www.facebook.com/themaniaks/">Facebook</a></li>
                    <li><a href="https://www.facebook.com/themaniaks/">Twitter</a></li>
                    <li><a href="https://www.facebook.com/themaniaks/">LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/themaniaks/">Instagram</a></li>
                </ul>
            </div>
            <div class="cols col-25">
                <ul>
                    <li>Support</li>
                    <li>support@bellotero.com</li>
                    <li>(555) 555-5555</li>
                    <li>Chat now</li>
                    <li class="app-logo">
                        <a href="https://itunes.apple.com/mx/developer/maniak/id416851765">
                            <img src={logoAppstore} alt="appstore"/>
                        </a>
                    </li>
                    <li class="app-logo">
                        <a href="googleplay">
                            <img src={logoGooglePlay} alt="googleplay"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}

export default Footer;
