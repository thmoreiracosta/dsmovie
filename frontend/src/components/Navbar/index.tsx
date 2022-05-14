import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import { ReactComponent as LinkedIn } from 'assets/img/linkedin-logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <Link to="/">
            <h1>ThMovies</h1>
          </Link>
          <div className="dsmovie-social-container">
            <a
              href="https://www.linkedin.com/in/thmoreiracosta/"
              target="_blank"
              rel="nooppener noreferrer"
            >
              <div className="dsmovie-contact-container">
                <LinkedIn />
                <p className="dsmovie-contact-link1">/thmoreiracosta</p>
              </div>
            </a>
            <a href="https://github.com/thmoreiracosta"
            target="_blank"
            rel="nooppener noreferrer"
            >
              <div className="dsmovie-contac-container">
                <GithubIcon />
                <p className="dsmovie-contact-link"> /thmoreiracosta</p>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
