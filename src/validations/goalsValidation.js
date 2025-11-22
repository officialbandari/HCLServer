const { z } = require('zod');
const mongoose = require('mongoose');

// Goal creation validation
const goalCreateSchema = z.object({
  patientId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid patientId format",
  }),
  date: z.string().min(1, "Date is required"),
  steps: z.number().int().min(0).default(0),
  water: z.number().min(0).default(0),
  sleep: z.number().min(0).default(0),
});

// Goal update validation
const goalUpdateSchema = z.object({
  date: z.string().optional(),
  steps: z.number().int().min(0).optional(),
  water: z.number().min(0).optional(),
  sleep: z.number().min(0).optional(),
});

module.exports = {
  goalCreateSchema,
  goalUpdateSchema,
};
