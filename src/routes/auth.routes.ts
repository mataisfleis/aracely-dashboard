import { type Request, type Response, Router } from "express";
import passport from "passport";

const router = Router();

router.get('/', passport.authenticate('discord'))
router.get('/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
	res.redirect(`${process.env.APP_FRONTEND_URL}/dashboard`);
})
router.get('/logout', (req, res) => {
	req.logout((err) => {
		if(err) console.error(err);
		res.redirect(`${process.env.APP_FRONTEND_URL}`)
	});
})


export default router;