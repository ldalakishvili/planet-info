import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import styled from "styled-components";
import Arrow from "/images/icon-source.svg";
export default function Planet({ menuOpen }) {
	const params = useParams();
	const planetData = data.find(
		(item) => item.name.toLowerCase() == params.planet.toLowerCase()
	);
	console.log(planetData);
	const [activeListItem, setActiveListItem] = useState("overview");

	const handleClick = (item) => {
		setActiveListItem(item);
	};
	return (
		<Container visible={menuOpen}>
			<MobileNav>
				<List
					color={planetData.color}
					onClick={() => {
						handleClick("overview");
					}}
					active={activeListItem === "overview"}
				>
					<ListName>OVERVIEW</ListName>
				</List>
				<List
					color={planetData.color}
					onClick={() => {
						handleClick("structure");
					}}
					active={activeListItem === "structure"}
				>
					<ListName>STRUCTURE</ListName>
				</List>
				<List
					color={planetData.color}
					onClick={() => {
						handleClick("geology");
					}}
					active={activeListItem === "geology"}
				>
					<ListName>SURFACE</ListName>
				</List>
			</MobileNav>
			<PlanetContainer>
				<PlanetInfoContainer>
					<PlanetImgWrapper>
						<PlanetImg
							src={
								activeListItem === "structure"
									? planetData.images.internal
									: planetData.images.planet
							}
						/>
						<Geology
							visible={activeListItem === "geology"}
							src={planetData.images.geology}
						/>
					</PlanetImgWrapper>
					<PlanetInfo>
						<ForResponsive>
							<PlanetName>{planetData.name}</PlanetName>
							<PlanetText>{planetData[activeListItem].content} </PlanetText>
							<SourceBox>
								<Source> Source:</Source>
								<Wikipedia
									href={planetData[activeListItem].source}
									target="blank"
								>
									Wikipedia
									<ArrowImg src={Arrow} />
								</Wikipedia>
							</SourceBox>
						</ForResponsive>
						<InfoList>
							<List
								color={planetData.color}
								onClick={() => {
									handleClick("overview");
								}}
								active={activeListItem === "overview"}
							>
								<Number> 01 </Number> <ListName>OVERVIEW</ListName>
							</List>
							<List
								color={planetData.color}
								onClick={() => {
									handleClick("structure");
								}}
								active={activeListItem === "structure"}
							>
								<Number> 02 </Number> <ListName>INTERNAL STRUCTURE</ListName>
							</List>
							<List
								color={planetData.color}
								onClick={() => {
									handleClick("geology");
								}}
								active={activeListItem === "geology"}
							>
								<Number> 03 </Number> <ListName>SURFACE GEOLOGY</ListName>
							</List>
						</InfoList>
					</PlanetInfo>
				</PlanetInfoContainer>
				<TimeDurations>
					<RowBox>
						<RowBoxTitle>ROTATION TIME </RowBoxTitle>
						<RowBoxInfo> {planetData.rotation} </RowBoxInfo>
					</RowBox>
					<RowBox>
						<RowBoxTitle>REVOLUTION TIME </RowBoxTitle>
						<RowBoxInfo> {planetData.revolution} </RowBoxInfo>
					</RowBox>
					<RowBox>
						<RowBoxTitle>RADIUS </RowBoxTitle>
						<RowBoxInfo> {planetData.radius} </RowBoxInfo>
					</RowBox>
					<RowBox>
						<RowBoxTitle>AVERAGE TEMP </RowBoxTitle>
						<RowBoxInfo> {planetData.temperature} </RowBoxInfo>
					</RowBox>
				</TimeDurations>
			</PlanetContainer>
		</Container>
	);
}
const Container = styled.div`
	@media (max-width: 700px) {
		display: ${(props) => (!props.visible ? "block" : "none")};
	}
`;

const PlanetContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 21.2rem auto 5.4rem;
	max-width: 111rem;
	width: 100%;
	gap: 8.7rem;
	@media (max-width: 1200px) {
		padding: 0 4rem;
	}
	@media (max-width: 700px) {
		margin: 0 auto;
		gap: 2.8rem;
	}
