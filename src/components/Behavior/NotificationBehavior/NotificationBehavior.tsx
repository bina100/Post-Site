import React, { FC, memo, useEffect } from "react";
import ScreenDimmer from "../../Atoms/ScreenDimmer/ScreenDimmer";
import { NotificationBehaviorWrapper } from "./NotificationBehavior.styled";

export interface NotificationBehaviorProps {
  isOpen: boolean;
  children: React.ReactNode;
  closeNotification: () => void;
}

const NotificationBehavior: FC<NotificationBehaviorProps> = ({
  isOpen,
  children,
  closeNotification,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        console.log("Delayed");
        closeNotification();
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <ScreenDimmer>
      <NotificationBehaviorWrapper>{children}</NotificationBehaviorWrapper>
    </ScreenDimmer>
  );
};

export const MemoizedPopupBehavior = memo(NotificationBehavior);
export default NotificationBehavior;
