export const mcpConfig = {
  mcpServers: {
    stitch: {
      serverUrl: "https://stitch.googleapis.com/mcp",
      headers: {
        "X-Goog-Api-Key": process.env.STITCH_API_KEY!
      }
    }
  }
} as const;

export type McpConfig = typeof mcpConfig;
