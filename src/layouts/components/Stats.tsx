const Stats = () => {
    return (
        <div className="page-stats flex flex:center-between pt:_3 pb:_6 px:10">
            <div className="welcome__details w:25">
                <small>Welcome</small>
                <h3>Mychi Darko</h3>
                <h5>Admin</h5>
            </div>
            <div className="details__container flex flex:center-between w:100 position:relative">
                <div className="details">
                    <p className="processed">Processed Orders</p>
                    <h3>34</h3>
                </div>
                <div className="details">
                    <p className="pending">Pending Orders</p>
                    <h3>3</h3>
                </div>
                <div className="details">
                    <p className="total-users">Total Users Registered</p>
                    <h3>300</h3>
                </div>
                <div className="details">
                    <p className="total-amount-sold">Total amount sold</p>
                    <h3 className="amount">GHC 34,987</h3>
                </div>
                <div className="details">
                    <p className="total-amount-bought">Total amount bought</p>
                    <h3 className="amount">GHC 300</h3>
                </div>
                {/* <a href="#" className="position:absolute right:0">View all reports</a> */}
            </div>
        </div>
    );
}
 
export default Stats;