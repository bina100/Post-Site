import { FC, ReactNode, memo } from "react";
import { ScreenDimmerWrapper } from "./ScreenDimmer.styled";

export type ScreenDimmerProps = {
  children?: ReactNode;
};

const ScreenDimmer: FC<ScreenDimmerProps> = memo((props: ScreenDimmerProps) => (
  <ScreenDimmerWrapper data-testid="ScreenDimmer">{props.children}</ScreenDimmerWrapper>
));

export default ScreenDimmer;
