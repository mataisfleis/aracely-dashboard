import { Router } from "express";
import { validateDiscordUser } from "../utils/middlewares/users.middlewares";
import { getBotGuilds } from "../utils/bot/guilds.bot";

const router = Router();

router.get("/", validateDiscordUser, (req, res) => {
  getBotGuilds().then((g) => {
    res.json({
      profile: req.user,
      myGuilds: g,
    });
  });
});

export default router;
