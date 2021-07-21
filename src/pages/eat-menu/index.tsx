import { FC } from 'react'
import styles from './index.module.less'

const EatMenu: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.lottery}>
        <div className={styles.lotteryContent}>
          <div>
            <input placeholder="请输入食材" />
            <button>添加</button>
          </div>
          <div className={styles.disc}>
            <div>点击抽奖</div>
          </div>
        </div>
      </div>
      {new Array(10).fill('').map((_, index) => (
        <div
          key={index}
          style={{
            width: '10%',
            height: '100vh',
            backgroundColor: index % 2 === 0 ? 'blue' : 'skyblue',
          }}
        >
          1
        </div>
      ))}
    </div>
  )
}

export default EatMenu
