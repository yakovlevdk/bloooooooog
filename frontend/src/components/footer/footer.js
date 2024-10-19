import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>denis@developer.ru</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: rgb(255, 255, 255);
	box-shadow: rgb(0, 0, 0) 0px 2px 17px;
`;
