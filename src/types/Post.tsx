type Cover = {
  data: {
    attributes: {
      name: string;
      alternativeText: string | null,
      caption: string | null,
      url: string;
    };
  };
};

type Post = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content: string;
    url: string;
    cover: Cover;
  };
};

export default Post;
