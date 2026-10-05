// Classes and Instructors are modeled in prisma/schema.prisma and typed via
// the generated Prisma Client. The types below are for content that doesn't
// (yet) need a database row.

export type Testimonial = {
  author: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
