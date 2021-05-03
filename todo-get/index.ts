import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {  dataService }  from '../services/dataService';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    const dataServiceObj = new dataService();
    
    context.res = {
        body: dataServiceObj.getTodos(context)
    };

};

export default httpTrigger;