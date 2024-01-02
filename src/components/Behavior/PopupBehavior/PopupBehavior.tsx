import React , { FC, memo, useEffect, useRef } from "react";
import ScreenDimmer from "../../Atoms/ScreenDimmer/ScreenDimmer";
import { PopupBehaviorWrapper } from "./PopupBehavior.styled";

export interface PopupBehaviorProps {
  isOpen: boolean;
  children: React.ReactNode;
  closeClick?: () => void;
  $height?: string;
  $width?: string;
}

const PopupBehavior: FC<PopupBehaviorProps> = (props: PopupBehaviorProps) => {
  const PopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (PopupRef.current && !PopupRef.current.contains(event.target as Node)) {
        props.closeClick?.();
      }
    }
    document.onmousedown = handleClickOutside;
    return () => {
      document.onmousedown = null;
    };
  }, [PopupRef, props]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <ScreenDimmer>
      <PopupBehaviorWrapper {...props} className="popup-wrapper" data-testid="PopupBehavior" ref={PopupRef}>
        {props.children}
      </PopupBehaviorWrapper>
    </ScreenDimmer>
  );
};

function areEqual(prevProps: PopupBehaviorProps, nextProps: PopupBehaviorProps) {
  return (
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.closeClick === nextProps.closeClick &&
    prevProps.$height === nextProps.$height &&
    prevProps.$width === nextProps.$width
  );

}

export const MemoizedPopupBehavior = memo(PopupBehavior, areEqual);
export default PopupBehavior;
