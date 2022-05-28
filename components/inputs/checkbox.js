import React from 'react'
import styles from '@styles/inputs.module.css'

// a custom checkbox input
export default function Checkbox({ label, defaultChecked }) {
  const [checked, setChecked] = React.useState(defaultChecked ?? false)

  return (
    <label className={styles.checkboxContainer}>
      <input onChange={(e) => setChecked(e.target.checked)} checked={checked} type="checkbox" className={styles.checkbox} />
      {label}
    </label>

  )
}
