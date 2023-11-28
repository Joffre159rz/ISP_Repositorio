import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  proceso_id: { type: String, required: true },
  flujo_proceso_id: { type: String, required: true },
});
