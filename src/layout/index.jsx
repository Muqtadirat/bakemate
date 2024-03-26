import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-snow ">
      <aside>
        <Sidebar />
      </aside>

      <main className=" w-screen ">
        <header className="h-14 pt-4 pb-16 border-b-2">
          <Topbar />
        </header>
        <div className="pt-8 px-10">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
