import React from 'react';
import { Footer, SocialMedia } from './styled';
import git from './../../assets/git.png';
import linkedIn from './../../assets/linkedIn.png';

class FooterComponent extends React.Component {

  render() {
    return <>
      <SocialMedia>Acompanhem nossas redes<br />
        <a href="https://www.linkedin.com/in/willamys-ara%C3%BAjo-01bb14205/"><img src={linkedIn} alt="LinkedIn" width="60px" /></a>
        <a href="https://github.com/willamys/"><img src={git} alt="GitHub" width="60px" /></a><br />
      </SocialMedia>
      <Footer>Desenvolvido por Willamys Araújo</Footer>
    </>
  }
}

export default FooterComponent;