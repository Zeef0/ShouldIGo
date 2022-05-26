import "./Navbar.scss";

function Navbar()  {

    const x = fetch("")
    return (
            <div className="container">
                <nav>
                    <h1 className="nav-logo">My Logo</h1>
                    <ul className="nav-list">
                        <li className="nav-item"><a href= "/">Home</a></li>
                        <li className="nav-item"><a href="/">About</a></li>
                        <li className="nav-item"><a href="/">Preferences</a></li>
                    </ul>
                </nav>
            </div>
            
        
    );
}


export default Navbar