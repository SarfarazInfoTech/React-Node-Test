const MeetingHistory = require('../../model/schema/meeting');
const mongoose = require('mongoose');

const add = async (req, res) => {
    try {
        const { agenda, attendes, attendesLead, location, related, dateTime, notes, createBy } = req.body;

        const newMeeting = new MeetingHistory({
            agenda,
            attendes,
            attendesLead,
            location,
            related,
            dateTime,
            notes,
            createBy
        });

        const savedMeeting = await newMeeting.save();
        return res.status(201).json({ success: true, message: 'Meeting created successfully', data: savedMeeting });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error creating meeting', error: error.message });
    }
};

const addMany = async (req, res) => {
    try {
        const meetings = await MeetingHistory.insertMany(req.body);
        return res.status(201).json({ success: true, message: 'Meetings added successfully', data: meetings });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error adding meetings', error: error.message });
    }
};

const index = async (req, res) => {
    try {
        const meetings = await MeetingHistory.find({ deleted: false }).populate({
            path: 'createBy',
            match: { deleted: false } // Populate only if createBy.deleted is false
        }).exec()

        return res.status(200).json({ success: true, data: meetings });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error fetching meetings', error: error.message });
    }
};

const view = async (req, res) => {
    try {
        const { id } = req.params;
        const meeting = await MeetingHistory.findById(id)
        if (!meeting) {
            return res.status(404).json({ success: false, message: 'Meeting not found' });
        }

        return res.status(200).json({ success: true, data: meeting });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error fetching meeting', error: error.message });
    }
};

const edit = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMeeting = await MeetingHistory.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedMeeting) {
            return res.status(404).json({ success: false, message: 'Meeting not found' });
        }

        return res.status(200).json({ success: true, message: 'Meeting updated successfully', data: updatedMeeting });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error updating meeting', error: error.message });
    }
};

const changeStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const meeting = await MeetingHistory.findByIdAndUpdate(id, { status }, { new: true });

        if (!meeting) {
            return res.status(404).json({ success: false, message: 'Meeting not found' });
        }

        return res.status(200).json({ success: true, message: 'Meeting status updated', data: meeting });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error updating meeting status', error: error.message });
    }
};

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const meeting = await MeetingHistory.findByIdAndUpdate(id, { deleted: true }, { new: true });

        if (!meeting) {
            return res.status(404).json({ success: false, message: 'Meeting not found' });
        }

        return res.status(200).json({ success: true, message: 'Meeting deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error deleting meeting', error: error.message });
    }
};

const deleteMany = async (req, res) => {
    try {
        await MeetingHistory.updateMany({ _id: { $in: req.body } }, { $set: { deleted: true } });

        return res.status(200).json({ success: true, message: 'Meetings deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error deleting meetings', error: error.message });
    }
};

module.exports = { add, addMany, index, view, edit, changeStatus, deleteData, deleteMany };
