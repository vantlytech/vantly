import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  email: z.string().email('Invalid email address'),
  company: z.string().max(255).optional(),
  phone: z.string().max(50).optional(),
  service_interest: z.string().max(100).optional(),
  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;