import https from "https";
import { GuildInfo } from "passport-discord";

export function getBotGuilds(): Promise<GuildInfo[]> {
  return new Promise<GuildInfo[]>((resolve, reject) => {
	const data: Buffer[] = [];
  https.get(
    "https://discord.com/api/v10/users/@me/guilds",
    {
      headers: {
        Authorization: `Bot ${process.env.CLIENT_TOKEN}`,
      },
    },
    async (res) => {
       res.on("data", (chunk) => {
        data.push(chunk);
      });
       res.on("end", () => {
        resolve(JSON.parse(Buffer.concat(data).toString()));
      });
       res.on("error", (err) => {
        console.error(err);
      });
    }
  );
  })

}