`;
const PlanetInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;
const PlanetImgWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 54rem;
	width: 100%;
	position: relative;
	height: 45rem;

	@media (max-width: 1200px) {
		margin-top: -10rem;
		max-width: none;
		margin-bottom: 10rem;
		height: 37rem;
		width: 37rem;
	}

	@media (max-width: 700px) {
		margin-top: 7rem;
		margin-bottom: 7rem;
		height: 25rem;
		width: 25rem;
	}
`;
const PlanetImg = styled.img``;
const PlanetInfo = styled.div`
	max-width: 35rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media (max-width: 1200px) {
		flex-direction: row;
		gap: 6.9rem;
		align-items: center;
	}
	@media (max-width: 700px) {
		justify-content: center;
	}
`;
const Geology = styled.img`
	width: 15.8rem;
	height: 16rem;
	position: absolute;
	top: 250px;
	display: ${(props) => (props.visible ? "block" : "none")};
	@media (max-width: 700px) {
		width: 10.8rem;
		height: 10rem;
		top: 150px;
	}
`;
const PlanetName = styled.h2`
	font-family: "Antonio", sans-serif;
	font-size: 80px;
	font-weight: 400;
	line-height: 104px;
	letter-spacing: -5px;
	text-align: left;
	color: #fff;
	margin-bottom: 2.3rem;
	text-transform: uppercase;
	width: 100%;
	@media (max-width: 1200px) {
		font-size: 48px;
		line-height: 62px;
	}
	@media (max-width: 700px) {
		font-size: 4rem;
		text-align: center;
	}
`;
const PlanetText = styled.p`
	font-family: "League Spartan", sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 25px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	margin-bottom: 2.3rem;
	@media (max-width: 1200px) {
		font-size: 11px;
		line-height: 22px;
		width: 339px;
	}
	@media (max-width: 700px) {
		text-align: center;
		max-width: 325px;
	}
`;
const ForResponsive = styled.div`
	@media (max-width: 1200px) {
	}
`;
const SourceBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 3.9rem;
	color: white;
	@media (max-width: 700px) {
		justify-content: center;
	}
`;
const Source = styled.span`
	font-family: "League Spartan", sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 25px;
`;
const Wikipedia = styled.a`
	font-family: "League Spartan", sans-serif;
	font-size: 14px;
	font-weight: 700;
	line-height: 25px;
	text-decoration: underline;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 4px;
`;
const ArrowImg = styled.img`
	width: 12px;
`;

const InfoList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	width: 100%;
	@media (max-width: 700px) {
		display: none;
	}
`;
const MobileNav = styled.nav`
	padding: 0 2.4rem;
	width: 100%;
	border-bottom: solid 1px grey;
	display: none;
	justify-content: space-between;
	/* width: 120%; */
	@media (max-width: 700px) {
		display: flex;
		/* margin: -20rem; */
	}
`;
const List = styled.li`
	display: flex;
	align-items: center;
	padding: 1.2rem 2.8rem;
	gap: 2.8rem;
	border: solid 1px grey;
	width: 100%;
	cursor: pointer;
	background-color: ${(props) => (props.active ? props.color : "transparent")};
	white-space: nowrap;

	&:hover {
		background-color: darkgrey;
	}

	@media (max-width: 1200px) {
		padding: 0.8rem 2rem;
		gap: 1.7rem;
		width: 281px;
	}
	@media (max-width: 700px) {
		justify-content: center;
		width: 8rem;
		padding: 0r 2.8rem;
		border: none;
		background-color: transparent;
		border-bottom: ${(props) =>
			props.active ? `solid 3px ${props.color}` : "transparent"};
	}
`;

const Number = styled.span`
	font-family: "League Spartan", sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 2.5714285373687744px;
	text-align: left;
	color: grey;
	@media (max-width: 1200px) {
		font-size: 9px;
	}
`;
const ListName = styled.h2`
	font-family: "League Spartan", sans-serif;
	font-size: 12px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 2.5714285373687744px;
	text-align: left;
	color: white;

	@media (max-width: 1200px) {
		font-size: 9px;
	}
	@media (max-width: 700px) {
		text-align: center;
	}
`;

const TimeDurations = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 1200px) {
		justify-content: space-around;
	}
	@media (max-width: 700px) {
		flex-direction: column;
		gap: 0.8rem;
		margin-bottom: 3rem;
	}
`;
const RowBox = styled.div`
	border: solid 1px grey;
	padding: 2rem 0 2.7rem 2.3rem;
	display: flex;
	flex-direction: column;
	gap: 4px;
	align-items: flex-start;
	max-width: 25.5rem;
	width: 100%;
	white-space: nowrap;
	@media (max-width: 1200px) {
		padding: 1.6rem 0 1.9rem 1.5rem;
		gap: 6px;
		max-width: 16.4rem;
	}
	@media (max-width: 700px) {
		flex-direction: row;
		padding: 1rem 2.4rem;
		gap: 0;
		justify-content: space-between;
		max-width: 100%;
		align-items: center;
	}
`;

const RowBoxTitle = styled.h2`
	font-family: "League Spartan", sans-serif;
	font-size: 11px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 1px;
	text-align: left;
	color: grey;

	@media (max-width: 1200px) {
		font-size: 8px;
		line-height: 16px;
	}
`;
const RowBoxInfo = styled.p`
	font-family: "Antonio", sans-serif;
	font-size: 40px;
	font-weight: 400;
	line-height: 52px;
	letter-spacing: -1.5px;
	text-align: left;
	color: white;
	text-transform: uppercase;

	@media (max-width: 1200px) {
		font-size: 24px;
		line-height: 31px;
	}
	@media (max-width: 700px) {
		font-size: 20px;
		line-height: 16px;
		text-align: right;
	}
`;
