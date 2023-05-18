'use client'
import React from "react";
import { Client, Account } from "appwrite";
import { ConfigItems } from "@/.config";
import axios from 'axios'

export const CheckAccount = async () => {
    try {
        // const headersList = {
        //   "Content-Type": "application/json",
        //   "X-Appwrite-Response-Format": "1.0.0",
        //   "X-Appwrite-Project": Items.APPWRITE_PROJECTID,
        // //   "X-Appwrite-JWT":jwt,
        // };
        // // const bodyContent = JSON.stringify({userId,secret});
    
        // const reqOptions = {
        //   url: `${Items.APPWRITE_SERVER}/account/sessions/current`,
        //   method: "GET",
        //   headers: headersList,
        // //   data: bodyContent,
        //   cache: "no store",
        // };
    
        // const { data: info } = await axios.request(reqOptions);
        // console.log("CheckSessionSuccess:", info);
        // return true;


        const client = new Client();        
        const account = new Account(client);        
        client
        .setEndpoint(`${ConfigItems.APPWRITE_SERVER}`) // Your API Endpoint
        .setProject(`${ConfigItems.APPWRITE_PROJECTID}`) // Your project ID
        ;
        
        const promise = account.get();        
        promise.then(function (response) {
            console.log(response); // Success            
        }, function (error) {
            console.log(error); // Failure
        });

return true
      } catch (error) {
        console.error("CheckSessionError", error);
        return false;
      }
};
