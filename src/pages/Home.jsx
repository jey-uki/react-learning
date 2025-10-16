import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 mb-3 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={"/about"}>About</Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            this is about page ragring our company
          </p>
        </div>
      </div>

      <div className="flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            <Link to={"/contact"}>Contact</Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            this is contact ragring our company
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
