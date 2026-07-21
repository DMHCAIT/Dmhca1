import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function StudentProfileForm({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    date_of_birth: '',
    qualification: '',
    specialization: '',
    experience_years: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      if (!userId) throw new Error('User not authenticated');

      // TODO: Save to Supabase via API endpoint
      // For now, just save locally
      if (typeof window !== 'undefined') {
        localStorage.setItem('studentProfile', JSON.stringify(formData));
      }
      onSuccess(formData);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Complete Your Profile</h2>

        <div className="grid grid-cols-2 gap-4">
          <Input
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <Input
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <Input
            name="date_of_birth"
            type="date"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
          <Input
            name="qualification"
            placeholder="Qualification (e.g., MBBS, MD)"
            value={formData.qualification}
            onChange={handleChange}
          />
          <Input
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
          <Input
            name="experience_years"
            type="number"
            placeholder="Years of Experience"
            value={formData.experience_years}
            onChange={handleChange}
          />
          <Input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <Input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <Input
            name="postal_code"
            placeholder="Postal Code"
            value={formData.postal_code}
            onChange={handleChange}
          />
          <Input
            name="address"
            placeholder="Address"
            className="col-span-2"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

        <div className="flex gap-3 mt-6">
          <Button onClick={handleSubmit} disabled={loading} className="flex-1">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Save Profile
          </Button>
          <Button onClick={onClose} variant="outline" className="flex-1">
            Skip for Now
          </Button>
        </div>
      </div>
    </div>
  );
}
