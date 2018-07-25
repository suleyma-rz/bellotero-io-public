import React, { Component } from 'react';

/*Images*/
import logoSmall from './assets/bellotero-logo.svg';
import logoMedium from './assets/bellotero-logo@2x.png';
import logoLarge from './assets/bellotero-logo@3x.png';

import logowSmall from './assets/bellotero-logo-white.svg';
import logowMedium from './assets/bellotero-logo-white@2x.png';
import logowLarge from './assets/bellotero-logo-white@3x.png';

import logoAppstore from './assets/app-store.png';
import logoAppstoreMedium from './assets/app-store@2x.png';
import logoAppstoreLarge from './assets/app-store@3x.png';

import logoGooglePlay from './assets/google-play.png';
import logoGooglePlayMedium from './assets/google-play@2x.png';
import logoGooglePlayLarge from './assets/google-play@3x.png';

import './styles/app.sass';
import './App.css';

import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'

/*Sections*/
import MainBanner from './components/MainBanner'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Stories from './components/Stories'
import Partners from './components/Partners'
import About from './components/About'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignInAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faSignInAlt, faEnvelope);

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            dropMenuActive:false,
        }
        this.scrollToTop = this.scrollToTop.bind(this);
        this.menuToggle = this.menuToggle.bind(this);
     }

    menuToggle() {
 		this.setState({dropMenuActive: !this.state.dropMenuActive});
 	}

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
        });

        Events.scrollEvent.register('end', function () {
        });
    }

    scrollToTop() { scroll.scrollToTop(); }

    scrollTo() {
        console.log(this);
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
          Events.scrollEvent.register('end', () => {
            console.log(this);
            resolve();
            Events.scrollEvent.remove('end');
          });
          console.log(this);
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
    }
    componentWillUnmount() {
        this.menuToggle;
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        const fbLink="https://www.facebook.com/themaniaks/";
        const twLink="https://www.facebook.com/themaniaks/";
        const liLink="https://www.facebook.com/themaniaks/";
        const igLink="https://www.facebook.com/themaniaks/";
        const itunesLink="https://itunes.apple.com/mx/developer/maniak/id416851765";
        const googleLink="https://itunes.apple.com/mx/developer/maniak/id416851765";

        return (
            <div className="App">
                <header className="App-header">
                    <nav className="nav-top-menu clearfix">
                            <div className="cols col-30">
                                <Link to="home" id="logo-menu"  spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >
                                    <img src={logoSmall} srcSet={`${logoSmall} 300w, ${logoMedium} 768w, ${logoLarge} 1280w`} alt="Bellotero.io"/>
                                </Link>
                            </div>
                            <div className="cols col-70 wide-menu ">
                                <ul>
                                    <li><Link to="features" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >Features </Link></li>
                                    <li><Link to="solutions" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Solutions </Link></li>
                                    <li><Link to="stories" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Stories </Link></li>
                                    <li><Link to="partners" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >Partners </Link></li>
                                    <li><Link to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >About </Link></li>
                                    <li><Link to="blog" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >Blog </Link></li>
                                    <li className="no-padding">
                                        <button type="button" class="btn btn-bluegreen">Request a demo</button>
                                        <button type="button" class="btn btn-dark">Log In</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown-menu">
                                <div className="cols col-100 ">
                                    <button type="button" class="btn btn-bluegreen"> <FontAwesomeIcon icon="envelope"/></button>
                                    <button type="button" class="btn btn-dark"><FontAwesomeIcon icon="sign-in-alt"/></button>
                                    <button type="button" class="btn btn-dark" onClick={this.menuToggle}><FontAwesomeIcon icon="bars"/></button>
                                </div>
                                <div className={ this.state.dropMenuActive ? 'list-menu active' : 'list-menu' }>
                                    <ul>
                                        <li><Link to="features" spy={true} smooth={true} offset={0} duration={500}  onClick={this.menuToggle} onSetActive={this.handleSetActive} >Features </Link></li>
                                        <li><Link to="solutions" spy={true} smooth={true} offset={0} duration={500} onClick={this.menuToggle} onSetActive={this.handleSetActive}>Solutions </Link></li>
                                        <li><Link to="stories" spy={true} smooth={true} offset={0} duration={500} onClick={this.menuToggle} onSetActive={this.handleSetActive}>Stories </Link></li>
                                        <li><Link to="partners" spy={true} smooth={true} offset={0} duration={500} onClick={this.menuToggle} onSetActive={this.handleSetActive} >Partners </Link></li>
                                        <li><Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={this.menuToggle} onSetActive={this.handleSetActive} >About </Link></li>
                                        <li><Link to="blog" spy={true} smooth={true} offset={0} duration={500} onClick={this.menuToggle} onSetActive={this.handleSetActive} >Blog </Link></li>
                                    </ul>
                                </div>
                            </div>
                    </nav>
                </header>
                <Element name="home" className="element fixed-size" id="home">
                    <MainBanner/>
                </Element>
                <Element name="features" className="element fixed-size" id="features">
                    <Features/>
                </Element>
                <Element name="solutions" className="element fixed-size" id="solutions">
                    <Solutions/>
                </Element>
                <Element name="stories" className="element fixed-size" id="stories">
                    <Stories/>
                </Element>
                <Element name="partners" className="element fixed-size" id="partners">
                    <Partners/>
                </Element>
                <Element name="about" className="element fixed-size" id="about">
                    <About/>
                </Element>

                <div className="FooterBlock">
                  <div className="wrapper">
                      <div className="cols col-25 invisible-resp">
                          <a href="home" className="cols col-75"><img src={logowSmall}  srcSet={`${logowSmall} 300w, ${logowMedium} 768w, ${logowLarge} 1280w`} alt="Bellotero.io"/></a>
                      </div>
                      <div class="cols col-25">
                          <ul>
                              <li>Bellotero.io</li>
                              <li><Link to="features" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >Features </Link></li>
                              <li><Link to="solutions" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Solutions </Link></li>
                              <li><Link to="stories" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Stories </Link></li>
                              <li><Link to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive} >About </Link></li>
                          </ul>
                      </div>
                      <div class="cols col-25">
                          <ul>
                              <li>Social</li>
                              <li><a href={fbLink}>Facebook</a></li>
                              <li><a href={twLink}>Twitter</a></li>
                              <li><a href={liLink}>LinkedIn</a></li>
                              <li><a href={igLink}>Instagram</a></li>
                          </ul>
                      </div>
                      <div class="cols col-25">
                          <ul>
                              <li>Support</li>
                              <li>support@bellotero.com</li>
                              <li>(555) 555-5555</li>
                              <li>Chat now</li>
                              <li class="app-logo">
                                  <a href={itunesLink} className="col-70">
                                      <img src={logoAppstore}  srcSet={`${logoAppstore} 300w, ${logoAppstoreMedium} 768w, ${logoAppstoreLarge} 1280w`} alt="appstore"/>
                                  </a>
                              </li>
                              <li class="app-logo">
                                  <a href={googleLink} className="col-70">
                                      <img src={logoGooglePlay}  srcSet={`${logoGooglePlay} 300w, ${logoGooglePlayMedium} 768w, ${logoGooglePlayLarge} 1280w`} alt="googleplay"/>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
                <div className="footer-info">
                    <div className="wrapper wrapper-no-padding">
                        <p className="cols col-70"> &copy; 1909 Bellotero.io</p>
                        <p className="cols col-15">Privacy Policy</p>
                        <p className="cols col-15">Terms of Service</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
