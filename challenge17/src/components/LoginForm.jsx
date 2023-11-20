import useLoginForm from '../hooks/useLoginForm';
import styles from '../styles/Logeo.module.css'
import logo from '../logo.png';

export const LoginForm = () => {
  const {tomarUsuario, tomarContraseña, handleLogin, credencialesInvalidas} = useLoginForm();

  return (
    <>
      <body>
        <h5>Usuario: Santiago</h5>
        <h5>Contraseña: 4321</h5>

        <div className={styles.loginFormContainer}>
          <div className={styles.formGroup}>
            <img src={logo} alt='logo' className={styles.logo} />
            <input
              className={styles.input}
              type='text'
              placeholder='Ingrese su nombre de usuario'
              onChange={(evt) => tomarUsuario(evt)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type='password'
              placeholder='Ingrese su contraseña'
              onChange={(evt) => tomarContraseña(evt)}
            />
          </div>
          {credencialesInvalidas && (
            <p className={styles.errorMessage}>
              Credenciales inválidas, por favor intente de nuevo.
            </p>
          )}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.logInButton}
              type='button'
              onClick={(e) => handleLogin(e)}
            >
              Acceder
            </button>
          </div>
        </div>
      </body>
    </>
  );
};