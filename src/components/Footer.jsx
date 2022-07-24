import React from 'react';
import GithubIcon from '../images/github_icon.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__imagelink">
      <a href="https://github.com/wnyao/tic-tac-toe">
        <img src={GithubIcon} alt="GitHub Inc." width="24" height="24" />
      </a>
    </div>
  </footer>
);

export default Footer;
