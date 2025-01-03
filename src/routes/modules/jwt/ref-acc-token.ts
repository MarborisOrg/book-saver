// refresh/access token signer
import jwt from 'jsonwebtoken'

import { accessPass, refreshPass } from '../../config/config.js'

export const signJWT = (): {
  accessToken: string
  refreshToken: string
} => {
  const accessToken = jwt.sign({ role: 'admin', type: 'access' }, accessPass, {
    expiresIn: '15m',
  })

  const refreshToken = jwt.sign(
    { role: 'admin', type: 'refresh' },
    refreshPass,
    {
      expiresIn: '30d',
    }
  )

  return { accessToken, refreshToken }
}
