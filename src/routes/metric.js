import {Router} from 'express';

import {saveMetricAndTraces} from '../utils';

const router = Router();

router.get('/', async (req, res) => {
  const metrics = await req.context.models.Metric.findAll();
  return res.send(metrics);
});

router.get('/:metricId', async (req, res) => {
  const metric = await req.context.models.Metric.findById(
    req.params.metricId,
  );
  return res.send(metric);
});

router.post('/', async (req, res) => {
  const metric = await saveMetricAndTraces(
    req.context.models,
    req.body.data,
  );

  return res.send(metric);
});

router.delete('/:metricId', async (req, res) => {
  await req.context.models.Metric.destroy({
    where: {id: req.params.metricId},
  });

  return res.send(true);
});

export default router;
