import { Client } from "discord.js";

const client = new Client();
const BOT_TOKEN = process.env["DISCORD_BOT_TOKEN"];

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("message", (msg) => {
	if (msg.content === "ping") {
		msg.reply("Pong!");
	}
});

client.login(BOT_TOKEN);
