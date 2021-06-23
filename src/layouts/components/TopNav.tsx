const TopNav = () => {
    return (
        <nav className="topnav flex pt:_4 pb:_3 px:10">
            <div className="logo w:25">
                <b>Simple</b>coins
            </div>

            <div className="topnav__content flex flex:center-all w:100">
                <div>Home</div>
                <div className="ml:_3">Search</div>
                <div style={{ flex: 100 }}></div>
                <button>Logout</button>
            </div>
        </nav>
    );
}
 
export default TopNav;