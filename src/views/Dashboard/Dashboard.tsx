import { Link } from "glass-router";
import Main from "@/layouts/Main";

const Dashboard = () => {
	return (
		<Main page="dashboard">
			<div className="flex flex:center-between px:10 py:_6">
				<div className="dashboard__transactions w:40">
					<div
						className="dashboard__transactions__title flex flex:center-between"
					>
						<h3>Recent Transactions</h3>
						<Link to={{ name: "transactions" }}>View all</Link>
					</div>
					<div className="dashboard__transactions__body mt:_2">
						<Link
							to={`/transactions/${"1"}`}
							className="dashboard__transactions__transaction list-card cursor:pointer mt:_1 px:_2 py:_3 flex flex:center-between"
						>
							<div>Buying <b>$500</b></div>
							<div>Doge</div>
							<div>#3456B</div>
							<small>06/5/21</small>
							<i className="fas fa-circle"></i>
						</Link>
					</div>
				</div>
				<div className="dashboard__rates">
					Rates
				</div>
			</div>
		</Main>
	);
};

export default Dashboard;
