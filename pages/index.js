import styles from '@styles/home.module.css'
import TextInput from '@components/inputs/text'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer} />
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>DB Cafe</h1>
        <h2 className={styles.subtitle}>The best coffee in cyber space</h2>
        <div className={styles.loginForm}>
          <TextInput label="E-mail" placeholder="name@example.com" />
          <TextInput label="Password" type="password" placeholder="********" />
        </div>
      </div>
    </div>
  )
}
