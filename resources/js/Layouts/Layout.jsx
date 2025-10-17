import { Link, usePage, useForm } from "@inertiajs/react";

const Layout = ({ children }) => {
  const { flash, auth } = usePage().props;
  const { post } = useForm();
  console.log(auth);
  const submit = (e) => {
    e.preventDefault();
    post("/logout");
  };

  return (
    <>
      {flash.message && (
        <div
          id="flash"
          className="asbsolute p-4 text-center bg-green-50 text-green-500 font-bold"
        >
          {flash.message}
        </div>
      )}
      <header>
        <nav>
          <Link href="/">
            <h1>Notes App</h1>
          </Link>

          {auth.user ? (
            <>
              <span className="border-r-2 pr-2 text-white">
                Hi there, {auth.user.name}
              </span>
              <Link preserveScroll className="nav-link" href="/notes">
                All Notes
              </Link>
              <Link preserveScroll className="nav-link" href="/notes/create">
                Create New Note
              </Link>
              <form onSubmit={submit} className="m-0">
                <button className="btn">Logout</button>
              </form>
            </>
          ) : (
            <>
              <Link preserveScroll href="/login" className="btn">
                Login
              </Link>
              <Link preserveScroll href="register" className="btn">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
