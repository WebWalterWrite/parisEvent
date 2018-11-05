import styled from "styled-components";
import { media } from "../../../styles/responsive.styled";

export const Section = styled.section`
  background-color: #fff;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  ${media.iphonePlus`
        width:100%;
    `} 
	h1 {
    color: black !important;
    text-align: center;
  }

  h3 {
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1;
`;

export const Img = styled.div`
	img {
		width:100%;
        ${media.desktop`
            padding:0 140px 0 140px;
        `}
		${media.desktopL`
            padding:0 140px 0 140px;
        `}
        ${media.iphonePlus`
            padding:0 5px 0 5px;
        `}
        
	}
`;

export const Infos = styled.div`
  border: solid 2px #e91e63;
  border-radius: 6px;
  p {
    padding: 5px;
  }
`;

export const Description = styled.div`
	line-height: 1.2;
	a {
		color: black !important;
	}
	li {
		list-style-type: none;
		margin: 5px 0px 5px 0px;
	}
	
	&:nth-child(1n) {
			
			p {
				:first-child{text-align: center;}
				text-align:left;
			}
			img{
				width:100%;
			}

			iframe{
				${media.desktopL`
					width:1000px;
					height: 500px;
			`}
			${media.iphonePlus`
				width:100%;
				height:250px;
			`}
		}
`;
