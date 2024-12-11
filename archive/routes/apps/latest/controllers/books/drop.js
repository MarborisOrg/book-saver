import { call } from '#databases/database.call.module';
export const dropBookController = async (_req, res) => {
    try {
        const result = await call('drop');
        res.send({ success: true, output: result });
    }
    catch (error) {
        log.error('Error on deleting: ', error);
        res.status(500).send({ success: false, output: null });
    }
};
