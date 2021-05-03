import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {  dataService }  from '../services/dataService';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    const dataServiceObj = new dataService();

    if ( req.body && req.body.task ) {
        context.res = {
          body: dataServiceObj.editTodo(context)
        }
    } else {
        context.res = {
            status: 400,
            body: "Please pass a task data in the request body"
        };
    }

};

export default httpTrigger;