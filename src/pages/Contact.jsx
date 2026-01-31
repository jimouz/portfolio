import { Box, Typography, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';


export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (form.company.trim() !== '') {
      console.log('Bot detected — submission blocked');
      return;
    }
    // Empty field validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "a85310bd-24f2-4554-8691-9eb0db889a7d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
      setForm({
        name: '',
        email: '',
        message: '',
        company: '',
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        maxWidth: '900px',
        minHeight: '80vh',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: '-1px', mb: 3 }}>
        Contact
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.7,
          mb: 4,
        }}
      >
        Feel free to reach out for collaborations, projects, or any inquiries.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {/* Honeypot field */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-100"
          autoComplete="off"
        />

        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          required
        />

        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          type="email"
          required
        />

        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            py: 1.5,
            borderRadius: '10px',
            fontSize: '1rem',
          }}
        >
          Send Message
        </Button>

        {result && (
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>
            {result}
          </Typography>
        )}
      </Box>
      {error && (
        <Typography sx={{ mt: 1, color: 'error.main' }}>
          {error}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          mt: 20,
          mb: -10,
        }}
      >
        <Button
          href="https://github.com/jimouz"
          target="_blank"
          sx={{ color: 'text.secondary' }}
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
        <Button
          href="https://www.linkedin.com/in/jimouz/"
          target="_blank"
          sx={{ color: 'text.secondary' }}
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
}