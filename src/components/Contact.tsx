import React, { useState } from 'react';

const Contact: React.FC = () => {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; msg: string }>(null);

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.';
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) return 'Please enter a valid email address.';
    if (message.trim().length < 10) return 'Please enter a message (at least 10 characters).';
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ type: 'error', msg: err });
      return;
    }
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('your_form_id')) {
      setStatus({ type: 'error', msg: 'Form is not configured yet. Please provide a valid Formspree endpoint.' });
      return;
    }
    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      // Optional: subject line
      formData.append('_subject', `Portfolio Contact from ${name}`);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      if (res.ok) {
        setStatus({ type: 'success', msg: 'Thanks! Your message has been sent.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => null);
        const apiMsg = data?.errors?.[0]?.message || data?.message;
        setStatus({ type: 'error', msg: apiMsg || 'Sending failed. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>Want to work together? Reach out:</p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          {status && (
            <div className={`form-status ${status.type}`}>{status.msg}</div>
          )}
          <div className="form-actions">
            <button className="btn primary" type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>

        <div className="contact-links">
          <a className="btn" href="mailto:adarshbalan214@gmail.com">mail me</a>
          <a className="btn" href="https://www.linkedin.com/in/adarshbalan/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a className="btn" href="https://github.com/Adarshxox" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className="btn" href="https://x.com/Adarshxox" target="_blank" rel="noreferrer noopener">X/Twitter</a>
          <a className="btn" href="https://www.instagram.com/adarshxox/" target="_blank" rel="noreferrer noopener">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
