import styles from '../Header/Header.module.css'
import Illustra from '../../assets/illustra.png'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.layouth}>
                <div className={styles.disc}>
                    <h1>Encontre os <span>melhores artigos </span> <br/>
                    de programação em um só lugar</h1>
                    <p>Explore o topo da programação em um só lugar! <br/>
                    Seu destino único para dicas e tendências atuais.</p>
                    <div className={styles.article}>
                    <input className={styles.button} type="button" value="Buscar Artigo" />
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={Illustra} alt="Illustra" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header