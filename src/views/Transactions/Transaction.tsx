import dayjs from "dayjs";
import GlassX from "glassx";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { hermes, useGet } from "@/utils/hermes";
import { useForm, Form } from "@/components/Form";
import Loader from "@/components/Loader";
import Main from "@/layouts/Main";
import Button from "@/components/Button";

const Transaction = () => {
	const { params }: Record<string, any> = useRouteMatch();
	const [transaction, setTransaction] = useState<any>(null);

	const [res, loadingTrans] = useGet(`/admin/transactions/${params?.id}`, {
		token: GlassX.get("token")
	});

	useEffect(() => {
		const data = res?.data?.data?.transaction;
		setTransaction(data);
	}, [res?.data?.data?.transaction]);

	const form = useForm({
		fields: {
			link: transaction?.blockchain_link,
		},
	});

	const { onBlur, onChange, errors, inputState } = form;

	const changeLink = (e: any) => {
		e.preventDefault();
		updateState({ blockchain_link: inputState.link });
	};

	const updateState = (state: Record<string, any>) => {
		console.log(state);

		hermes({
			url: `/admin/transactions/${transaction.id}/update`,
			method: "POST",
			token: GlassX.get("token"),
			data: state
		}).then((res) => {
			console.log(res.data);

			if (res.data.data) {
				setTransaction({
					...transaction,
					...state,
				});
			}
		})
	};

	console.log(transaction);

	const headerTitle = {
		lead: `Order #${transaction?.id}`,
		text: `${transaction?.type}ing ${transaction?.currency_name}`,
	};

	const headerContent = [
		{
			lead: `Total ${transaction?.local_currency} sent`,
			text: `${transaction?.local_currency} ${transaction?.amount}`
		},
		{
			lead: `Total ${transaction?.currency_name} received`,
			text: `USD ${transaction?.amount_received_usd}`,
		}
	];

	return (
		<Main
			page="transaction"
			headerTitle={headerTitle}
			headerContent={headerContent}
		>
			{loadingTrans && (
				<Loader text="Loading transaction..." />
			)}
			{transaction && (
				<div className="transaction__info flex px:10 py:_6" style={{ justifyContent: "space-between" }}>
					<div className="transaction__data w:100 max-w-sm-down:100 max-w-md:66 max-w-lg:50 max-w-md-up:33">
						<div>
							<h3 className="mb:_1">Order Status</h3>
							<div className="transaction__data__statuses flex flex:center-between mb:_4">
								{
									["pending", "success", "failed"].map((status) => (
										<div
											key={status}
											className={`
											transaction__data__status -${status}
											${transaction.status === status && "-active"}
											py:_1 px:_3 cursor:pointer

										`}
											onClick={() => updateState({ status })}
										>
											{status}
										</div>
									))
								}
							</div>
						</div>
						<div className="flex mb:_4" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
							<div>
								<h3>User sent</h3>
								<p>
									{transaction.local_currency} {transaction.amount}
								</p>
								<small>+ {transaction.local_currency} {transaction.miner_fee} network fee</small>
							</div>
							<div className="ml:auto">
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
								<h3>{transaction.type === "buy" ? `${transaction.currency_name} address` : "Mobile money number"}</h3>
								<p>
									{transaction.wallet_address}
								</p>
							</div>
						</div>
					</div>
					<div className="transaction__aside w:100">
						<div className="ml:_10 pl:_10">
							<h3 className="mb:_1">Blockchain transaction link</h3>
							<Form form={form} onSubmit={changeLink} className="flex">
								<input
									placeholder="Link"
									className="px:_1 py:_1"
									value={inputState.link}
									name="link"
									onChange={onChange}
									onBlur={onBlur}
								/>
								<Button
									color="green"
									className="px:_3 ml:_1 py:_1 cursor:pointer"
								>
									Save
								</Button>
							</Form>
							<small className="text:red mt:_1">{errors.link}</small>
						</div>
					</div>
				</div>
			)}
		</Main>
	);
};

export default Transaction;
