import axios from "axios";

export async function GetToken(): Promise<any> {
  try {
    const headersList = {
      "Content-Type": "application/json",     
    };
    // const bodyContent = JSON.stringify({
        
	// 		"email": `${process.env.NEXT_PUBLIC_KUDA_EMAIL}`,
	// 		"apiKey": `${process.env.NEXT_PUBLIC_KUDA_KEY}`
		
    // });

    const reqOptions = {
      url: `${process.env.NEXT_PUBLIC_APPWRITE_CALLBACK}/api/v1/gettoken`,
      method: "GET",
      headers: headersList,
        // data: bodyContent,
      cache: "no store",
    };

    const { data: info } = await axios.request(reqOptions);
    console.log("GetToken-Success:", info);
    return info;
  } catch (err) {
    console.error("GetToken-Error:", err);
    return err;
  }
}
