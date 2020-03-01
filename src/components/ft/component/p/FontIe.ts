import { ReactNode,MouseEvent,MouseEventHandler } from 'react';
interface clickIe{
    (value:any):any;
}
type PropsType={      
    children:ReactNode,
    onClick?:clickIe
}
export default PropsType;