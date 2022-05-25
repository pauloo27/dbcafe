import styles from '@styles/inputs.module.css'
import cn from 'classnames'

export default function Button({ label, onClick, className }) {
  return (
    <button className={cn(styles.button, className)} onClick={onClick} type="button">{label}</button>
  )
}
