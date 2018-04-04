import React, { PureComponent } from 'react';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import { HashLink as Link } from 'react-router-hash-link';
import AnchorLink from './AnchorLink';
import Modal from 'react-responsive-modal';
import YouTube from 'react-youtube';

import Features from './Features';
import Wizard from './WizardContainer';
import HowItWorks from './HowItWorks';
import Credits from './Credits';
import Navigation from './Navigation';

import sponsorTootdon from './assets/sponsors/tootdon.png';
import sponsorKibousoft from './assets/sponsors/kibousoft.png';
import sponsorPixiv from './assets/sponsors/pixiv.png';

import wiredLogo from './assets/wired-logo.svg';
import productHuntLogo from './assets/product-hunt-logo-horizontal-black.png';
import theVergeLogo from './assets/the-verge-logo.svg';
import motherboardLogo from './assets/motherboard-logo.svg';

import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';

const styles = {
  modal: {
    padding: 0,
    lineHeight: 0,
  },

  closeIcon: {
    zIndex: 200,
    right: '-40px',
    top: '-30px',
    fill: 'white',
  },

};

const playerOpts = {

  width: 720,
  height: 405,

  playerVars: {
    autoplay: 1,
  },

};

export default class Home extends PureComponent {

  state = {
    open: false,
  };

  setModalRef = c => {
    this.modal = c;
  }

  setPlayerRef = e => {
    this.player = e.target;
    this.player.playVideo();
  }

  handleHowItWorksClick = () => {
    this.setState({ open: true });

    if (this.player) {
      this.player.playVideo();
    }
  }

  onCloseModal = () => {
    this.setState({ open: false });
    this.player.pauseVideo();
  }

  render () {
    const { open } = this.state;

    return (
      <div>
        <div className='intro'>
          <Navigation />

          <div className='text'>
            <h1><FormattedMessage id='home.headline' defaultMessage='Social networking, <strong>back in your hands</strong>' /></h1>
            <p><FormattedMessage id='home.tagline' defaultMessage='The world’s largest free, open-source, decentralized microblogging network' /></p>

            <AnchorLink href='#getting-started' className='cta button'><FormattedMessage id='home.get_started' defaultMessage='Get started' /></AnchorLink>
            <button className='cta button alt' onClick={this.handleHowItWorksClick}><span className='icon-circled'><span className='ion-play' /></span><FormattedMessage id='home.how_it_works' defaultMessage='How it works' /></button>
          </div>

          <div className='hero'>
            <div className='hero__floats'>
              <img src={cloud2} className='float-1' alt='Cloud 1' />
              <img src={cloud4} className='float-2' alt='Cloud 2' />
              <img src={cloud3} className='float-3' alt='Cloud 3' />
            </div>

            <img className='desktop' src={screenshotFull} alt='Screenshot of Mastodon on desktop'/>
            <img className='mobile' src={screenshotMobile} alt='Screenshot of Mastodon on mobile'/>
          </div>
        </div>

        <div className='as-seen-on'>
          <div className='container'>
            <h2><FormattedMessage id='home.as_seen_on' defaultMessage='As seen on' /></h2>

            <div className='logo-grid'>
              <div>
                <a href='https://motherboard.vice.com/en_us/article/mastodon-is-like-twitter-without-nazis-so-why-are-we-not-using-it' className='logo-motherboard'><img src={motherboardLogo} alt='Motherboard' /></a>
                <a href='https://www.producthunt.com/posts/mastodon' className='logo-product-hunt'><img src={productHuntLogo} alt='Product Hunt' /></a>
              </div>

              <div>
                <a href='http://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone' className='logo-the-verge'><img src={theVergeLogo} alt='The Verge' /></a>
                <a href='https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/' className='logo-wired'><img src={wiredLogo} alt='Wired' /></a>
              </div>
            </div>
          </div>
        </div>

        <Features />

        <div className='frontpage-sponsorship'>
          <div className='container'>
            <h2><FormattedMessage id='home.sponsored_by' defaultMessage='Sponsored by' /></h2>

            <div className='logo-grid'>
              <div>
                <Link to='/sponsors' className='logo-sponsor-tootdon'><img src={sponsorTootdon} alt='Tootdon' /></Link>
                <Link to='/sponsors' className='logo-sponsor-tootdon'><img src={sponsorPixiv} alt='pixiv Inc.' /></Link>
                <Link to='/sponsors' className='logo-sponsor-tootdon'><img src={sponsorKibousoft} alt='Kibousoft LLC' /></Link>
              </div>
            </div>
          </div>
        </div>

        <Wizard />

        <div className='bottom-cta'>
          <div className='container'>
            <h3><FormattedMessage id='home.install_your_own' defaultMessage='Install your own' /></h3>
            <p><FormattedMessage id='home.install_your_own_text' defaultMessage='If you are interested in running your own instance &mdash; for your friends, family or organization &mdash; you can get started by reading the installation documentation. You only host your own users and the content that they subscribe to.' /></p>
            <a href='https://github.com/tootsuite/documentation#running-mastodon' className='cta button alt'><FormattedMessage id='home.read_the_docs' defaultMessage='Read the docs' /></a>
          </div>
        </div>

        <HowItWorks />
        <Credits />

        <Modal open={open} onClose={this.onCloseModal} little showCloseIcon styles={styles}>
          <YouTube videoId='IPSbNdBmWKE' onReady={this.setPlayerRef} opts={playerOpts} />
        </Modal>
      </div>
    );
  }

}
