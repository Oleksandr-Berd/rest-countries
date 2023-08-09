import { Suspense } from "react";
import { Dna } from "react-loader-spinner";
import { Outlet } from "react-router-dom";

import * as SC from "./SharedLayoutStyled"
import Header from "../Header/Header";

const SharedLayout:React.FC = ():JSX.Element => {
    return (<SC.MainStyled>
        <Header/>
        <Suspense fallback={<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />}>
            <Outlet />
        </Suspense>
    </SC.MainStyled> );
}
 
export default SharedLayout;