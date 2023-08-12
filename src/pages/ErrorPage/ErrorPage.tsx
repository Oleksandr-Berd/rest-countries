import * as SC from "./ErrorPageStyled"
import { IPropsInterface } from "../../utils/interface";

const ErrorPage:React.FC<IPropsInterface> = ({errors}):JSX.Element => {
    return ( <SC.ErrorLayout>
        <SC.ErrorText>{errors}</SC.ErrorText>
    </SC.ErrorLayout> );
}
 
export default ErrorPage;