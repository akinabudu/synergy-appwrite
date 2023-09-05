import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const headersList = {
    "Content-Type": "application/json",
  };
  const bodyContent = JSON.stringify({
    email: `${process.env.NEXT_PUBLIC_KUDA_EMAIL}`,
    apiKey: `${process.env.NEXT_PUBLIC_KUDA_KEY}`,
  });

  const reqOptions = {
    url: `${process.env.NEXT_PUBLIC_KUDA_URL}/Account/GetToken`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  const { data: info } = await axios.request(reqOptions);
  return NextResponse.json(info);
}
