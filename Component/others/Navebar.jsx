import './Navebar.css';
function Navebar() {
    return (
        <>

            {/* 
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-3 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>

*/}








            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">info@example.com
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/app/users">+456 123 7890</a>
                                </li>

                                <li id="span1"></li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/app/comments">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/app/product">Signin
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>



        </>
    )


}


export default Navebar;