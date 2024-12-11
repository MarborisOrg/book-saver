import { signJWT } from '#apps/server/routes/modules/jwt/ref-acc-token';
export const loginController = (req, res) => {
    const { username, password } = req.body;
    if (username === $.env.config.admin_user &&
        password === $.env.config.admin_pass) {
        res.json(signJWT());
    }
    res.status(401).json({ message: 'Invalid credentials' });
};
