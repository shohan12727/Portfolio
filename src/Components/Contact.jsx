import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "aishohan001@gmail.com",
      link: "mailto:aishohan001@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "01887104758",
      link: "tel:+8801887104758",
    },
    {
      icon: <MapPin />,
      title: "Location",
      value: "Basundhara R/A, Block C, Road no.5/A, House no.18/B",
      link: null,
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3A5F] mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Let’s build something amazing together. Drop a message and I’ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" />
                <span className="text-green-700 font-medium">
                  Message sent successfully!
                </span>
              </div>
            )}

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#1F3A5F]/20"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#1F3A5F]/20"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-lg border resize-none focus:ring-2 focus:outline-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#1F3A5F]/20"
                  }`}
                  placeholder="Write your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#1F3A5F] text-white py-3 rounded-lg hover:bg-[#162c47] transition disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-left"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow"
                >
                  <div className="p-3 rounded-lg bg-[#1F3A5F] text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-semibold text-gray-800 hover:text-[#1F3A5F]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-800">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              data-aos="fade-left"
              className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2780.233851164096!2d90.426834!3d23.820446999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ5JzEzLjYiTiA5MMKwMjUnMzYuNiJF!5e1!3m2!1sen!2sbd!4v1766916062958!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
