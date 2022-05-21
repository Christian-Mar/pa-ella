import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 95%;
	margin-top: ${props => (props.noBroadcast ? '20px' : '0')};
	margin-left: 2rem;
	.rec {
		margin-bottom: 10px;
	}

	.rec .rec-arrow {
		box-sizing: border-box;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
		font-size: 1.6em;
		background-color: #5fc349;
		background-color: transparent;
		color: #ffffff;
		color: black;
		border-radius: 50%;
		border: none;
		padding: 0;
		width: 50px;
		height: 50px;
		min-width: 50px;
		line-height: 50px;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		cursor: pointer;
		outline: none;
	}

	.rec .rec-arrow:hover:enabled,
	.rec .rec-arrow:focus:enabled {
		color: #fff;
		background-color: #5fc349;
	}

	.rec .rec-arrow:hover:disabled {
		cursor: not-allowed;
	}

	.rec-pagination {
		display: none;
	}
`;
