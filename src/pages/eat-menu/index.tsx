import { FC } from 'react'
import styles from './index.module.less'

const EatMenu: FC = () => {
  return (
    <div className={styles.page}>
      <div>
        <input placeholder="请输入食材" />
        <button>添加</button>
      </div>
      <div className={styles.disc}>
        <div>点击抽奖</div>
      </div>
    </div>
  )
}

export default EatMenu
