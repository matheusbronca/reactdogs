import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import Error from '../../components/Helper/Error';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../../components/Forms/Button.module.css';
import Head from '../../components/Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button onClick={handleSubmit}>Entrar</Button>
        )}

        {error && <Error error={error} />}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subTitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
