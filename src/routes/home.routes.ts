import { Router, Request, Response } from 'express';

// New Router instance
const router = Router();

// Home routes
router.get('/', (req: Request, res: Response) => {
  res.status(204)
});

export default router;