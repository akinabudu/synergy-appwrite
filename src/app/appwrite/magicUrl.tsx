import { Client, Account } from "appwrite";
import { ConfigItems } from "@/.config";
import axios from "axios";

export async function ConfirmMagic(
  userId: string|null,
  secret: string|null 
): Promise<boolean> {
  // try {
  //   const headersList = {
  //     "Content-Type": "application/json",
  //     "X-Appwrite-Response-Format": "1.0.0",
  //     "X-Appwrite-Project": Items.APPWRITE_PROJECTID,
  //     'cache-control':'no-store'
  //   };
  //   const bodyContent = JSON.stringify({userId,secret});

  //   const reqOptions = {
  //     url: `${Items.APPWRITE_SERVER}/account/sessions/magic-url`,
  //     method: "PUT",
  //     headers: headersList,
  //     data: bodyContent,
  //     cache: "no store",
  //   };

  //   const { data: info } = await axios.request(reqOptions);
  //   console.log("ConfirmMagicSuccess:", info);
  //   return true;
  // } catch (error) {
  //   console.error("ConfirmMagicError", error);
  //   return false;
  // }

  try {
    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint(`${ConfigItems.APPWRITE_SERVER}`) // Your API Endpoint
      .setProject(`${ConfigItems.APPWRITE_PROJECTID}`); // Your project ID

    const promise = account.updateMagicURLSession(`${userId}`, `${secret}`);

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    return true;
  } catch (error) {
    console.error("Confirm Magic Error", error);
    return false;
  }
}

export async function CreateMagic(
  userId: string | null,
  email: string | null,
  url: string | null
): Promise<boolean> {
  try {
    const headersList = {
      "Content-Type": "application/json",
      "X-Appwrite-Response-Format": "1.0.0",
      "X-Appwrite-Project": ConfigItems.APPWRITE_PROJECTID,
    };
    const bodyContent = JSON.stringify({userId,email,url});

    const reqOptions = {
      url: `${ConfigItems.APPWRITE_SERVER}/account/sessions/magic-url`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
      cache: "no store",
    };

    const { data: info } = await axios.request(reqOptions);
    console.log("CreateMagicSuccess:", info);
    return true;
  } catch (error) {
    console.error("CreateMagicError", error);
    return false;
  }

  // try {
  //   const client = new Client();
  //   const account = new Account(client);

  //   client
  //     .setEndpoint(`${Items.APPWRITE_SERVER}`) // Your API Endpoint
  //     .setProject(`${Items.APPWRITE_PROJECTID}`); // Your project ID

  //   const promise = account.createMagicURLSession(
  //     `${userId}`,
  //     `${email}`,
  //     `${url}`
  //   );

  //   promise.then(
  //     function (response) {
  //       console.log(response); // Success
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //     }
  //   );
  //   return true;
  // } catch (error) {
  //   console.error("CreateMagic Error", error);
  //   return false;
  // }
}
