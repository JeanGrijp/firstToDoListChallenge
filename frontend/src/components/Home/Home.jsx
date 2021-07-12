import styles from './style.module.scss';
import backIcon from '../../imagens/back.svg'
import logo from '../../imagens/mobile_logo.svg'


export default function Home () {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.containerSon}>
        <div className={styles.upper}>
          <div className={styles.iconAndText}>
            <img src={backIcon} alt="" srcset="" />
            <p>Sair</p>
          </div>
          <h3 className="userName">Olá, userName</h3>
          <div className="statusBarArea">
            <div className={styles.experienceBar}>
              <div class="circular">
                <div class="inner"></div>
                <div class="outer"></div>
                <div class="numb">0%</div>
                <div class="circle">
                  <div class="dot">
                      <span></span>
                  </div>
                  <div class="bar left">
                      <div class="progress"></div>
                  </div>
                  <div class="bar right">
                      <div class="progress"></div>
                  </div>
                </div>
              </div>
            </div>
            <h6>Seu Progresso</h6>
            <p>10/10 tasks feitas</p>
          </div>
        </div>
        <div className="progressStatusContainer">
          <h3>Minhas Tasks</h3>
          <div className="tasksArea">
            <div className="getTask">
              <input type="checkbox" name="" id="" />
              <label htmlFor="taskName"></label>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </>
  );
}
