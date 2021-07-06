import dayjs from "dayjs";
import GlassX from "glassx";
import { Link } from "glass-router";
import Main from "@/layouts/Main";
import { useGet } from "@/utils/hermes";
import Loader from "@/components/Loader";

const Dashboard = () => {
	const [res, loadingTrans] = useGet("/admin/transactions?limit=4", {
		token: GlassX.get("token"),
		refresh: 30000,
	});

	const transactions = res?.data?.data?.transactions;

	console.log(res?.data, transactions);

	return (
		<Main page="dashboard">
			<div className="flex flex:center-between px:10 py:_6">
				<div className="dashboard__transactions w:60">
					<div
						className="dashboard__transactions__title flex flex:center-between"
					>
						<h3>Recent Transactions</h3>
						<Link to={{ name: "transactions" }}>View all</Link>
					</div>
					<div className="dashboard__transactions__body mt:_2">
						{loadingTrans && <Loader text="Loading Transactions" />}
						{transactions && (transactions?.length !== 0) ? transactions.map((transaction: any) => (
							<Link
								to={`/transactions/${transaction.id}`}
								key={transaction.id}
								className="dashboard__transactions__transaction list-card cursor:pointer mt:_1 px:_2 py:_3 flex flex:center-between"
							>
								<div>
									<span style={{ textTransform: "capitalize" }}>{transaction.type}ing</span>{" "}
									<b>
										${transaction?.amount_usd}
									</b>
								</div>
								<div>{transaction.currency_name}</div>
								<div>#{transaction.id}</div>
								<small>{dayjs(transaction.created_at).format("DD/MM/YYYY")}</small>
								<div className={`status -${transaction.status?.toLowerCase()}`}></div>
							</Link>
						)): (
							<div className="empty">
								No Transactions
							</div>
						)}
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
