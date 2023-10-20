import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import Chevrons from "/images/icon-chevron.svg";

export default function Header({ menuOpen, setMenuOpen }) {
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<>
			<HeaderContainer>
				<HeaderLogo>THE PLANETS</HeaderLogo>
				<BurgerMenu onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</BurgerMenu>
				<HeaderNav>
					{data.map((item) => (
						<StyledLink key={item.name} to={`/${item.name}`}>
							{item.name}
						</StyledLink>
					))}
				</HeaderNav>
			</HeaderContainer>
			{menuOpen && (
				<BurgerNav>
					{data.map((item) => (
						<StyledLink
							key={item.name}
							onClick={toggleMenu}
							to={`/${item.name}`}
						>
							<PlanetColor color={item.color}> </PlanetColor>

							{item.name}
							<Chevron src={Chevrons} />
						</StyledLink>
					))}
				</BurgerNav>
			)}
		</>
	);
}

const HeaderContainer = styled.div`
	width: 100%;
	padding: 2.2rem 4rem 2.5rem 3.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid grey;

	@media (max-width: 1200px) {
		flex-direction: column;
		padding: 3.2rem auto 2.7rem;
		gap: 3.9rem;
	}
	@media (max-width: 700px) {
		padding: 1.6rem 2.4rem;
		flex-direction: row;
	}
`;
const ForMobile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const HeaderLogo = styled.h2`
	font-family: "Antonio", sans-serif;
	font-size: 28px;
	font-weight: 400;
	line-height: 36px;
	letter-spacing: -1.0499999523162842px;
	text-align: left;
	color: white;
	white-space: nowrap;
`;
const BurgerMenu = styled.div`
	background: none;
	border: none;
	cursor: pointer;
	flex-direction: column;
	justify-content: space-between;
	height: 17px;
	width: 24px;
	padding: 0;
	margin: 0;
	display: none;
	div {
		background-color: #fff;
		height: 3px;
		width: 24px;
	}
	@media (max-width: 700px) {
		display: flex;
	}
`;

const BurgerNav = styled.nav`
	display: none;
	flex-direction: column;
	padding: 4.4rem 2.4rem 6.7rem;
	@media (max-width: 700px) {
		display: flex;
		background-color: #070724;
		position: absolute;
		z-index: 10;
		top: 7rem;
		left: 0;
		height: 100%;
		width: 100%;
	}
`;
const HeaderNav = styled.nav`
	display: flex;
	align-items: center;
	gap: 3.3rem;
	@media (max-width: 700px) {
		display: none;
	}
`;
const StyledLink = styled(Link)`
	font-family: "League Spartan", sans-serif;
	font-size: 11px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 1px;
	text-align: left;
	color: #fff;
	text-transform: uppercase;

	@media (max-width: 700px) {
		font-family: "League Spartan", sans-serif;
		font-size: 15px;
		font-weight: 700;
		text-align: center;
		padding: 2rem 0.8rem 2rem 0;
		display: flex;
		align-items: center;
		/* justify-content: flex-start; */
		border-bottom: solid 1px grey;
		width: 100%;
	}
`;

const PlanetColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 2.5rem;
	background-color: ${(props) => props.color};
`;
const Chevron = styled.img`
	width: 4px;
	height: 8px;
	margin-left: auto;
`;
