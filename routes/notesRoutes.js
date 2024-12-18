const express = require('express');
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/noteControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getNotes);
router.post('/', protect, createNote);
router.put('/:id', protect, updateNote);
router.delete('/:id', protect, deleteNote);

module.exports = router;
