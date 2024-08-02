import { Request, Response } from 'express';
import Booking from '../models/booking.model';
import Event from '../models/event.model';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, eventId, quantity } = req.body;
    if (quantity > 15) {
      return res.status(400).json({ error: 'Cannot book more than 15 tickets per request' });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    if (event.bookedTickets + quantity > event.totalTickets) {
      return res.status(400).json({ error: 'Not enough tickets available' });
    }

    event.bookedTickets += quantity;
    await event.save();

    const booking = new Booking({ userId, eventId, quantity });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const event = await Event.findById(booking.eventId);
    if (event) {
      event.bookedTickets -= booking.quantity;
      await event.save();
    }

    await Booking.deleteOne({ _id: id });
    res.status(200).json({ message: 'Booking canceled' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const printTicket = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId).populate('eventId');
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(200).json({ booking, event: booking.eventId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
