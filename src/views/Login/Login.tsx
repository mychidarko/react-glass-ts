import GlassX from "glassx";
import { useRoute } from "glass-router";
import React, { useState } from "react";
import Form, { useForm, Input } from "@/components/Form";
import Button from "@/components/Button";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigator = useRoute();

	const form = useForm({
		fields: {
			email: "",
			password: ""
		}
	});

	const { onChange, onBlur, errors, inputState } = form;

	const handleLogin = () => {
		setLoading(true);
		
		setTimeout(() => {
			const user = {
				username: "Mychi",
				email: inputState.email,
			};
			const token = "5678u2hwy8g2yu1gyuw1g";

			GlassX.set({ user, token, hasAuth: true });

			navigator("/dashboard");

			setLoading(false);
		}, 3000);
	};

	return (
		<div className="login-page background flex flex:center-all">
			<div className="position:fixed left:10 top:_4 logo">
				<b>Simple</b>coins
			</div>

			<Form onSubmit={handleLogin} form={form} className="form">
				<Input
					name="email"
					placeholder="Email"
					error={errors.email}
					onChange={onChange}
					onInput={onChange}
					onBlur={onBlur}
					value={inputState.email}
					className="pb:_2 form-group flex-col"
				/>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					error={errors.password}
					onChange={onChange}
					onInput={onChange}
					onBlur={onBlur}
					value={inputState.password}
					className="pb:_2 form-group flex-col"
				/>
				<Button
					loaderSize={10}
					loading={loading}
					disabled={loading}
					className="w:100 p:_2 cursor:pointer"
				>
					Log in
				</Button>
			</Form>
		</div>
	);
};

export default Login;
