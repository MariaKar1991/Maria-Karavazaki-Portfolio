import { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact(): JSX.Element {
  // State variable to track the submission status
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Accessing the form element
    const form = event.target as HTMLFormElement;

    // Changing the submission status to "submitting"
    setSubmissionStatus("submitting");

    try {
      // Sending the form data via emailjs
      await emailjs.sendForm(
        "service_st0ciku", // Service ID
        "template_3mswouf", // Template ID
        form, // Form element
        "6II8XSS4gk6En0Y07" // User ID
      );

      // Changing the submission status to "success" after successful submission
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Error sending message:", error);
      // Changing the submission status to "error" if there's an error
      setSubmissionStatus("error");
    }

    // Resetting the form after submission
    form.reset();
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-animation-container">
          <div className="contact-animation-content">
            {/* Contact header */}
            <h2 className="contact-header">Contact</h2>
            <h2 className="contact-header">Contact</h2>
          </div>
        </div>
        <div key="1" className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="mb-5">
                {/* Full Name field */}
                <label
                  className="contact-label mb-3 block text-base font-medium text-[#07074D]"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="contact-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-5">
                {/* Email Address field */}
                <label
                  className="contact-label mb-3 block text-base font-medium text-[#07074D]"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="contact-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                  type="email"
                  required
                />
              </div>
              <div className="mb-5">
                {/* Message field */}
                <label
                  className="contact-label contact-message mb-3 block text-base font-medium text-[#07074D]"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="contact-input w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  rows={4}
                  required
                />
              </div>
              {/* Submit button */}
              <div>
                <button
                  className="submit-btn hover:shadow-form rounded-md bg-[#96969b] py-3 px-8 text-base font-semibold text-white outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {/* Conditional rendering based on submission status */}
              {submissionStatus === "success" && (
                <div className="submission-success">
                  Thank you, we received your message.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
