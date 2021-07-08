import styles from './style.module.scss';
import logoDesktop from '../../imagens/desktop_logo.svg'


export default function Home () {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.containerSon}>

        <div className={styles.logoImg}>

          <div className={styles.logo}>
            <h2 className="doIt">do it!</h2>
          </div>

          <div className={styles.containerLogin}>

            <div className={styles.emailArea}>
              <label htmlFor="Email">Email</label>
              <input type="email" name="email"/>
            </div>

            <div className={styles.passwordArea}>
              <label htmlFor="Password">Senha</label>
              <input type="password" name="password"/>
            </div>

            <div className={styles.inputSumbit}>
              <input type="submit" value="Continuar" />
            </div>

          </div>

        </div>

        <div className={styles.img}>
          <img src={logoDesktop} alt="logo" srcset="" />
        </div>


      </div>

    </div>
    </>
  );
}
