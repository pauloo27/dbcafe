import BgInfo from '@components/partial/bg-info'
import Title from '@components/partial/title'
import styles from '@styles/common.module.css'
import pageStyles from '@styles/contact.module.css'
import Head from 'next/head'
import Link from 'next/link'

const emailAddr = 'admin@mail.db.cafe'

export default function Contact() {
  return (
    <>
      <Head>
        <title>DB Cafe - Contact Us</title>
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <BgInfo>
            <Link href="/">
              <a>Login</a>
            </Link>
          </BgInfo>
        </div>
        <div className={styles.rightContainer}>
          <Title />
          <h3 className={pageStyles.contentTitle}>Contact us</h3>
          <p className={pageStyles.content}>
            If you have something to say,
            just email it to
            {' '}
            <a href={`mailto:${emailAddr}`} className={pageStyles.emailHighlight}>{emailAddr}</a>
          </p>
          <p className={pageStyles.content}>
            We accept questions,
            feedback and cat memes
          </p>
        </div>
      </div>
    </>
  )
}
