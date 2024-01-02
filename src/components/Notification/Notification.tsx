import { FC } from "react";
import { NotificationWrapper } from "./Notification.styled";

interface NotificationProps {
  message: string;
  $backgroundColor?: string;
  $colorText?: string;
}

const Notification: FC<NotificationProps> = ({
  message,
  $backgroundColor,
  $colorText,
}) => {
  return (
    <NotificationWrapper
      $backgroundColor={$backgroundColor}
      $colorText={$colorText}
    >
      <p className="notification-message">{message}</p>
    </NotificationWrapper>
  );
};

export default Notification;
