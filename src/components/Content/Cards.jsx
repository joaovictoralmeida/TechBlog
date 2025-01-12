import styles from '../Content/Cards.module.css'

function Cards({img, text, title})  {
  return (
    <div className={styles.card}>
        <div className={styles.bg}>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.disc}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>

    </div>
  )
}

export default Cards