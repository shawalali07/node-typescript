import express from 'express';
import {
  addContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from '../controllers/contact';

const router = express.Router();

router.route('/').post(addContact).get(getContacts);
router.route('/:id').put(updateContact).delete(deleteContact).get(getContact);

export default router;
