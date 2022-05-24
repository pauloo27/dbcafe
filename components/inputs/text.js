import styles from '@styles/inputs.module.css'

export default function TextInput({ placeholder, label, type }) {
  return (
    <label className={styles.textInputLabel}>
      {label}
      <input className={styles.textInput} type={type ?? 'text'} placeholder={placeholder} />
    </label>
  )
}
