# 📧 Contact Form Setup Guide

Your contact form is now fully implemented with security features! Currently, it's set up with **simulated submission** for testing. Follow one of these options to connect it to a real backend.

---

## 🔒 Security Features Already Implemented

* **Honeypot Field**: Hidden field that bots will fill, triggering rejection

* **Rate Limiting**: Prevents spam by limiting submissions to 1 every 5 seconds

* **Input Validation**: Client-side validation for all required fields

* **Email Format Validation**: Ensures valid email addresses

* **XSS Protection**: React automatically escapes user input

* **Error Handling**: Graceful error messages in both languages

---

## 🚀 Option 1: FormSpree (Easiest - 5 minutes)

**Best for:** Quick setup, no backend needed

### Steps:

1. Go to [FormSpree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form and get your Form ID
4. In `ContactSection.jsx`, find line ~72 and replace:

```javascript
// Replace the simulated submission with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _subject: `New contact from ${formData.name}`,
    })
});

if (!response.ok) {
    throw new Error('Form submission failed');
}
```

5. Remove the simulated delay line:
```javascript
// Delete this line:
await new Promise(resolve => setTimeout(resolve, 1500));
```

**Free tier includes:** 50 submissions/month

---

## 🚀 Option 2: EmailJS (No Backend Required)

**Best for:** Direct email delivery without server

### Steps:

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up and create an email service
3. Get your Service ID, Template ID, and Public Key
4. Install EmailJS:

```bash
npm install @emailjs/browser
```

5. In `ContactSection.jsx`, add at the top:

```javascript
import emailjs from '@emailjs/browser';
```

6. Replace the submission logic (line ~72):

```javascript
// Initialize EmailJS (do this once in your app)
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit function:
const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
};

const response = await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams
);

if (response.status !== 200) {
    throw new Error('Email sending failed');
}
```

**Free tier includes:** 200 emails/month

---

## 🚀 Option 3: Netlify Forms (If deploying on Netlify)

**Best for:** Already using Netlify for hosting

### Steps:

1. Add `netlify` attribute to the form tag in `ContactSection.jsx`:

```jsx
<form onSubmit={handleSubmit} className="space-y-4" netlify>
```

2. Add a hidden input for Netlify:

```jsx
<input type="hidden" name="form-name" value="contact" />
```

3. Update the submission handler:

```javascript
const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
        'form-name': 'contact',
        'name': formData.name,
        'email': formData.email,
        'phone': formData.phone,
        'message': formData.message,
    }).toString()
});

if (!response.ok) {
    throw new Error('Form submission failed');
}
```

**Free tier includes:** 100 submissions/month

---

## 🚀 Option 4: Custom Backend (Most Control)

**Best for:** Advanced users who want full control

### Option 4a: AWS Lambda + API Gateway

Create a serverless function to handle form submissions and send emails via AWS SES.

### Option 4b: Node.js Backend

Create a simple Express.js API endpoint:

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    // Send email
    await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com',
        subject: `New contact from ${name}`,
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    });
    
    res.json({ success: true });
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

Then update the fetch URL in `ContactSection.jsx` to your backend URL.

---

## 🧪 Testing the Current Setup

The form currently **simulates** a successful submission. You can test:

1. Fill out the form with valid data
2. Click "Send Message"
3. You'll see a loading spinner
4. After 1.5 seconds, you'll see a success message
5. The form will reset

### Test Security Features:

- **Validation**: Try submitting with empty fields
- **Email validation**: Try an invalid email format
- **Rate limiting**: Try submitting twice quickly
- **Honeypot**: Bots will be blocked automatically

---

## 📝 Recommended Next Steps

1. **Choose a service** (I recommend FormSpree for simplicity)
2. **Set up the service** following the steps above
3. **Test thoroughly** with real submissions
4. **Configure notifications** so you get alerts for new messages
5. **Update email address** in the contact info section (currently `contact@pedrorojas.dev`)

---

## ⚠️ Important Notes

- **Never expose API keys in frontend code** - use environment variables
- **Always validate on the backend** even though we validate on frontend
- **Consider adding reCAPTCHA** for additional bot protection if needed
- **Monitor your submission quota** on your chosen service
- **Test both English and Spanish** form submissions

---

## 🔐 Environment Variables Setup

Create a `.env` file in your project root:

```env
VITE_FORMSPREE_ID=your_form_id_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then access them in your code:
```javascript
const formId = import.meta.env.VITE_FORMSPREE_ID;
```

**Don't forget** to add `.env` to your `.gitignore`!

---

Need help? Contact me! 🚀
