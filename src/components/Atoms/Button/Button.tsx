import { FC } from 'react'
import { ButtonWrapper } from './Button.styled'

interface ButtonProps {
  text: string
  $color?: string
  $iconSrc?: string
  onClick: () => void
  $outlined?: boolean
  $width?: string
  $backgroundColor?: string
  $disable?: boolean
}
const Button: FC<ButtonProps> = ({
  text,
  $iconSrc,
  onClick,
  $outlined = false,
  $width,
  $backgroundColor = '#0567fa',
  $disable = false,
  $color = '#fff'
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      $outlined={$outlined}
      $width={$width}
      $iconSrc={$iconSrc}
      $backgroundColor={$backgroundColor}
      $disable={$disable}
      $color={$color}
    >
      {$iconSrc && <img src={$iconSrc} alt='icon' />}
      <div className='text'>{text}</div>
    </ButtonWrapper>
  )
}

export default Button
