import {
	Request,
	Response,
	NextFunction
  } from 'express';
import Joi, {
	ValidationError,
	ValidationResult
} from 'joi';
import { User } from "../../models/users.models";

const userSchema = Joi.object({
	id: Joi.number().integer().required(),
	name: Joi.string().required(),
	password: Joi.string().required().min(8),
})

export const validateDiscordUser = ( req: Request, res: Response, next: NextFunction ) => {
	if(req.isAuthenticated()) return next(null)
		res.redirect('/auth')
}