import { FC } from 'react'
import styles from './app.module.less'
import EatMenu from './eat-menu'

const App: FC = () => {
  return (
    <div className={styles.page}>
      <EatMenu />
    </div>
  )
}

export default App
