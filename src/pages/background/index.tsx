import { FC, useMemo } from 'react'
import styles from './index.module.less'
import cherry from '@/assets/icons/cherry.png'
import corn from '@/assets/icons/corn.png'
import kiwi from '@/assets/icons/kiwi.png'
import lemon from '@/assets/icons/lemon.png'
import meat from '@/assets/icons/meat.png'
import potato from '@/assets/icons/potato.png'
import radish from '@/assets/icons/radish.png'
import shrimp from '@/assets/icons/shrimp.png'
import turkey from '@/assets/icons/turkey.png'
import watermelon from '@/assets/icons/watermelon.png'

const Index: FC = () => {
  const BG_COLUMN = 14
  const iconList = [cherry, corn, kiwi, lemon, meat, potato, radish, shrimp, turkey, watermelon]

  const iconSize = useMemo(() => {
    const bgWidth = window.innerWidth / BG_COLUMN
    const res = Math.floor(bgWidth * 0.8)
    return res
  }, [])

  const iconNumber = useMemo(() => {
    return Math.ceil(window.innerHeight / (iconSize + 10))
  }, [iconSize])

  return (
    <>
      {new Array(BG_COLUMN).fill('').map((_, parentIndex) => (
        <div
          key={parentIndex}
          className={styles.columns}
          style={{
            width: `${100 / BG_COLUMN}%`,
            height: '100vh',
            backgroundColor: parentIndex % 2 === 0 ? 'rgb(198, 124, 136)' : 'pink',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {new Array(iconNumber + 3).fill('').map((_, childIndex) => (
            <img
              key={childIndex}
              width={iconSize}
              src={
                iconList[
                  parentIndex >= iconList.length ? parentIndex % iconList.length : parentIndex
                ]
              }
              style={{ padding: '5px 0 5px 0' }}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default Index
