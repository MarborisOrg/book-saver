import { Request, Response } from 'express'

import { signJWT } from '#routes/modules/jwt/ref-acc-token'

export const loginController = (req: Request, res: Response): void => {
  const { username, password } = req.body

  if (
    username === configs.EnvConfig.admin_user &&
    password === configs.EnvConfig.admin_pass
  ) {
    res.json(signJWT())
  }

  res.status(401).json({ message: 'Invalid credentials' })
}
