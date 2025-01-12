import styles from '../Footer/Form.module.css'

const Form = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <div className={styles.layoutf}>
                <h1>Entre em contato</h1>
                <form className={styles.form}>
                    <input type="text" id="name" placeholder='Nome' />
                    <input type="email" id="email" placeholder='Email' />
                    <textarea placeholder='Assunto da mensagem'></textarea>
                    <input className={styles.button} type="button" value="Entrar em Contato" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form