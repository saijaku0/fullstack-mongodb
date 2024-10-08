export function Feed() {
  return (
    <div className="bg-white rounded-md shadow-lg">
      <div className="feed-banner">
        <img
          className="w-full h-auto object-cover rounded-t-lg"
          src="https://placehold.co/600x400"
          alt="some feed img"
        />
      </div>
      <main className="p-4">
        <header className="flex gap-3">
          <img
            className="rounded-full"
            src="https://placehold.co/30x30"
            alt="avatar img"
          />
          <div>
            <h2 className="font-bold text-base">Keffir</h2>
            <h3 className="text-xs text-slate-500">Oct 08 2024</h3>{" "}
            {/* Data make feed */}
          </div>
        </header>
        <div className="px-10">
          <h1 className="text-2xl font-extrabold my-2">Some Feed title</h1>
          {/* ToDo: this must be features not a widget */}
          <ul className="flex gap-2 text-slate-500">
            <li>#react</li>
            <li>#some</li>
            <li>#shit</li>
          </ul>
          <footer className="flex my-2 gap-6">
            <div>Views 1</div>
            <div>Comments 1</div>
          </footer>
        </div>
      </main>
    </div>
  );
}
