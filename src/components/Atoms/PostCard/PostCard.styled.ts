import styled from "styled-components";

export const PostWrapper = styled.div`
  border-radius: 16px;
  background-color: #fff;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 8px auto;
  .post-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .post-text {
    margin: 12px auto;
    width: 80%;
  }
  .post-title {
    padding: 12px 0px;
    text-align: center;
    font-weight: 400;
  }
  .post-message {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;
