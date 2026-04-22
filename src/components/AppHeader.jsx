export default function AppHeader() {


    return (
        <header>
            {/* NavBar */}        
            <nav className="navbar navbar-expand-md bg-dark-subtle ">
                <div className="container-fluid flex-md-column">
                    {/* NavBar logo */}
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="../../public/imgs/logo.png" alt="" />
                        <img className="main-logo" src="../../public/imgs/main-logo.png" alt="" />
                    </a>

                    {/* Logic for the toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NavBar links */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="#">Top films</a>
                            <a className="nav-link" href="#">Top serie TV</a>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}