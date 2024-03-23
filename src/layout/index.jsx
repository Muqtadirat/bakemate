import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <aside>
        <Sidebar />
      </aside>

      <main className=" w-screen ">
        <header className="h-14 pt-4 pb-16 border-b-2">
          <Topbar />
        </header>
        <div className="pt-8 px-10 bg-[#FBF8F8]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
