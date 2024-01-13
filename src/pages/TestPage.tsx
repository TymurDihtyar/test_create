import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {ITest} from "../interfaces/testInterface";
import {Tests} from "../components/TestsContainer/Tests";
import {testsService} from "../services/testsService";

const TestPage = () => {

    const [tests, setTests] = useState<ITest[]>([])

    useEffect(() => {
        testsService.getAll().then(({data})=>{setTests(data)})
    }, []);

console.log(tests);

    return (
        <div>
            <Tests tests={tests}/>
            <Outlet/>
        </div>
    );
};

export {TestPage};