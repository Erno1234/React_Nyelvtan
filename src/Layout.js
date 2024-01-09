import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <h1>Tanuljunk angolul</h1>
            </header>
            <nav className="navbar navbar-expand-sm bg-light">

                <div class="container-fluid">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/valaszto" className="nav-link">
                                Választó
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rendez" className="nav-link">
                                Rendez
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gepel" className="nav-link">
                                Gépel
                            </Link>
                        </li>
                    </ul>
                    <h3></h3>
                </div>

            </nav>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;