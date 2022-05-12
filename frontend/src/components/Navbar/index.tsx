import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href="https://thmoreiracosta.netlify.app/"><h1>ThMovies</h1></a>
                        <a href="https://github.com/thmoreiracosta">
                            <div className="dsmovie-contac-container">
                                <GithubIcon />
                            <p className="dsmovie-contact-link"> /thmoreiracosta</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;