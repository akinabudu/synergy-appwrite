import { ConfigItems } from "@/.config";
import { Client, Account } from "appwrite";

export const Logout =()=>{

    const client = new Client();
    
    const account = new Account(client);
    
    client
    .setEndpoint(`${ConfigItems.APPWRITE_SERVER}`) // Your API Endpoint
    .setProject(`${ConfigItems.APPWRITE_PROJECTID}`); // Your project ID
    ;
    
    const promise = account.deleteSession('current');
    
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}


