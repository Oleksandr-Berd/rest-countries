import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



body{
margin: 0;
color: ${(props) => props.theme.color.mainText};
font-family: ${(props) => props.theme.fontFamily.body};

}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a, address, label, input{
  margin: 0;
}

ul, nav{
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
  outline: none;
color: ${(props) => props.theme.color.mainText};

}

img{
    display: block;
    box-sizing: border-box;
}

button:focus{
  outline: none;
}
`;
