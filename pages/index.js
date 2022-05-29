import styles from '@styles/home.module.css'
import TextInput from '@components/inputs/text'
import Button from '@components/inputs/button'
import Checkbox from '@components/inputs/checkbox'
import { useEffect, useState, useRef } from 'react'

function forgotPassword() {
  return (
    <a href="#">Forgot your password?</a>
  )
}

const LoginStatus = {
  NULL: 'NULL',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export default function Home() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [status, setStatus] = useState(LoginStatus.NULL)

  useEffect(() => {
    if (status === LoginStatus.SUCCESS) {
      window.location.href = 'https://mail.db.cafe/webmail'
    }
  }, [status])

  const handleSubmit = () => {
    setStatus(LoginStatus.PENDING)
    const url = 'https://mail.db.cafe/sso/login'
    const data = new FormData()
    data.append('email', emailRef.current.value)
    data.append('pw', passwordRef.current.value)
    data.append('submitWebmail', 'Sign in Webmail')
    fetch(url, { method: 'POST', body: data }).then((res) => {
      setStatus(res.status === 200 && res.redirected ? LoginStatus.SUCCESS : LoginStatus.FAILURE)
    })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <a href="#">Contact us</a>
        <a target="_blank" href="https://unsplash.com/photos/eQu4HfK53lk" rel="noreferrer">
          Photo by Naveen Prajapat on Unsplash
        </a>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>DB Cafe</h1>
          <h2 className={styles.subtitle}>The best coffee in cyber space</h2>
          {
            status === LoginStatus.FAILURE
            && <h3 className={styles.status}>Incorrect email or password</h3>
          }
        </div>
        <div className={styles.loginForm}>
          <TextInput
            ref={emailRef}
            label="E-mail"
            placeholder="name@example.com"
          />
          <TextInput
            ref={passwordRef}
            label="Password"
            onEnter={handleSubmit}
            helper={forgotPassword()}
            type="password"
            placeholder="********"
          />
          <Checkbox label="Remember-me" />
          <Button onClick={handleSubmit} className={styles.loginButton} label="Login" />
          <span>
            Not a member?
            {' '}
            <a href="#">Ask for an account</a>
          </span>
        </div>
      </div>
    </div>
  )
}
