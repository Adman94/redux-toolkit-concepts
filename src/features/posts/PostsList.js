import { useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";

import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={`${nanoid()}${postId}`} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
