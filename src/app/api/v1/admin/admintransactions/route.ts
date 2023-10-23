import { NextResponse } from "next/server";
import axios from "axios";
import { uid } from "uid/secure";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // const token = localStorage.getItem("token");

  const headersList = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const bodyContent = JSON.stringify({
    serviceType: "ADMIN_MAIN_ACCOUNT_TRANSACTIONS",
    requestref: uid(),
    data: {
        "pageSize": "20",
        "pageNumber": "3"
    },
  });

  const reqOptions = {
    url: `${process.env.NEXT_PUBLIC_KUDA_URL}`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
    // cache: "no store",
  };

  const { data: info } = await axios.request(reqOptions);
  // console.log("AdminTrnx-Success:", info);
  //   return info;
  return NextResponse.json(info);
}
