import styles from "./Header.module.css"



const Header = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <img src="../../../assets/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Header