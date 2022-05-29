import styles from '@styles/inputs.module.css'
import { forwardRef } from 'react'

export function textInput({
  placeholder, label, type, helper, onChange,
  onEnter,
}, ref) {
  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    onEnter()
  }
  return (
    <label className={styles.textInputLabel}>
      <div className={styles.textInputLabelHelperContainer}>
        {label}
        {helper}
      </div>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={ref}
        className={styles.textInput}
        type={type ?? 'text'}
        placeholder={placeholder}
      />
    </label>
  )
}
const TextInput = forwardRef(textInput)

export default TextInput
