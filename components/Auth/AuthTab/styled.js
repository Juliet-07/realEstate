import styled from "styled-components";

export const AuthTabWrapper = styled('div')`
	.tabitem {
		width: 100px;
		max-width: 100px;
		margin: 0.5em;
		position: relative;
		height: 130px;
		border-radius: 4px;
		border: 1px solid #316c51;
		justify-content: flex-start;
		cursor: pointer;
		transition: 500ms ease-in-out;
		background-color: #f3f2f2;
		:hover {
			background-color: #f3f2f2;
			border-color: #316c51;
		}
		.checked {
			position: absolute;
			right: -7px;
			top: -0.3em;
			background-color: white;
			height: 14px;
			width: 14px;
			border-radius: 50px;
			transition: 0.3s ease-in-out;
		}

		.icon {
			height: 30px;
			width: 30px;
			margin-top: 1.5em;
			margin-bottom: 0.5em;
			background-color: rgba(121,201,190,0.59);
			border-radius: 50px;
		}
		h5 {
			font-style: normal;
			font-weight: 500;
			font-size: 11px;
			line-height: 18px;
			text-align: center;
			color: #2e384d;
		}
		p {
			font-style: normal;
			font-weight: normal;
			font-size: 9px;
			line-height: 10px;
			text-align: center;

			color: #8798ad;
		}
	}
	.tabitem--inactive {
		background-color: #fff;
		opacity: 0.6;
		border: 1px solid rgba(0,108,104,0.4);
		filter: grayscale(50%);
	}

	.tabitem__icon {
		color: rgba(255, 255, 255, 0.9);
		font-size: 22px;
	}

	.tabitem__title {
		color: rgba(255, 255, 255, 0.9);
		font-size: 16px;
		margin: 10px 0;
	}

	.content {
		text-align: center;
		margin-top: 15px;
		font-size: 22px;
	}
`;
