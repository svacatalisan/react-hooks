import React, { useContext } from "react";
import Context from "../context/context";
import styled from "styled-components";

const UserInitials = styled['label']`
	align-items: center;
	justify-content: center;
	background: #ECEBF2;
	border-radius: 50%;
	color: #A796EC;
	position: relative;
	display: flex;
	width: 45px;
    height: 45px;
	margin: 10px 40px 10px 0;
	@media only screen and (max-width: 600px) and (min-width: 320px)  {
		width: 35px;
		height: 35px;
		margin: 10px 20px 10px 0;
	}
`;

const UserPrefences = () => {
	const { state, dispatch } = useContext(Context);
	const { firstname, lastname } = state.UserState;
	console.log('state', firstname);
	const formatName = (): string => {
		return `${firstname[0]}${lastname[0]}`;
	}
	
	return (
		<UserInitials>
			{formatName()}
		</UserInitials>
	);
};

export default UserPrefences;