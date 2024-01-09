export default function Navigation() {
  return (
    <nav className="  flex justify-center text-slate-400  mt-3 gap-10 ">
      <a
        href="#"
        className="hover:text-slate-200   border-slate-900 border-b-2 hover:border-b-slate-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:text-slate-200  border-slate-900 border-b-2 hover:border-b-slate-300 "
      >
        About
      </a>
      <a
        href="#project"
        className="hover:text-slate-200   border-slate-900 border-b-2 hover:border-b-slate-300"
      >
        Project
      </a>
    </nav>
  );
}
