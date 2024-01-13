import {FC, PropsWithChildren} from 'react';
import {ITest} from "../../interfaces/testInterface";

interface IProps extends PropsWithChildren {
    tests:ITest[]
}

const Tests:FC<IProps> = ({tests}) => {
    
    return (
        <div>
            
        </div>
    );
};

export {Tests};