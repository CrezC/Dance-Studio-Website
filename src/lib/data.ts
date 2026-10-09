import type { FaqItem, Testimonial } from "./types";

// Placeholder content — replace with real studio copy.

export const studioInfo = {
  addressLines: ["123 Main Street, Suite 2", "Springfield, ST 00000"],
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@cadencedance.studio",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "11:00 AM – 4:00 PM" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    author: "Maria P.",
    quote: "My daughter has grown so much as a dancer here!",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do I need prior dance experience?",
    answer: "No — most of our classes welcome all skill levels, and instructors will call out modifications for beginners.",
  },
  {
    question: "What should I wear to class?",
    answer: "Comfortable clothing you can move in. Ballet and contemporary classes ask for bare feet or soft shoes; hip hop and salsa are fine in sneakers.",
  },
  {
    question: "How do I register for a class?",
    answer: "Each class page has a \"Register Now\" button that takes you to that class's external registration and payment link.",
  },
  {
    question: "How do I sign the liability waiver?",
    answer: "Every student signs it once before their first class — find the link on any class page, or go directly to the waiver page.",
  },
  {
    question: "Is there a trial class?",
    answer: "Yes — most classes are fine to drop into for a single session before committing to a pack. Check the class description for any exceptions.",
  },
  {
    question: "Do you offer classes for kids?",
    answer: "Yes, several of our classes are youth-specific — the class listing notes the age range where that applies.",
  },
];
