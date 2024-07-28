import { Router } from "express";
import { validateDiscordUser } from "../utils/validations/users.validations";
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
