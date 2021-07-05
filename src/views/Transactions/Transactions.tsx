import Loader from "@/components/Loader";
import Main from "@/layouts/Main";
import { useGet } from "@/utils/hermes";
import dayjs from "dayjs";
import { Link } from "glass-router";
import GlassX from "glassx";

const Transactions = () => {
	const [res, loadingTrans] = useGet("/admin/transactions", {
		token: GlassX.get("token")
	});

	const transactions = res?.data?.data?.transactions;

	console.log(transactions, res?.data)

	return (
		<Main page="transactions">
			<div className="flex flex:center-between px:10 py:_6 transactions__wrapper">
                {loadingTrans && <Loader text="Loading Transactions" />}
                {transactions && (transactions?.length !== 0) ? transactions.map((transaction: any) => (
                    <Link
                        to={`/transactions/${transaction.id}`}
                        key={transaction.id}
                        className="
                            dashboard__transactions__transaction
                            list-card cursor:pointer mt:_1 px:_2 py:_3
                            flex flex:center-between
                        "
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
                )) : (
                    <div className="empty">
                        No Transactions
                    </div>
                )}
			</div>
		</Main>
	);
};

export default Transactions;
