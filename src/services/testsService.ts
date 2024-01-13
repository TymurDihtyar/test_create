import {IRes} from "../types/IRes";
import {ITest} from "../interfaces/testInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const testsService = {
    getAll:():IRes<ITest[]> => axiosService.get(urls.tests),
    getTestById: (id:string): IRes<ITest>=> axiosService.get(urls.byIdTest(id))
}

export {testsService}