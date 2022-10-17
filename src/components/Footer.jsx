import React from 'react';
import '../styles/Footer.css';
import Trybe from './trybe.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="flexFooter">
        <div className="flexFooterItems">
          <a href="https://www.linkedin.com/in/sugai/" target="_blank" rel="noreferrer" title="Clique aqui para visitar meu LinkedIn">André Sugai</a>
          <a href="https://www.linkedin.com/in/fabiano-desouza/" target="_blank" rel="noreferrer" title="Clique aqui para visitar meu LinkedIn">Fabiano de Souza</a>
          <a href="https://www.linkedin.com/in/leonardo-sleite/" target="_blank" rel="noreferrer" title="Clique aqui para visitar meu LinkedIn">Leonardo Leite</a>
          <a href="https://www.linkedin.com/in/talita-saez-Dev-Full-Stack/" target="_blank" rel="noreferrer" title="Clique aqui para visitar meu LinkedIn">Talita Saez</a>
          <a href="https://www.linkedin.com/in/valeria-menezes-dev-web-full-stack/" target="_blank" rel="noreferrer" title="Clique aqui para visitar meu LinkedIn">Valéria Menezes</a>
        </div>
        <div className="fundoFooterTopo">
          <div className="trybe">
            <a href="https://app.betrybe.com/" target="_blank" rel="noreferrer"><img src={ Trybe } alt="Trybe Logo" /></a>
          </div>
          <h3 className="grupo">
            - Grupo 6 | Turma 24 Tribo B | Projeto Trívia | Outubro de 2022
          </h3>
        </div>
      </div>
    );
  }
}

export default Footer;
