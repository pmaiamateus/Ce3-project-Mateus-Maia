import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './styles/NavbarComponent.css';

const NavbarComponent = () => {
  const history = useHistory();
  const registerPageButton = () => {
    history.push('/cadastrar');
  };

  const updatePageButton = () => {
    history.push('/atualizar');
  };

  return (
    <Container className="navbar-container">
      <Button
        type="button"
        className="btn-bar"
        onClick={ registerPageButton }
      >
        Cadastrar
      </Button>
      <Button
        type="button"
        className="btn-bar"
        onClick={ updatePageButton }
      >
        Atualizar
      </Button>
    </Container>
  );
};

NavbarComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default NavbarComponent;
