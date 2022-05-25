import styles from '@styles/home.module.css'
import TextInput from '@components/inputs/text'
import Button from '@components/inputs/button'

function forgotPassword() {
  return (
    <a href="#">Forgot your password?</a>
  )
}

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer} />
      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>DB Cafe</h1>
          <h2 className={styles.subtitle}>The best coffee in cyber space</h2>
        </div>
        <div className={styles.loginForm}>
          <TextInput label="E-mail" placeholder="name@example.com" />
          <TextInput label="Password" helper={forgotPassword()} type="password" placeholder="********" />
          <Button className={styles.loginButton} label="Login" />
        </div>
      </div>
    </div>
  )
}
