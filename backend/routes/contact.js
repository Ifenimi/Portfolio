const express = require("express");
const router = express.Router();

// POST /api/contact
// REPLACE_ME: this currently just validates and logs the message.
// Wire up real email delivery (e.g. nodemailer + SMTP, or a service like
// Resend/SendGrid) using the SMTP_* vars in .env before going to production.
router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // REPLACE_ME: send the email / persist the lead here.
  console.log("New contact form submission:", { name, email, message });

  res.status(201).json({ success: true, message: "Message received" });
});

module.exports = router;
