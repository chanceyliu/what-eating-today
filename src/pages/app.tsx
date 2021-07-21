import { FC } from 'react'
import styles from './app.module.less'
import EatMenu from './eat-menu'
// import TestAnimation from './test-animation'

const App: FC = () => {
  return (
    <div className={styles.page}>
      <EatMenu />
      {/* <TestAnimation /> */}
    </div>
  )
}

export default App
