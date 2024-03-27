import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex relative bg-peach-100">
      <aside className="fixed h-full">
        <Sidebar />
      </aside>

      <main className="w-screen ml-[224px] pb-10">
        <header className="h-14 pt-4 pb-16 border-b-2">
          <Topbar />
        </header>
        <div className="pt-8 px-10">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
