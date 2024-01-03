import { FC, memo } from "react";
import { HeaderWrapper } from "./Header.styled";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../../Atoms/Button/Button";

interface HeaderProps {
  handleAddPost: () => void;
  handleSearchPosts: (res: string) => void;
  $background?: string;
  $height?: string;
  $animationDuration?: number;
  $animationDelay?: number;
}

const Header: FC<HeaderProps> = memo((props) => {
  const { $background, $height } = props;

  const LOGO_ICON = "/icons/logo.svg";
  const ADD_ICON = "/icons/add.svg";

  return (
    <HeaderWrapper $background={$background} $height={$height}>
      <div className="logo-container">
        <h1 className="logo-text">HORIZON TEAM</h1>
        <img className="logo" src={LOGO_ICON} />
      </div>
      <div className="sub-header">
        <SearchBox onChangeSearchValue={props.handleSearchPosts} />
        <Button
          text="הוספת פוסט"
          $backgroundColor="rgba(155,194,253, 1)"
          $color="#0453C8"
          $iconSrc={ADD_ICON}
          onClick={() => props.handleAddPost()}
        ></Button>
      </div>
    </HeaderWrapper>
  );
});

export default Header;
