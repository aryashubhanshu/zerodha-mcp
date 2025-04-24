# Zerodha-MCP

This is a Model Context Protocol (MCP) server that provides a set of tools for interacting with the Zerodha exchange.


Claude Desktop Configuration
=============================

To use this server with Claude Desktop, you need to add the following configuration to your `claude_desktop_config.json` file:
{
    "mcpServers": {
        "trade": {
            "command": "/Users/shubhanshuarya/.bun/bin/bun",
            "args": [
                Path to the index.ts file
            ]
        }
    }
}
