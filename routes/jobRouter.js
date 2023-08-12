import { Router } from 'express';
const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/jobController.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;