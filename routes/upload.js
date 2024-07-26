const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
  try {
    res.send('File uploaded successfully!');
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
