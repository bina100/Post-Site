import { FC, ReactNode } from 'react'
import { PopupWrapper } from './Popup.styled'

interface PopupProps {
  title: string
  children?: ReactNode
  closelick?: () => void
  submitButton?: ReactNode
  cancelButton?: ReactNode
  descriptionTitle?: string
  $colorTextHeader?: string
  $backgroundHeader?: string
  $backgroungCloseButton?: string
}

const Popup: FC<PopupProps> = ({
  title,
  children,
  closelick,
  cancelButton,
  submitButton,
  $colorTextHeader,
  descriptionTitle,
  $backgroundHeader,
  $backgroungCloseButton
}) => {
  return (
    <PopupWrapper $backgroundHeader={$backgroundHeader} $colorTextHeader={$colorTextHeader} $backgroungCloseButton={$backgroungCloseButton}>
      <div className='popup-header'>
        <div className='popup-title-header'>
          <p className='popup-title'>{title}</p>
          {descriptionTitle && <p className='popup-description-title'>{descriptionTitle}</p>}
        </div>
        <div className={$backgroungCloseButton ? 'background-close-button' : 'popup-button-close'}>
          <img src='/icons/close.svg' onClick={closelick} />
        </div>
      </div>

      <div className='popup-content'>{children}</div>
      <div className='popup-footer'>
        <span className='cancel-button'>{cancelButton && cancelButton}</span>
        <span className='submit-button'>{submitButton && submitButton}</span>
      </div>
    </PopupWrapper>
  )
}

export default Popup
