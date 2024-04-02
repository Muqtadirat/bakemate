import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex relative">
      <aside className="fixed h-full bg-peach-100">
        <Sidebar />
      </aside>

      <main className="ml-[224px] w-full bg-peach-100 pb-20">
        <header className="h-14 pt-4 pb-16 border-b-2">
          <Topbar />
        </header>
        <div className="pt-4 px-10">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
