const { z } = require('zod');
const mongoose = require('mongoose');

// Reminder creation validation
const reminderCreateSchema = z.object({
  patientId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid patientId format",
  }),
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  dueDate: z.string().min(1, "Due date is required"),
  status: z.enum(["upcoming", "completed", "missed"]).default("upcoming"),
});

// Reminder update validation
const reminderUpdateSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  dueDate: z.string().optional(),
  status: z.enum(["upcoming", "completed", "missed"]).optional(),
});

module.exports = {
  reminderCreateSchema,
  reminderUpdateSchema,
};
