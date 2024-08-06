
// src/ResumeBuilder.js
import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    education: [{ university: '', degree: '', year: '' }],
    experience: [{ title: '', company: '', location: '', start: '', end: '', responsibilities: '' }],
    skills: ''
  });

  const handleChange = (e, index, field, section) => {
    if (section) {
      const newSection = formData[section].map((item, i) => 
        i === index ? { ...item, [field]: e.target.value } : item
      );
      setFormData({ ...formData, [section]: newSection });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addSection = (section) => {
    setFormData({ ...formData, [section]: [...formData[section], {}] });
  };

  const removeSection = (index, section) => {
    const newSection = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: newSection });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2">
                  <label className="block text-gray-700">University</label>
                  <input
                    type="text"
                    value={edu.university}
                    onChange={(e) => handleChange(e, index, 'university', 'education')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, index, 'degree', 'education')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Year</label>
                  <input
                    type="text"
                    value={edu.year}
                    onChange={(e) => handleChange(e, index, 'year', 'education')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSection(index, 'education')}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addSection('education')}
              className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
            >
              Add Education
            </button>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2">
                  <label className="block text-gray-700">Job Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleChange(e, index, 'title', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Company</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleChange(e, index, 'company', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Location</label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => handleChange(e, index, 'location', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Start Date</label>
                  <input
                    type="text"
                    value={exp.start}
                    onChange={(e) => handleChange(e, index, 'start', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">End Date</label>
                  <input
                    type="text"
                    value={exp.end}
                    onChange={(e) => handleChange(e, index, 'end', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700">Responsibilities</label>
                  <textarea
                    value={exp.responsibilities}
                    onChange={(e) => handleChange(e, index, 'responsibilities', 'experience')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeSection(index, 'experience')}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addSection('experience')}
              className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
            >
              Add Experience
            </button>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => alert('Resume Saved!')}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      {renderStep()}
    </div>
  );
};

export default ResumeBuilder;

