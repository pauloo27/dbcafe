import styles from '@styles/inputs.module.css'

export default function TextInput({
  placeholder, label, type, helper,
}) {
  return (
    <label className={styles.textInputLabel}>
      <div className={styles.textInputLabelHelperContainer}>
        {label}
        {helper}
      </div>
      <input className={styles.textInput} type={type ?? 'text'} placeholder={placeholder} />
    </label>
  )
}
