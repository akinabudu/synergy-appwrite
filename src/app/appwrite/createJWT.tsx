import { ConfigItems } from "@/.config";
import { Client, Account } from "appwrite";

import axios from 'axios'

export const CreateJWT = async () => {
  try {
    

    const client = new Client();
    const account = new Account(client);
    client
        .setEndpoint(`${ConfigItems.APPWRITE_SERVER}`) // Your API Endpoint
        .setProject(`${ConfigItems.APPWRITE_PROJECTID}`) // Your project ID
    ;
    
    const promise = account.createJWT();
    
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.error(error); // Failure
    });
  } catch (error) {
    console.error("JwtError", error);
  }

};


