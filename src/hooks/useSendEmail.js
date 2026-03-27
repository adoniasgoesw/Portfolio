import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

export function useSendEmail() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
      ]
        .filter(Boolean)
        .join(", ");

      setSuccess(false);
      setError(`Email service is not configured. Missing: ${missing}`);
      return false;
    }

    setSending(true);
    setSuccess(false);
    setError("");

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
      setError("Failed to send message. Please try again.");
      return false;
    } finally {
      setSending(false);
    }
  }, []);

  const clearStatus = useCallback(() => {
    setSuccess(false);
    setError("");
  }, []);

  return {
    sendEmail,
    sending,
    success,
    error,
    clearStatus,
  };
}

