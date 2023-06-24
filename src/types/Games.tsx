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

type Games = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    url: string;
    price: number;
    cover_image: Cover | null;
    quantity: number | undefined;
  };
};

export default Games;
