import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Opa, cheguei!');
})

export default router;