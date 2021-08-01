import { FC, useCallback, useRef, useState } from 'react'
import styles from './index.module.less'
import BackgroundAnimation from '../background'

const EatMenu: FC = () => {
  const [data, setData] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = useCallback(() => {
    if (inputRef.current) {
      if (data.indexOf(inputRef.current.value) === -1) {
        setData([...data, inputRef.current.value])
      }
      inputRef.current.value = ''
    }
  }, [data])

  const test = (e: any) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.lottery}>
        <div className={styles.lotteryContent}>
          <div>
            <input placeholder="请输入食材" ref={inputRef} onKeyPress={test} />
            <button onClick={handleAdd}>添加</button>
          </div>
          <div className={styles.disc}>
            <div>点击抽奖</div>
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </div>
  )
}

export default EatMenu
