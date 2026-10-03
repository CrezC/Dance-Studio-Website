import type { DanceClass, FaqItem, Instructor, Testimonial } from "./types";

// Placeholder content — replace with real studio data, or swap this module
// for a CMS/database query once the admin backend exists (see execution plan).

export const instructors: Instructor[] = [
  {
    slug: "jane-doe",
    name: "Jane Doe",
    bio: "10+ years teaching contemporary and ballet.",
  },
  {
    slug: "john-smith",
    name: "John Smith",
    bio: "Specializes in hip-hop and youth classes.",
  },
];

export const classes: DanceClass[] = [
  {
    slug: "contemporary-intro",
    name: "Contemporary — Intro",
    instructorSlug: "jane-doe",
    dayOfWeek: "Tuesday",
    time: "6:00 PM – 7:00 PM",
    description: "A beginner-friendly introduction to contemporary dance.",
    price: "$20 / class",
    availability: "open",
    registrationUrl: "https://example.com/register/contemporary-intro",
  },
  {
    slug: "hip-hop-youth",
    name: "Hip-Hop — Youth (8–12)",
    instructorSlug: "john-smith",
    dayOfWeek: "Thursday",
    time: "4:30 PM – 5:30 PM",
    description: "High-energy hip-hop class for kids.",
    price: "$18 / class",
    availability: "limited",
    registrationUrl: "https://example.com/register/hip-hop-youth",
  },
];

export const testimonials: Testimonial[] = [
  {
    author: "Maria P.",
    quote: "My daughter has grown so much as a dancer here!",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do I need prior dance experience?",
    answer: "No — most of our classes welcome all skill levels.",
  },
  {
    question: "How do I sign a liability waiver?",
    answer: "You'll get a waiver link by email after registering for your first class.",
  },
];
