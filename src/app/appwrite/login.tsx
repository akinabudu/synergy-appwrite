export async function GetOAuth(provider: string) {
  try{
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APPWRITE_URL}/account/sessions/oauth2/${provider}`,
      {
        headers: {
          Host: `${process.env.NEXT_PUBLIC_HOST}`,
          "Content-Type": "application/json",
          "X-Appwrite-Response-Format": "1.0.0",
          "X-Appwrite-Project": `${process.env.NEXT_PUBLIC_APPWRITE_ID}`,
        },
        mode:"no-cors"
      }
    );
  
    if (!res.ok) {
      throw new Error(`${res.status} Failed to fetch data`);
    }
    const data = await res.json()
    // console.log(data)
    return data
  }catch(err){console.error(err)}
}





export async function CreateMagicUrl(userId: string, email: string, url:string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APPWRITE_URL}/account/sessions/magic-url`,
      {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          email: email,
          url:url
        }),
        headers: {
          Host: `${process.env.NEXT_PUBLIC_HOST}`,
          "Content-Type": "application/json",
          "X-Appwrite-Response-Format": "1.0.0",
          "X-Appwrite-Project": `${process.env.NEXT_PUBLIC_APPWRITE_ID}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json()
    // console.log(data)
    return data
  } catch (err) {
    console.error(err);
  }
}






export async function ConfirmMagicUrl(userId: string, secret: string) {
  try{

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APPWRITE_URL}/account/sessions/magic-url`,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: userId,
          secret: secret,
        }),
        headers: {
          Host: `${process.env.NEXT_PUBLIC_HOST}`,
          "Content-Type": "application/json",
          "X-Appwrite-Response-Format": "1.0.0",
          "X-Appwrite-Project": `${process.env.NEXT_PUBLIC_APPWRITE_ID}`,
        },
      }
    );
  
    if (!res.ok) {
      // console.log(res)
      throw new Error("Failed to fetch data");
    }
    const data = await res.json()
    // console.log(data)
    return data
  }catch(err){
    console.error(err)
  }
}
