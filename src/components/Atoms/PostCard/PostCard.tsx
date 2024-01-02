import { FC } from "react";
import { PostWrapper } from "./PostCard.styled";
import Button from "../Button/Button";

interface PostProps {
  id: number;
  postTitle: string;
  postMessage: string;
  deletePost: (id: number) => void;
  editPost: (id: number) => void;
}
const EDIT_ICON = "/icons/edit.svg";

const Notification: FC<PostProps> = ({
  id,
  postTitle,
  postMessage,
  deletePost,
  editPost,
}) => {
  return (
    <PostWrapper>
      <div className="post-btn">
        <Button
          text="מחיקה"
          onClick={() => deletePost(id)}
          $color="#CA1313"
          $backgroundColor="#F8A0A0"
        />
        <Button
          text="עריכה"
          $iconSrc={EDIT_ICON}
          onClick={() => editPost(id)}
          $backgroundColor="#5cb14e"
        />
      </div>
      <div className="post-text">
        <h2 className="post-title">{postTitle}</h2>
        <p className="post-message">{postMessage}</p>
      </div>
    </PostWrapper>
  );
};

export default Notification;
