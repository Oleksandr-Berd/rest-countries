import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  margin-bottom: ${props => props.theme.space[2]};

  background-color: ${(props) => props.theme.color.altBg};

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
 
`;

export const Title = styled.h1`
font-size: ${props => props.theme.size.S};
font-weight: ${props => props.theme.weight.bold};
line-height: 1.6;
`

export const SwitchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

background-color: transparent;
border: none;
`;

export const SwitchButtonText = styled.span`
margin-left: ${props => props.theme.space[2]};

font-weight: ${props => props.theme.weight.semiBold};
font-size: ${props => props.theme.size.XS};
`