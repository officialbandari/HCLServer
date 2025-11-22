const { z } = require('zod');

// Patient creation validation (without role, we set internally)
const patientCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  age: z.number().int().min(0).max(150).optional(),
  allergies: z.string().max(500, "Allergies description too long").optional(),
  medications: z.string().max(500, "Medications description too long").optional(),
  height: z.number().min(1).max(300).optional(), // cm
  weight: z.number().min(1).max(500).optional(), // kg
  bloodgroup: z.string().regex(/^(A|B|AB|O)[+-]$/, "Invalid blood group").optional(),
  bodymass: z.number().min(1).max(100).optional(),
});

// Patient update validation (all fields optional)
const patientUpdateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  age: z.number().int().min(0).max(150).optional(),
  allergies: z.string().max(500).optional(),
  medications: z.string().max(500).optional(),
  height: z.number().min(1).max(300).optional(),
  weight: z.number().min(1).max(500).optional(),
  bloodgroup: z.string().regex(/^(A|B|AB|O)[+-]$/).optional(),
  bodymass: z.number().min(1).max(100).optional(),
});

// Login validation
const patientLoginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

module.exports = {
  patientCreateSchema,
  patientUpdateSchema,
  patientLoginSchema,
};
