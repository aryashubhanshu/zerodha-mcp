import { KiteConnect } from "kiteconnect";

const apiKey = "";
// const apiSecret = "";
// const requestToken = "";
let accessToken = "";

const kc = new KiteConnect({ api_key: apiKey });

// console.log(kc.getLoginURL());

export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
    kc.setAccessToken(accessToken);
    // await generateSession();
    const order = await kc.placeOrder("regular", {
        exchange: "NSE",
        tradingsymbol,
        transaction_type: type,
        quantity,
        product: "CNC",
        order_type: "MARKET"
    });
    // console.log("Order placed:", order);
  } catch (err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     console.log(response.access_token);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }
