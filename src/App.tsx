import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Atoms/Button/Button";
import Popup from "./components/Atoms/Popup/Popup";
import NotificationBehavior from "./components/Behavior/NotificationBehavior/NotificationBehavior";
import PopupBehavior from "./components/Behavior/PopupBehavior/PopupBehavior";
import Header from "./components/Molecules/Header/Header";
import Notification from "./components/Notification/Notification";
import PostCard from "./components/Atoms/PostCard/PostCard";
import {
  addPost,
  deletePost,
  editPost,
  fetchPostData,
  searchPosts,
} from "./components/Action/Action";
import TextCell from "./components/Atoms/TextCell/TextCell";
import SearchBox from "./components/Molecules/SearchBox/SearchBox";

function App() {
  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectPostId, setSelectPostId] = useState(0);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupBtnText, setPopupBtnText] = useState("");
  const [popupBgColor, setPopupBgColor] = useState("#fff");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationColor, setNotificationColor] = useState("#fff");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postsData, setPostsData] = useState<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >([]);
  useEffect(() => {
    fetchPostData().then((res) => setPostsData(res));
  }, []);

  const ADD_ICON = "/icons/add.svg";

  const handleAddPost = () => {
    console.log("hello add post");
    setIsAdd(true);
    setIsOpenPopUp(true);
    setPopupBtnText("אישור");
    setPopupTitle("הוספת פוסט חדש");
    setPopupBgColor("#0453C8");
    setNotificationMessage("הפוסט פורסם בהצלחה");
    setNotificationColor("#7F99C1");
  };
  const handleEditPost = (id: number, title: string, body: string) => {
    console.log("hello edit post");
    setSelectPostId(id);
    setPostTitle(title);
    setPostBody(body);
    setIsEdit(true);
    setIsOpenPopUp(true);
    setPopupBtnText("שמירת שינויים");
    setPopupTitle("עריכת פוסט ");
    setPopupBgColor("#E2BC34");
    setNotificationMessage("שינויים הועלו בהצלחה");
    setNotificationColor("#E0CD88");
  };

  const handleDeletePopUp = (id: number) => {
    setIsDelete(true);
    setSelectPostId(id);
    setIsOpenPopUp(true);
    setPopupTitle("מחיקת פוסט");
    setPopupBtnText("מחק");
    setPopupBgColor("#FF4C4C");
    setNotificationMessage("הפוסט נמחק בהצלחה");
    setNotificationColor("#FE6666");
  };
  const handleBtnPopup = () => {
    if (isDelete) {
      deletePost(selectPostId);
    } else if (isAdd) {
      addPost({ userId: 1, title: postTitle, body: postBody });
    } else if (isEdit) {
      editPost(selectPostId, { userId: 1, title: postTitle, body: postBody });
    }
    setIsOpenNotification(true);
    handleClosePopUp();
  };
  const handleClosePopUp = () => {
    console.log("close popup");
    setPostTitle("");
    setPostBody("");
    setIsDelete(false);
    setIsAdd(false);
    setIsEdit(false);

    setIsOpenPopUp(false);
  };
  const handleCloseNotification = () => {
    console.log("close notification");
    setIsOpenNotification(false);
  };
  const handleSearchPosts = (searchValue: string) => {
    searchPosts(searchValue).then((res) => setPostsData(res));
  };

  return (
    <>
      <Header />
      <div className="section-1">
        <SearchBox onChangeSearchValue={handleSearchPosts} />
        <div className="button-style">
          <Button
            text="הוספת פוסט"
            $backgroundColor="rgba(155,194,253, 1)"
            $color="#0453C8"
            $iconSrc={ADD_ICON}
            onClick={handleAddPost}
          ></Button>
        </div>
      </div>
      <div className="posts">
        {postsData.map((post) => (
          <PostCard
            key={post.id}
            postTitle={post.title}
            postMessage={post.body}
            id={post.id}
            deletePost={() => handleDeletePopUp(post.id)}
            editPost={() => handleEditPost(post.id, post.title, post.body)}
          />
        ))}
      </div>

      {isOpenPopUp && (
        <PopupBehavior isOpen={true}>
          <Popup
            closelick={() => handleClosePopUp()}
            $backgroundHeader={popupBgColor}
            title={popupTitle}
            cancelButton={
              <Button
                text="ביטול"
                onClick={() => handleClosePopUp()}
                $backgroundColor="transparent"
                $color="#0567FA"
              />
            }
            submitButton={
              <Button text={popupBtnText} onClick={() => handleBtnPopup()} />
            }
          >
            {isDelete && <p>הנך בטוח שתרצה למחוק את הפוסט?</p>}
            {(isAdd || isEdit) && (
              <div>
                <TextCell
                  label={{ title: "כותרת" }}
                  onChange={(e) => setPostTitle(e)}
                  text={postTitle}
                  $cols={60}
                  $rows={2}
                />
                <TextCell
                  label={{ title: "טקסט" }}
                  onChange={(e) => setPostBody(e)}
                  text={postBody}
                  $cols={60}
                  $rows={5}
                />
              </div>
            )}
          </Popup>
        </PopupBehavior>
      )}

      {isOpenNotification && (
        <NotificationBehavior
          closeNotification={handleCloseNotification}
          isOpen={isOpenNotification}
        >
          <Notification
            message={notificationMessage}
            $backgroundColor={notificationColor}
          />
        </NotificationBehavior>
      )}
    </>
  );
}

export default App;
