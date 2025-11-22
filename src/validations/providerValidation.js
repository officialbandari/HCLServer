const { z } = require('zod');

// Provider creation validation
const providerCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  specialization: z.string().min(1, "Specialization is required").max(100),
  licenseNumber: z.string().min(1, "License number is required").max(50),
  clinic: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  experience: z.number().int().min(0).max(50).optional(),
});

// Provider update validation
const providerUpdateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  specialization: z.string().min(1).max(100).optional(),
  licenseNumber: z.string().min(1).max(50).optional(),
  clinic: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  experience: z.number().int().min(0).max(50).optional(),
});

// Provider login validation
const providerLoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

module.exports = {
  providerCreateSchema,
  providerUpdateSchema,
  providerLoginSchema,
};
