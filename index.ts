import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { placeOrder } from "./trade";

// Create an MCP server
const server = new McpServer({
  name: "Zerodha-MCP",
  version: "1.0.0",
});

server.tool(
  "add-two-numbers",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  })
);

server.tool(
    "buy-a-stock", "Buys a stock on zerodha exchange for the user. It executes a real order for the user on the exchange",
    { stock: z.string(), quantity: z.number() },
    async({ stock, quantity }) => {
        placeOrder(stock, quantity, "BUY");
        return {
            content: [{ type: "text", text: "Order placed successfully" }],
        }
    }
);
// placeOrder("HARSHILAGAR", 1, "BUY");

server.tool(
    "sell-a-stock", "Sells a stock on zerodha exchange for the user. It executes a real order for the user on the exchange",
    { stock: z.string(), quantity: z.number() },
    async({ stock, quantity }) => {
        placeOrder(stock, quantity, "SELL");
        return {
            content: [{ type: "text", text: "Order placed successfully" }],
        }
    }
);
// // placeOrder("HARSHILAGAR", 1, "SELL");

const transport = new StdioServerTransport();
await server.connect(transport);