import { Request, Response } from 'express';
import Contact from '../models/Contact';

export const addContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

export const getContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: req.body });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: 'Contact deleted' });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
