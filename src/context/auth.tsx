import React, { createContext } from "react";

interface IUserProps {
	name?: string;
	email?: string;
	exp?:number
}
interface TInItialState {
	user: IUserProps
}

const initialState:TInItialState = {
	user: {},
};

if (localStorage.getItem("user")) {
	let exp = localStorage.getItem('user') || ''
	exp = JSON.parse(exp)
	if(typeof exp === "object" && exp * 1000 < Date.now()){
		localStorage.removeItem("user");
	}
	initialState.user =  JSON.parse(localStorage.getItem("user") || "");
}



const AuthContext = createContext({
	// eslint-disable-next-line no-unused-vars
	login: (userData:IUserProps) => {},
	logout: () => {},
	user: {
		name: "",
		email:""
	},
});

const authReducer = (state:any, action:any) => {
	const { type, payload } = action;
	switch (type) {
		case "LOGIN":
			return {
				...state,
				user: payload,
			};

		case "LOGOUT":
			return {
				...state,
				user: null,
			};

		default:
			return state;
	}
};

const AuthProvider = (props:any) => {
	const [state, dispatch] = React.useReducer(authReducer, initialState);

	const login = (userData:IUserProps) => {
		localStorage.setItem("user", JSON.stringify({...userData, exp: new Date(Date.now() + 60*60000).getTime()}));
		dispatch({
			payload: userData,
			type: "LOGIN",
		});
	};

	const logout = () => {
		localStorage.removeItem("user");
		dispatch({
			type: "LOGOUT",
		});
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				user: state.user,
			}}
			{...props}
		/>
	);
};

export { AuthContext, AuthProvider };
