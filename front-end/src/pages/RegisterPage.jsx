import React, { useState, useEffect } from 'react';
import { Form, Button, FloatingLabel, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../services/API';
// import './styles/RegisterPage.css';

const RegisterPage = () => {
  const history = useHistory();
  const [inputsState, setInputsState] = useState({
    prontuario: '',
    nome: '',
    sobrenome: '',
    dataDeNascimento: '',
    genero: '',
    cpf: '',
    rg: '',
    rgUf: '',
    email: '',
    celular: '00000000000',
    telefoneFixo: '00000000000',
    convenio: '',
    carteirinhaDoConvenio: '',
    validadeDaCarteirinha: '',
  });
  const [userAlreadyExists, setUserExists] = useState('hidden');
  const [userRegistered, setuserRegistered] = useState('hidden');
  const inputsChangeHandler = ({ target: { name, value } }) => {
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const registerButton = async () => {
    const data = inputsState;
    if(data.cpf.length <= 11) {
      delete data.dataDeNascimentoInput
      const newUser = await API('register', data);
      if (newUser === 'error') {
        setUserExists('visible');
      }
      if (newUser !== 'error') {
        setuserRegistered('visible');
      }
    }
  };
  useEffect(() => {
    setUserExists('hidden')
    setuserRegistered('hidden')
  }, [inputsState]);

  return (
    <Container className="register-container">
      <h1>Cadastro</h1>
      <div>
        <h2
          style={ { visibility: userAlreadyExists } }
          data-testid="common_register__element-invalid_register"
        >
          Usuário já existe ou dados inválidos
        </h2>
      </div>
      <div>
        <h2
          style={ { visibility: userRegistered } }
          data-testid="common_register__element-invalid_register"
        >
          Registrado!
        </h2>
      </div>
      <Form>
        <label>
          Prontuário
          <input 
            type='text'
            name='prontuario'
            onChange={ inputsChangeHandler }
            value={ inputsState.prontuario }
          />
        </label>
        <label>
          Nome
          <input 
            type='text'
            name='nome'
            onChange={ inputsChangeHandler }
            value={ inputsState.nome }
          />
        </label>
        <label>
          Sobrenome
          <input 
            type='text'
            name='sobrenome'
            onChange={ inputsChangeHandler }
            value={ inputsState.sobrenome }
          />
        </label>
        <label>
          Data de nascimento
          <input 
            type='date'
            name='dataDeNascimento'
            onChange={ inputsChangeHandler }
            value={ inputsState.dataDeNascimento }
          />
        </label>
        <label>
          Gênero
          <select 
            type='text'
            name='genero'
            onChange={ inputsChangeHandler }
            value={ inputsState.genero }
          >
            <option value=""></option>
            <option value="masculino">masculino</option>
            <option value="feminino">feminino</option>
          </select>
        </label>
        <label>
          CPF (apenas numeros)
          <input 
            type='text'
            name='cpf'
            onChange={ inputsChangeHandler }
            value={ inputsState.cpf }
          />
        </label>
        <label>
          RG (apenas numeros)
          <input 
            type='text'
            name='rg'
            onChange={ inputsChangeHandler }
            value={ inputsState.rg }
          />
        </label>
        <label>
          UF do RG
          <select 
            type='text'
            name='rgUf'
            onChange={ inputsChangeHandler }
            value={ inputsState.rgUf }
          >
            <option value=""></option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </label>
        <label>
          email
          <input 
            type='email'
            name='email'
            onChange={ inputsChangeHandler }
            value={ inputsState.email }
          />
        </label>
        <label>
          Celular (com DDD)
          <input 
            type='number'
            name='celular'
            onChange={ inputsChangeHandler }
            value={ inputsState.celular }
          />
        </label>
        <label>
          Telefone Fixo (com DDD)
          <input 
            type='number'
            name='telefoneFixo'
            onChange={ inputsChangeHandler }
            value={ inputsState.telefoneFixo }
          />
        </label>
        <label>
          Nome do Convênio
          <input 
            type='text'
            name='convenio'
            onChange={ inputsChangeHandler }
            value={ inputsState.convenio }
          />
        </label>
        <label>
          Carteirinha do Convênio
          <input 
            type='text'
            name='carteirinhaDoConvenio'
            onChange={ inputsChangeHandler }
            value={ inputsState.carteirinhaDoConvenio }
          />
        </label>
        <label>
        Validade da Carteirinha
          <input 
            type='date'
            name='validadeDaCarteirinha'
            onChange={ inputsChangeHandler }
            value={ inputsState.validadeDaCarteirinha }
          />
        </label>
        <div>
          <Button
            variant="success"
            type="button"
            size="lg"
            onClick={ registerButton }
            data-testid="common_register__button-register"
          >
            CADASTRAR
          </Button>
        </div>
      </Form>
    </Container>
  );
};

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default RegisterPage;
