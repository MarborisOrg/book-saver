import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { accessPass } from '#apps/server/routes/config/config';
const tokenSchema = Joi.object({
    token: Joi.string().required(),
});
const checkAdmin = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1] || '';
        const { error } = tokenSchema.validate({ token });
        if (error) {
            res.status(400).json({ message: 'Invalid token format' });
            return;
        }
        jwt.verify(token, accessPass, (err, decoded) => {
            if (err) {
                res.status(403).json({ message: 'Invalid token' });
                return;
            }
            if (decoded.type !== 'access') {
                res.status(403).json({ message: 'Invalid token type' });
                return;
            }
            if (decoded.role === 'admin') {
                next();
            }
            else {
                res.status(403).json({ message: 'Access denied' });
                return;
            }
        });
    }
    catch (error) {
        log.error(error);
        res
            .status($.HttpStatus.INTERNAL_SERVER_ERROR.code)
            .json({ message: $.HttpStatus.INTERNAL_SERVER_ERROR.message });
    }
};
export default checkAdmin;
