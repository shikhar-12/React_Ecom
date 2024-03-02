import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

function Header() {
    const { user, loading } = useSelector((state) => state.user)
    console.log(user)
    const { cartItem } = useSelector((state) => state.cart)
    // console.log()
    const hola = useDispatch()
    const history = useNavigate()
    const alert = useAlert()
    // console.log(loading)

    const handleLogout = () => {
        hola(Logout())
        alert.success('logout success')
    }
    return (
        <>
            <div className="container-fluid">
                {/* 1st navbar */}
                <div className="row px-0 bg-body-secondary">
                    <div className="col d-none d-lg-block">
                        <ul className="nav nav-underline" >
                            <li className="nav-item ">
                                <a className="nav-link  link-secondary" href="/#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/#">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="nav justify-content-md-center justify-content-sm-center justify-content-lg-end">
                            {user ? (
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        {user && user.name}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ height: "18px", width: "18px", borderRadius: "100%", marginLeft: "20px" }} className="rounded-circle" src={user.image && user.image.url} alt="user" />
                                            <span className="dropdown-item">{user && user.name}</span>
                                            <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                            {user & user.role !== "admin" ?
                                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                                : (<Link className="dropdown-item" to="/ShoppingCart">Dashboard</Link>)}
                                            <Link className="dropdown-item" to="/profile">Profile</Link>
                                            <Link className="dropdown-item text-danger" to="/" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (loading && (<Link className="btn btn-success" to="/login">LogIn</Link>))}
                            {/* <li className="nav-item dropdown">
                                <a className="dropdown-toggle text-dark bg-white nav-link" data-bs-toggle="dropdown" href="/#">My Account</a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/signup">Register</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item  d-lg-none  d-md-block d-sm-block"  >
                                <a className="nav-link text-dark" href="/#"><i className="fa-solid fa-heart"></i></a>
                            </li>
                            <li className="nav-item d-lg-none  d-md-block d-sm-block">
                                <a className="text-dark" href="/#"><i className="fa-brands fa-creative-commons-zero"></i></a>
                            </li>
                            <li className="nav-item  d-lg-none  d-md-block d-sm-block">
                                <a className="nav-link text-dark" href="/#"><i className="fa-solid fa-cart-shopping"></i></a>
                            </li>
                            <li className="nav-item d-lg-none  d-md-block d-sm-block">
                            </li>
                        </ul>

                    </div>
                </div>
                {/* 2nd navbar */}
                <div className="d-none d-lg-block">
                    <form className="row bg-white">
                        <div className="col-4 ">
                            <Link to="/"><img src="/images/pnlogo.png" alt="logo here"></img></Link>
                        </div>
                        <div className="col-4">
                            <div className="input-group mt-3">
                                <input type="text" className="form-control border border-warning" placeholder="Search Products..." />
                                <span className="input-group-text">
                                    <a className="text-warning" href="/#"><i className="fa-solid fa-magnifying-glass"></i></a>
                                </span>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className=" my-0 text-muted text-center ">Customer Service</p>
                            <p className=" my-0 h4  text-center ">+012 345 6789</p>
                        </div>
                    </form>
                </div>
            </div>
            {/* 3rd navbar */}
            <nav className="navbar py-0 navbar-expand-lg navbar-dark bg-dark">
                <div className="ms-5 bg-warning d-none d-lg-block">
                    <ul>
                        <button className="btn me-5 mt-3 dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-bars mr-2"></i>
                            <h6 className="ms-2 d-inline">Categories</h6>
                        </button>
                        <ul className="dropdown-menu ">
                            <li className="dropend"><a className="dropdown-toggle dropdown-item" data-bs-toggle="dropdown" href="/#">Dresses</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Men's Dresses</a></li>
                                    <li><a className="dropdown-item" href="/#">Women's Dresses</a></li>
                                    <li><a className="dropdown-item" href="/#">Baby's Dresses</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item" href="/#">Shirts</a></li>
                            <li><a className="dropdown-item" href="/#">Jeans</a></li>
                            <li><a className="dropdown-item" href="/#">Swimwear</a></li>
                            <li><a className="dropdown-item" href="/#">Sleepwear</a></li>
                            <li><a className="dropdown-item" href="/#">Sportswear</a></li>
                            <li><a className="dropdown-item" href="/#">Jumpsuits</a></li>
                            <li><a className="dropdown-item" href="/#">Blazers</a></li>
                            <li><a className="dropdown-item" href="/#">Suits</a></li>
                        </ul>
                    </ul>
                </div>
                <div className="container-fluid py-3">
                    <li className="list-unstyled d-lg-none ">
                        <Link className="text-decoration-none" to="/">
                            <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                            <span className="h1 text-uppercase text-light bg-warning px-2 ml-n1">Shop</span>
                        </Link>
                    </li>
                    <button className="navbar-toggler ms-auto " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/Shop">Shop</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/ShopDetail">ShopDetail</Link></li>
                            <li className="nav-item dropdown"><a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/#">Pages</a>
                                <ul className="dropdown-menu bg-warning">
                                    <li><Link className="dropdown-item" to="/ShoppingCart">Shopping Cart</Link></li>
                                    <li><Link className="dropdown-item" to="/CheckOut">CheckOut</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-white" href="/Contact">Contact</Link></li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {user ? <Link to='/ShoppingCart' className="nav-link text-warning"><i className="fa-solid fa-cart-shopping"></i></Link>
                                : <Link to='/' className="nav-link text-warning"><i className="fa-solid fa-cart-shopping"></i></Link>}

                            <li className="nav-item d-none d-lg-block ">
                                {user ? cartItem ?
                                    <span className="text-white">{cartItem.length}</span> : <p className="text-white">0</p>
                                    : <p className="text-white">0</p>}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;