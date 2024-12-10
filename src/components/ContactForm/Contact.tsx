import { Button } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing React Icons

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    anrede: "",
    titel: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
    agreement: false,
  });
  const { t } = useTranslation("contact");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Handle checkbox specifically
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [name]: e.target.checked, // Access the checked property safely
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY", // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitMessage("Nachricht erfolgreich gesendet! Vielen Dank.");
        setFormData({
          anrede: "",
          titel: "",
          vorname: "",
          nachname: "",
          email: "",
          telefon: "",
          betreff: "",
          nachricht: "",
          agreement: false,
        });
      } else {
        throw new Error("Failed to send the form");
      }
    } catch (error) {
      setSubmitMessage(
        "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center min-h-screen py-28 bg-white px-8 lg:px-20 shadow-lg rounded-md space-y-6 md:space-y-0 md:space-x-12">
      <div className="space-y-4 md:w-1/2">
        <p className="font-medium text-customRed mb-1 uppercase">
          {t("contact")}
        </p>
        <h2 className="text-3xl font-semibold mb-12 sm:mb-20 text-left uppercase">
          {t("title")}
        </h2>
        <p className="text-text text-lg">{t("text")}</p>
        <div className="space-y-4 mt-6 ">
          <div className="flex items-center text-gray-600 pb-5 pt-5">
            <FaPhone className="mr-4 w-9 h-9 text-customRed" />
            <span className="text-base"> +1 234 5678 90</span>
          </div>
          <div className="flex items-center text-gray-600 pb-5">
            <FaMapMarkerAlt className="mr-4 w-9 h-9 text-customRed" />
            <span>Address</span>
          </div>
          <div className="flex items-center text-gray-600 pb-5">
            <FaEnvelope className="mr-4 w-9 h-9 text-customRed" />
            <span>email@address.com</span>
          </div>
        </div>
      </div>

      <form
        className="bg-gray-100 rounded-lg p-6 w-full md:w-1/2 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="anrede" className="text-text text-sm">
              {t("salutation")}<span className="text-customRed">*</span>
            </label>
            <input
              id="anrede"
              name="anrede"
              type="text"
              value={formData.anrede}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="titel" className="text-text text-sm">
              {t("title1")}
            </label>
            <input
              id="titel"
              name="titel"
              type="text"
              value={formData.titel}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="vorname" className="text-text text-sm">
              {t("name")}<span className="text-customRed">*</span>
            </label>
            <input
              id="vorname"
              name="vorname"
              type="text"
              value={formData.vorname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="nachname" className="text-text text-sm">
              {t("surname")}<span className="text-customRed">*</span>
            </label>
            <input
              id="nachname"
              name="nachname"
              type="text"
              value={formData.nachname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-text text-sm">
              {t("email")}<span className="text-customRed">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="telefon" className="text-text text-sm">
              {t("phone")}
            </label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              value={formData.telefon}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="betreff" className="text-text text-sm">
            {t("reference")}<span className="text-customRed">*</span>
          </label>
          <input
            id="betreff"
            name="betreff"
            type="text"
            value={formData.betreff}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="nachricht" className="text-text text-sm">
            {t("message")}
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={4}
            value={formData.nachricht}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-dividers rounded-md text-sm focus:ring-red-500 focus:border-red-500"
          ></textarea>
        </div>

        {/* Checkbox with updated layout */}
        <div className="flex flex-col items-start mt-4 space-x-2">
          <p className="font-medium">{t("data")}<span className="text-customRed">*</span></p>
          <div className="flex flex-row space-x-2 pt-2">
            <input
              name="agreement"
              type="checkbox"
              checked={formData.agreement}
              onChange={handleChange}
              className="form-checkbox text-customRed"
              required
            />
            <span className="text-sm font-normal">{t("accept")}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`mt-6 w-[174px] h-[58px] bg-customRed justify-center text-white py-2 px-4 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Senden..." : "Absenden"}
          </button>

          {submitMessage && (
            <p
              className={`p-4 text-sm ${
                submitMessage.includes("Fehler")
                  ? "text-customRed"
                  : "text-text"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
