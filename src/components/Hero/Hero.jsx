import PropTypes from 'prop-types';
import './Hero.css';
import Wallpaper from '/assets/img/Sneakers-Wallpaper.jpg';

const Hero = ({ title, description }) => {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${Wallpaper})` }}>
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-description">{description}</p>
            </div>
        </div>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Hero;
