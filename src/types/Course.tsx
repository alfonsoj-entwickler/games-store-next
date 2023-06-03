type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null,
      caption: string | null,
      url: string;
    };
  };
};

type Course = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content: string;
    image: Image;
  };
};

export default Course;
