import { Router } from 'express';
import { registerUser } from './registration.controller.js';

export const registrationRouter = Router();

registrationRouter.post('/', registerUser);
