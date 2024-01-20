import styles from "./Header.module.css"



const Header = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <h1>Super Flash Sale <span>50% Off</span></h1>
        </div>
    </div>
  )
}

export default Header