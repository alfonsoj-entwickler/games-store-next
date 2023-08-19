import ListPost from "@/components/listPost";
import ListGame from "@/components/listGame";
import Courses from "@/components/courses";

async function getPost() {
  const res = await fetch(`${process.env.API_URL}/post-games/?populate=*`, {
    cache: "no-store",
  });
  return res.json();
}

async function getGames() {
  const res = await fetch(`${process.env.API_URL}/video-games/?populate=*`, {
    cache: "no-store",
  });
  return res.json();
}

async function getCourse() {
  const res = await fetch(`${process.env.API_URL}/Course/?populate=*`);
  return res.json();
}

export default async function Home() {
  // Initiate both requests in parallel
  const postData = getPost();
  const gamesData = getGames();
  const courseData = getCourse();

  // Wait for the promises to resolve
  const [{ data: posts }, { data: games }, { data: course }] =
    await Promise.all([postData, gamesData, courseData]);

  return (
    <>
      <section className="my-20">
        <h1 className="text-6xl font-bold text-center text-sky-700 ">
          Our Games
        </h1>
        {games.length > 0 ? (
          <ListGame items={games.slice(0, 8)} />
        ) : (
          <p className="text-6xl font-bold">Games not found</p>
        )}
      </section>
      {course && Object.keys(course).length > 0 ? (
        <Courses item={course} />
      ) : (
        <p className="text-6xl font-bold">Course not found</p>
      )}
      <section className="my-20">
        <h1 className="text-6xl font-bold text-center text-sky-700 ">
          Our Articles
        </h1>
        {posts.length > 0 ? (
          <ListPost items={posts.slice(0, 4)} />
        ) : (
          <p className="text-6xl font-bold">Articles not found</p>
        )}
      </section>
    </>
  );
}
