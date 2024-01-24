// import React from 'react';
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'; // Importar estilos desde un archivo externo

const ItemListContainer = ({ greeting }) => {
    return (
        <Container className="custom-container mt-4">
            <div className="custom-content">
                <h2 className="custom-heading">Bienvenido</h2>
                <p className="custom-paragraph">{greeting}</p>
            </div>
        </Container>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
}

export default ItemListContainer;
