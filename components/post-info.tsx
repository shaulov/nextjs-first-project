import Heading from "./heading";
import { PostData } from "../types/post-data";

type PostInfoProps = {
  post: PostData,
}

const PostInfo = ({ post }: PostInfoProps) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;