import React, { useState } from 'react'
import Button from './Button';
import axios from 'axios';

const RegistrationModel = ({ eventId, isOpen, onClose }: { eventId: String, isOpen: Boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event_id: eventId
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(Boolean)
  const [errorMessage, setErrorMessage] = useState(String)
  const [isRegisteredSuccessfullyMessage, setIsRegisteredSuccessfullyMessage] = useState(String)

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/register/event-register', formData)
      if (response.data) {
        console.log(response.data)
        setLoading(false)
        setIsRegisteredSuccessfullyMessage("Congrats You have Registered For The Event")
        setTimeout(() => {
          onClose()
        }, 2000);
      }
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
        <div className='flex justify-between items-center'>
        <h2 className="text-xl font-semibold mb-4">Registration</h2>
        <Button text='Close' onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <Button
            text={loading ? 'Submitting...' : 'Submit'}
            type="submit"
            loading={loading}
            className="w-full mt-2"
            disabled={loading}
          />
        </form>
        {!error ?
          (
            <div className='mt-2'>
              <h1 className='text-green-500'>{isRegisteredSuccessfullyMessage}</h1>
            </div>
          )
          :
          (
            <div>
              <h1 className='text-red-500'>{errorMessage}</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default RegistrationModel