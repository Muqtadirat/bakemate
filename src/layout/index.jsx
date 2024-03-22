import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <aside>
        <Sidebar />
      </aside>

      <main className="flex-1 px-10 py-4">
        <header className="h-14">
          <Topbar />
        </header>
        <div className="mt-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
