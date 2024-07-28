import {
	Request,
	Response,
	NextFunction
  } from 'express';

export const validateDiscordUser = ( req: Request, res: Response, next: NextFunction ) => {
	if(req.isAuthenticated()) return next(null)
		res.redirect('/auth')
}