import { Request, Response } from 'express';
import Event from '../models/event.model';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, date, totalTickets } = req.body;
    const event = new Event({ name, date, totalTickets });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
