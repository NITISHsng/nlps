"use client";
import { CheckCircle, FileText, Download, Calendar, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Admissions() {
  const [admissionSettings, setAdmissionSettings] = useState<any>(null);

  useEffect(() => {
    async function loadSettings() {
      const { data } = await supabase.from('admissions_settings').select('*').limit(1).single();
      if (data) setAdmissionSettings(data);
    }
    loadSettings();
  }, []);
  const eligibilityCriteria = [
    { class: 'Class V', requirement: 'Completion of Class IV or equivalent' },
    { class: 'Class VI-VIII', requirement: 'Previous class pass certificate' },
    { class: 'Class IX', requirement: 'Madhyamik pass certificate with minimum 40%' },
    { class: 'Class XI', requirement: 'Madhyamik (Class X) pass certificate from recognized board' },
  ];

  const requiredDocuments = [
    'Birth Certificate (Original & Photocopy)',
    'Previous Class Mark Sheet and Pass Certificate',
    'Transfer Certificate from previous school',
    'Caste Certificate (if applicable)',
    'Aadhaar Card (Student & Parent)',
    '4 Recent Passport Size Photographs',
    'Income Certificate (for fee concession)',
    'Bank Account Details',
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Collect Admission Form',
      description: 'Visit school office or download the form online during admission period',
    },
    {
      step: 2,
      title: 'Fill Application Form',
      description: 'Complete the form with accurate information and attach required documents',
    },
    {
      step: 3,
      title: 'Submit Form',
      description: 'Submit the completed form along with all documents at the school office',
    },
    {
      step: 4,
      title: 'Document Verification',
      description: 'School will verify all submitted documents and eligibility criteria',
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Receive admission confirmation and complete fee payment',
    },
  ];

  const importantDates = [
    { event: 'Admission Notice Release', date: 'January 15, 2024' },
    { event: 'Form Submission Start', date: 'January 20, 2024' },
    { event: 'Form Submission End', date: 'February 28, 2024' },
    { event: 'Merit List Publication', date: 'March 5, 2024' },
    { event: 'Admission Process', date: 'March 10-20, 2024' },
    { event: 'Classes Commence', date: 'April 1, 2024' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100">Join Our Academic Community - Admissions Open for 2024-25</p>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className={`text-white p-6 rounded-lg inline-block ${admissionSettings?.is_open ? 'bg-blue-900' : 'bg-gray-600'}`}>
              <AlertCircle className="w-12 h-12 mx-auto mb-3" />
              <h2 className="text-2xl font-bold mb-2">
                {admissionSettings?.is_open ? 'Admissions Now Open!' : 'Admissions Currently Closed'}
              </h2>
              {admissionSettings?.announcement_text && (
                <p className={`${admissionSettings?.is_open ? 'text-blue-100' : 'text-gray-200'} whitespace-pre-line`}>
                  {admissionSettings.announcement_text}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Eligibility Criteria</h2>
            <p className="text-gray-600">Age and academic requirements for admission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eligibilityCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-blue-900"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{criteria.class}</h3>
                <p className="text-gray-700">{criteria.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Required Documents</h2>
            <p className="text-gray-600">Please prepare these documents for admission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Admission Process</h2>
            <p className="text-gray-600">Follow these simple steps to complete your admission</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {admissionSteps.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < admissionSteps.length - 1 && (
                    <div className="border-l-2 border-blue-200 h-8 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Important Dates</h2>
            <p className="text-gray-600">Mark your calendar with these crucial dates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <Calendar className="w-10 h-10 text-blue-900 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.event}</h3>
                <p className="text-blue-900 font-semibold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-2xl text-center">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Download Admission Form</h2>
              <p className="text-blue-100 mb-6">
                Get the official admission form and start your journey with us
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                                {admissionSettings?.form_url ? (
                   <a href={admissionSettings.form_url} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center space-x-2">
                     <Download className="w-5 h-5" />
                     <span>Download Form (PDF)</span>
                   </a>
                ) : (
                   <button disabled className="bg-blue-800 text-blue-300 px-8 py-3 rounded-lg font-semibold cursor-not-allowed flex items-center space-x-2 border border-blue-700">
                     <Download className="w-5 h-5 opacity-50" />
                     <span>Form Not Available Yet</span>
                   </button>
                )}
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
                  Apply Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Admission Guidelines</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Admission is subject to availability of seats and verification of documents</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>All information provided in the application form must be accurate and truthful</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Parents must visit the school office in person for final admission</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>Fee structure will be provided at the time of admission</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 mt-2"></span>
                <span>School uniform and books can be purchased from authorized vendors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
