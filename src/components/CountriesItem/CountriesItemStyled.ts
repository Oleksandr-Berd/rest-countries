import styled from "styled-components"


export const ItemStyled = styled.li`
  background-color: ${(props) => props.theme.color.altBg};

  border-top-left-radius: ${(props) => props.theme.radius[5]};
  border-top-right-radius: ${(props) => props.theme.radius[5]};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[11]};
  }
`;

export const Flag = styled.img`
  width: ${(props) => props.theme.percentage[10]};

  border-top-left-radius: ${(props) => props.theme.radius[5]};
  border-top-right-radius: ${(props) => props.theme.radius[5]};
`;

export const FlagContainer = styled.div`
margin-bottom: ${props => props.theme.space[6]};
`

export const ContentContainer = styled.div`
padding-left: ${props => props.theme.space[6]};
padding-bottom: ${props => props.theme.space[12]};
`

export const CountryName = styled.h3`
display: inline-block;

margin-bottom: ${props => props.theme.space[4]};

font-weight: ${props => props.theme.weight.bold};
font-size: ${props => props.theme.size.XN};
line-height: 1.44;
` 

export const Content = styled.p`
font-weight: ${props => props.theme.weight.semiBold};
font-size: ${props => props.theme.size.S};
line-height: 1.14;

&:not(:last-child){
    margin-bottom: ${props => props.theme.space[2]};
}
`

export const SubContent = styled.span`
font-weight: ${(props) => props.theme.weight.light};

`;
