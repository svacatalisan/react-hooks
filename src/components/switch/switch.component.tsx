import React, { useContext } from "react";
import Context from "../../shared/context/context";
import styled from "styled-components";

const Container = styled['label']`
	position: relative;
	display: inline-block;
	width: 50px;
    height: 30px;
	margin-right: 15px;
	@media only screen and (max-width: 600px) and (min-width: 320px)  {
		width: 35px;
    	height: 25px;
	}
`;

const Slider = styled['span']`
	position: absolute;
	top: 0;
	display: block;
	cursor: pointer;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.navBarLink};
	border-radius: 34px;
	-webkit-transition: 0.4s;
	transition: 0.4s;

	&::before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		margin: 4px;
		background-color: white;
		border-radius: 50%;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	@media only screen and (max-width: 600px) and (min-width: 320px)  {
		&::before {
			height: 18px;
			width: 18px;
		}
	}
`;

const Input = styled['input']`
	opacity: 0;
	width: 0;
	height: 0;
	margin: 0;

	&:checked + ${Slider} {
		background-color: ${props => props.theme.navBarLink};
	}

	&:checked + ${Slider}::before {
		-webkit-transform: translateX(10px);
		-ms-transform: translateX(10px);
		transform: translateX(10px);
	}

	&:focus + ${Slider} {
		box-shadow: 0 0 1px #2196f3;
	}

	@media only screen and (max-width: 600px) and (min-width: 320px)  {
		
	}
`;

const Switch = () => {
const { dispatch } = useContext(Context);

	const handleOnClick = () => {
		// Dispatch action
		dispatch({ type: "TOGGLE_DARK_MODE" });
	};

	return (
		<Container>
			<Input type="checkbox" onClick={handleOnClick} />
			<Slider />
		</Container>
	);
};

export default Switch;