import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex w-screen items-center justify-between p-7 px-48 shadow-md">
        <Link to="/">
          <button className="font-bold text-lg text-white bg-black p-2 px-8 rounded-md">Feed posts</button>
        </Link>
        <div className="flex justify-between gap-2">
          <Link to="/login">
            <button className="p-2 border-2 border-indigo-700 rounded-md shadow-lg font-semibold">Login</button>
          </Link>
          <Link to="/signup">
            <button className="p-2 border-2 bg-indigo-700 rounded-md text-white font-semibold shadow-md">Create account</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
