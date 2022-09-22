import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/common.module.css'
import pageStyles from '@styles/home.module.css'
import TextInput from '@components/inputs/text'
import Button from '@components/inputs/button'
import Checkbox from '@components/inputs/checkbox'
import { useEffect, useState, useRef } from 'react'
import Title from '@components/partial/title'
import BgInfo from '@components/partial/bg-info'

function forgotPassword() {
  return (
    <Link href="/contact">
      <a>Forgot your password?</a>
    </Link>
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
    <>
      <Head>
        <title>DB Cafe - Login</title>
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <BgInfo>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </BgInfo>
        </div>
        <div className={styles.rightContainer}>
          <Title>
            {
              status === LoginStatus.FAILURE
              && <h3 className={pageStyles.status}>Incorrect email or password</h3>
            }
          </Title>
          <div className={pageStyles.loginForm}>
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
            <Button onClick={handleSubmit} className={pageStyles.loginButton} label="Login" />
            <span>
              Not a member?
              {' '}
              <Link href="/contact">
                <a>Ask for an account</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
