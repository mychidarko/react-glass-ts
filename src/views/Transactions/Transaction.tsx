import Loader from "@/components/Loader";
import Main from "@/layouts/Main";
import { useGet } from "@/utils/hermes";
import dayjs from "dayjs";
import GlassX from "glassx";
import { useRouteMatch } from "react-router-dom";

const Transaction = () => {
	const { params }: Record<string, any> = useRouteMatch();

	const [res, loadingTrans] = useGet(`/admin/transactions/${params?.id}`, {
		token: GlassX.get("token")
	});

	const transaction = res?.data?.data?.transaction;

	console.log(transaction);

	return (
		<Main page="transaction">
			{loadingTrans && (
				<Loader text="Loading transaction..." />
			)}
			{transaction && (
				<div className="transaction__info flex flex:center-between px:10 py:_6">
					<div className="transaction__data w:50">
						<h3>Order Status</h3>
						<div className="transaction__data__statuses flex flex:center-between mb:_4">
							<div className={`transaction__data__status -pending ${transaction.status === "pending" && "-active"}`}>Pending</div>
							<div className={`transaction__data__status -success ${transaction.status === "success" && "-active"}`}>Processed</div>
							<div className={`transaction__data__status -failed ${transaction.status === "failed" && "-active"}`}>Cancel</div>
						</div>
						<div className="flex flex:center-between mb:_4">
							<div>
								<h3>User sent</h3>
								<p>
									{transaction.local_currency} {transaction.amount}
								</p>
								<small>+ {transaction.local_currency} {transaction.miner_fee} network fee</small>
							</div>
							<div>
								<h3>User is to receive</h3>
								<p>
									${transaction.amount_received_usd} <b>{transaction.currency_name}</b>
								</p>
							</div>
						</div>
						<div className="flex flex:center-between mb:_4">
							<div>
								<h3>Date & Time</h3>
								<p>
									{dayjs(transaction.created_at).format("DD/MM/YYYY HH:mm")}
								</p>
							</div>
							<div>
								<h3>Order #</h3>
								<p>
									{transaction.id}
								</p>
							</div>
						</div>
						<div className="flex flex:center-between mb:_4">
							<div>
								<h3>{transaction.currency_name} address</h3>
								<p>
									{transaction.wallet_address}
								</p>
							</div>
						</div>
					</div>
					<div className="transaction__aside"></div>
				</div>
			)}
		</Main>
	);
};

export default Transaction;
