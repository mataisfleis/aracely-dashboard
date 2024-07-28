import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-discord";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET)
  throw new Error("CLIENT_ID or CLIENT_SECRET is required");

passport.serializeUser((user, done) => {
	done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
	done(null, obj as any);
  });

passport.use(
  "discord",
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.APP_URL + "/auth/callback",
      scope: ["identify", "guilds"],
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

app.use(cors({
	origin: process.env.APP_FRONTEND_URL,
	credentials: true
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  session({
    secret: "cat_discord_keyboard_piano",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

export default app;
