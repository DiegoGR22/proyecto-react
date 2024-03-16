import SneakHeavenLogo from '/assets/img/SneakHeaven.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const iconSize = {
    fontSize: '1.5em',
}

const Footer = () => {
    return (

        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© 2024 By Diego Guerrero</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img className="bi " src={SneakHeavenLogo} style={{ width: '70px', height: '70px' }}></img>
                </a>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebookSquare style={iconSize}/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/diegoguerrero02/" target='blank'><FaLinkedin style={iconSize}/></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://github.com/DiegoGR22" target='blank'><FaGithubSquare style={iconSize}/></a></li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer
