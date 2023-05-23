export const metadata = {
  title: "Page no found",
  description: "Page no found",
};

export default function NotFound() {

  return ( 
    <div className="text-center">
      <h1 className="mb-8 text-6xl font-bold text-center text-sky-700">Page not found</h1> 
      <a href="/" className="py-4 px-6 bg-sky-700">to home</a>
    </div>
  )
}
