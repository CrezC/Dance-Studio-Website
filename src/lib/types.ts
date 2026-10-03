export type DanceClass = {
  slug: string;
  name: string;
  instructorSlug: string;
  dayOfWeek: string;
  time: string;
  description: string;
  price: string;
  availability: "open" | "limited" | "full";
  registrationUrl: string;
};

export type Instructor = {
  slug: string;
  name: string;
  bio: string;
  photoUrl?: string;
};

export type Testimonial = {
  author: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
