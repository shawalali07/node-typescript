import { Schema, model } from 'mongoose';

interface IContact {
  firstName: string;
  lastName: string;
}

const contactSchema = new Schema<IContact>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Contact = model<IContact>('Contact', contactSchema);

export default Contact;
