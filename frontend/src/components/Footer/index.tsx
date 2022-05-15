import React from 'react'

import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a target="_blank" href="https://www.instagram.com/devsuperior.ig/">
          <FaInstagram size="30" />
        </a>
        <a target="_blank" href="https://www.youtube.com/c/DevSuperior">
          <FaYoutube size="30" />
        </a>
      </div>
      <a target="_blank" href="https://devsuperior.com.br/">
        <img src="https://devsuperior.com.br/_next/static/images/logo-white-10059e26f600604a7b5bd7782ed7550c.svg" />{' '}
      </a>
      <p className="footer__copyright">
        Professor Nélio Alves - Copyright © 2022 - Desenvolvido por Thiago Costa
        - #SemanaSpringReact da DevSuperior - Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
