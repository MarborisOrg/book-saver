import jwt from 'jsonwebtoken';
import { refreshPass } from '#apps/server/routes/config/config';
import { signJWT } from '#apps/server/routes/modules/jwt/ref-acc-token';
export const tokenController = (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        res.status(401).json({ message: 'Refresh token is required' });
        return;
    }
    jwt.verify(refreshToken, refreshPass, (err, _decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid refresh token' });
            return;
        }
        return res.json(signJWT());
    });
};
