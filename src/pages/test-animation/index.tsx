import { FC } from 'react'
import style from './index.module.less'

const TestAnimation: FC = () => {
  return (
    <div
      style={{
        width: '20px',
        height: '36px',
        color: '#333',
        fontSize: '22px',
        lineHeight: '36px',
        textAlign: 'center',
        border: '1px solid',
      }}
      className={style.scrollNum}
    >
      <ul>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
      <svg width="0" height="0">
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0 2" />
        </filter>
      </svg>
    </div>
  )
}

export default TestAnimation
