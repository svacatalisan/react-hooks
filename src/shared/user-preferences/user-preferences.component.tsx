import React, { useContext } from "react";
import Context from "../context/context";
import styled from "styled-components";

const UserInitials = styled['label']`
	align-items: center;
	justify-content: center;
	background: #ECEBF2;
	border-radius: 50%;
	color: #D4CDF5;
	position: relative;
	display: flex;
	width: 30px;
    height: 30px;
	margin-right: 15px;
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