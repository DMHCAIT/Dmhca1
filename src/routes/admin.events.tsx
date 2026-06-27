import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export const Route = createFileRoute('/admin/events')({
  component: EventsManagement,
});

interface Event {
  id: string;
  title: string;
  slug: string;
  event_type: string;
  date_time: string;
  location: string;
  is_active: boolean;
}

function EventsManagement() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    short_description: '',
    date_time: '',
    duration_hours: 0,
    location: '',
    event_type: 'webinar',
    speaker_name: '',
    capacity: 0,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient.from('events').select('*').order('date_time', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        const { error } = await supabaseClient
          .from('events')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabaseClient.from('events').insert([
          {
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
      }

      setShowForm(false);
      setEditingId(null);
      setFormData({
        title: '',
        slug: '',
        description: '',
        short_description: '',
        date_time: '',
        duration_hours: 0,
        location: '',
        event_type: 'webinar',
        speaker_name: '',
        capacity: 0,
      });
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Error saving event');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const { error } = await supabaseClient.from('events').delete().eq('id', id);

      if (error) throw error;
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  const handleEdit = (event: Event) => {
    setFormData({
      title: event.title,
      slug: event.slug,
      description: '',
      short_description: '',
      date_time: event.date_time,
      duration_hours: 0,
      location: event.location,
      event_type: event.event_type as any,
      speaker_name: '',
      capacity: 0,
    });
    setEditingId(event.id);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-navy-deep">Events & Webinars</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) setEditingId(null);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gold text-navy-deep rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          <Plus size={20} />
          {showForm ? 'Cancel' : 'Add Event'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Event' : 'Add New Event'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <select
              value={formData.event_type}
              onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
              className="border rounded-lg px-4 py-2"
            >
              <option value="webinar">Webinar</option>
              <option value="workshop">Workshop</option>
              <option value="conference">Conference</option>
              <option value="training">Training</option>
            </select>
            <input
              type="datetime-local"
              value={formData.date_time}
              onChange={(e) => setFormData({ ...formData, date_time: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder="Capacity"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Speaker Name"
              value={formData.speaker_name}
              onChange={(e) => setFormData({ ...formData, speaker_name: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder="Duration (hours)"
              value={formData.duration_hours}
              onChange={(e) => setFormData({ ...formData, duration_hours: parseFloat(e.target.value) })}
              className="border rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="Short Description"
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              className="border rounded-lg px-4 py-2 col-span-2"
              rows={2}
            />
            <textarea
              placeholder="Full Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border rounded-lg px-4 py-2 col-span-2"
              rows={3}
            />
          </div>
          <button
            onClick={handleSave}
            className="mt-4 px-6 py-2 bg-navy-deep text-white rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            {editingId ? 'Update Event' : 'Create Event'}
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">Loading events...</div>
      ) : events.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No events found. Create one to get started!</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-200 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Title</th>
                <th className="px-6 py-3 text-left font-semibold">Type</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Location</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{event.title}</td>
                  <td className="px-6 py-4 capitalize">{event.event_type}</td>
                  <td className="px-6 py-4">{new Date(event.date_time).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{event.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {event.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="p-2 hover:bg-yellow-100 rounded transition"
                    >
                      <Edit2 size={18} className="text-yellow-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="p-2 hover:bg-red-100 rounded transition"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
