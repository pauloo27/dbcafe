import styles from '@styles/inputs.module.css'

export default function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">{label}</button>
  )
}
