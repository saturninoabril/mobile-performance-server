import {Router} from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const traces = await req.context.models.Trace.findAll();
  return res.send(traces);
});

router.get('/:traceId', async (req, res) => {
  const trace = await req.context.models.Trace.findById(
    req.params.traceId,
  );
  return res.send(trace);
});

router.delete('/:traceId', async (req, res) => {
  await req.context.models.Trace.destroy({
    where: {id: req.params.traceId},
  });

  return res.send(true);
});

export default router;
