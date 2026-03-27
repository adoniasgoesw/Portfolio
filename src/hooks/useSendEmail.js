import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

export function useSendEmail() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = useCallback(async ({ name, email, message }) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const toEmail =
      import.meta.env.VITE_CONTACT_TO_EMAIL || "adoniasgoes86@gmail.com";

    if (!serviceId || !templateId || !publicKey) {
      const missing = [
        !serviceId ? "VITE_EMAILJS_SERVICE_ID" : null,
        !templateId ? "VITE_EMAILJS_TEMPLATE_ID" : null,
        !publicKey ? "VITE_EMAILJS_PUBLIC_KEY" : null,
      ].filter(Boolean);

      console.error(
        "[EmailJS] Email service is not configured. Missing environment variables:",
        missing.join(", ")
      );
      console.error(
        "[EmailJS] Vite bakes VITE_* at build time. On Netlify: Site settings → Environment variables → add these keys for Production, then trigger a new deploy."
      );
      setSuccess(false);
      return false;
    }

    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          title: "New Portfolio Contact Message",
          name,
          time: new Date().toLocaleString(),
          message,
          email,
          to_email: toEmail,
        },
        { publicKey }
      );

      setSuccess(true);
      return true;
    } catch (err) {
      console.error("[EmailJS] Failed to send message:", err);
      return false;
    } finally {
      setSending(false);
    }
  }, []);

  const clearStatus = useCallback(() => {
    setSuccess(false);
  }, []);

  return {
    sendEmail,
    sending,
    success,
    clearStatus,
  };
}
