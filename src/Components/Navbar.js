function Navbar(props){
    console.log(props.mode);
    return(

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.textUtils}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                    </li>            
                </ul>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input " type="checkbox" role="switch" onClick={props.toggleMode}/>
                <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}  >Enable dark mode</label>
            </div>
        </div>
        </nav>
    );
}
export default Navbar;