import { FC, memo } from "react";
import { HeaderWrapper } from "./Header.styled";

interface HeaderProps {
  openMenu?: () => void;
  $background?: string;
  $height?: string;
  $animationDuration?: number;
  $animationDelay?: number;
}

const Header: FC<HeaderProps> = memo((props) => {
  const { $background, $height } = props;

  const LOGO_ICON = "/icons/logo.svg";

  return (
    <HeaderWrapper
      data-testid="Header"
      $background={$background}
      $height={$height}
    >
      <div className="logo-container">
        <h1 className="logo-text">HORIZON TEAM</h1>
        <img className="logo" src={LOGO_ICON} />
      </div>
    </HeaderWrapper>
  );
});

export default Header;
