import React from 'react'

import { FaHeart } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a target="_blank" href="https://www.instagram.com/devsuperior.ig/">
          <FaInstagram size="30" color="#fff" />
        </a>
        <a target="_blank" href="https://www.youtube.com/c/DevSuperior">
          <FaYoutube size="35" color="#fff" />
        </a>
      </div>

      <p className="footer__copyright">
        Copyright © 2022 - Desenvolvido por Thiago Costa - #SemanaSpringReact da
        DevSuperior - Todos os direitos reservados.{' '}
        <img src="https://devsuperior.com.br/_next/static/images/logo-white-10059e26f600604a7b5bd7782ed7550c.svg" />{' '}
        <a href="https://devsuperior.com.br/"> - Professor Nélio Alves</a>
      </p>
    </footer>
  )
}

export default Footer
