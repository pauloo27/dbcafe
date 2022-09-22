import styles from '@styles/common.module.css'

export default function Title({ children }) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>DB Cafe</h1>
      <h2 className={styles.subtitle}>The best coffee in cyber space</h2>
      {children}
    </div>
  )
}
