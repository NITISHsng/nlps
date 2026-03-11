"use client";
import { CheckCircle, FileText, Download, Calendar, AlertCircle, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Admissions() {
  const [admissionSettings, setAdmissionSettings] = useState<any>(null);

  useEffect(() => {
    async function loadSettings() {
      const { data } = await supabase.from('admissions_settings').select('*').limit(1).single();
      if (data) {
        let processedForms = data.forms;
        if (typeof processedForms === 'string') {
          try { processedForms = JSON.parse(processedForms); } catch (e) { processedForms = []; }
        }
        if (!Array.isArray(processedForms)) processedForms = [];
        setAdmissionSettings({ ...data, forms: processedForms });
      }
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

      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {admissionSettings?.announcement_text && (
              <div className="mb-10 bg-blue-50 border border-blue-100 p-6 rounded-3xl flex items-center gap-6 shadow-sm">
                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg ring-4 ring-blue-100">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 block">OFFICIAL ANNOUNCEMENT</span>
                  <p className="text-blue-900 text-sm font-semibold leading-relaxed whitespace-pre-line text-left">
                    {admissionSettings.announcement_text}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {(() => {
                const forms = Array.isArray(admissionSettings?.forms) ? admissionSettings.forms : [];
                const classConfigs = admissionSettings?.class_configs || {};
                const classNames = Array.from(new Set([...forms.map((f: any) => f.target_class || 'General'), 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'])).filter(Boolean);
                
                return classNames.sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).map(className => {
                  const config = classConfigs[className] || { is_open: false, start_date: '', end_date: '' };
                  const now = new Date();
                  const start = config.start_date ? new Date(config.start_date) : null;
                  const end = config.end_date ? new Date(config.end_date) : null;
                  
                  let status: 'OPEN' | 'CLOSED' | 'UPCOMING' = 'CLOSED';
                  if (config.is_open) {
                    if (start && now < start) status = 'UPCOMING';
                    else if (end && now > end) status = 'CLOSED';
                    else status = 'OPEN';
                  }

                  return (
                    <div key={className} className={`p-5 rounded-3xl border-2 transition-all duration-300 ${
                      status === 'OPEN' ? 'bg-white border-green-100 shadow-green-100 shadow-xl' :
                      status === 'UPCOMING' ? 'bg-white border-blue-100 shadow-blue-100 shadow-lg' :
                      'bg-gray-50 border-gray-100 opacity-60'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${
                          status === 'OPEN' ? 'bg-green-100 text-green-700' :
                          status === 'UPCOMING' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-200 text-gray-500'
                        }`}>
                          {className.replace(/[^0-9]/g, '') || (className === 'General' ? 'G' : className[0])}
                        </div>
                        <div className={`px-2 py-0.5 rounded-lg text-[9px] font-black tracking-widest border ${
                          status === 'OPEN' ? 'border-green-200 text-green-600 uppercase' :
                          status === 'UPCOMING' ? 'border-blue-200 text-blue-600 uppercase' :
                          'border-gray-200 text-gray-400 uppercase'
                        }`}>
                          {status}
                        </div>
                      </div>
                      
                      <h4 className="font-black text-gray-900 mb-2 truncate uppercase tracking-tight">{className}</h4>
                      
                      <div className="space-y-1 mt-auto">
                        {status === 'OPEN' ? (
                          <div className="flex flex-col">
                            <span className="text-[10px] text-green-600 font-bold uppercase tracking-tighter">Closing At:</span>
                            <span className="text-xs font-black text-gray-700">{end ? end.toLocaleDateString() + ' ' + end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Continuous'}</span>
                          </div>
                        ) : status === 'UPCOMING' ? (
                          <div className="flex flex-col">
                            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">Opening On:</span>
                            <span className="text-xs font-black text-gray-700">{start ? start.toLocaleDateString() + ' ' + start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'TBA'}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Status:</span>
                            <span className="text-xs font-black text-gray-400">Not Accepting</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                });
              })()}
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
<div className="w-full max-w-6xl mx-auto space-y-12">
                {Array.isArray(admissionSettings?.forms) && admissionSettings.forms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(
                      admissionSettings.forms.reduce((acc: any, form: any) => {
                        const className = form.target_class || 'General';
                        if (!acc[className]) acc[className] = { admission: null, demo: null, config: admissionSettings.class_configs?.[className] || { is_open: false, start_date: '', end_date: '' } };
                        if (form.name === 'Admission Form') acc[className].admission = form;
                        else if (form.name === 'Fill-up Demo') acc[className].demo = form;
                        return acc;
                      }, {})
                    ).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })).map(([className, classData]: [string, any]) => {
                      const now = new Date();
                      const start = classData.config.start_date ? new Date(classData.config.start_date) : null;
                      const end = classData.config.end_date ? new Date(classData.config.end_date) : null;
                      
                      let status: 'OPEN' | 'CLOSED' | 'UPCOMING' = 'CLOSED';
                      if (classData.config.is_open) {
                        if (start && now < start) status = 'UPCOMING';
                        else if (end && now > end) status = 'CLOSED';
                        else status = 'OPEN';
                      }

                      return (
                        <div key={className} className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 p-8 flex flex-col items-center text-center group hover:bg-white/[0.15] transition-all duration-500 shadow-2xl relative overflow-hidden">
                          {/* Status Badge */}
                          <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                            status === 'OPEN' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                            status === 'UPCOMING' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                            'bg-red-500/20 text-red-300 border-red-500/30'
                          }`}>
                            {status}
                          </div>

                          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-glow ${
                            status === 'OPEN' ? 'bg-green-500/20' : status === 'UPCOMING' ? 'bg-blue-500/20' : 'bg-red-500/20'
                          }`}>
                            <FileText className={`w-10 h-10 ${
                              status === 'OPEN' ? 'text-green-400' : status === 'UPCOMING' ? 'text-blue-400' : 'text-red-400'
                            }`} />
                          </div>

                          <h3 className="text-3xl font-black text-white mb-2">{className}</h3>
                          
                          {status === 'OPEN' ? (
                            <p className="text-green-300 text-xs font-bold uppercase tracking-widest mb-8">Admission is Live</p>
                          ) : status === 'UPCOMING' ? (
                            <div className="mb-8">
                              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest">Opening On</p>
                              <p className="text-white text-sm font-medium">{start?.toLocaleDateString()} {start?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                          ) : (
                            <div className="mb-8">
                              <p className="text-red-300 text-xs font-bold uppercase tracking-widest">Admissions Closed</p>
                              {end && <p className="text-white/60 text-xs mt-1">Ended: {end.toLocaleDateString()}</p>}
                            </div>
                          )}

                          <div className="w-full space-y-3 mt-auto">
                            {status === 'OPEN' ? (
                              <>
                                {classData.admission ? (
                                  <a href={classData.admission.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-white text-blue-900 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-blue-50 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl">
                                    <Download size={18} />
                                    Admission Form
                                  </a>
                                ) : (
                                  <div className="py-4 text-white/30 text-xs font-bold uppercase border border-white/10 rounded-2xl border-dashed">Form Not Ready</div>
                                )}
                                
                                {classData.demo ? (
                                  <a href={classData.demo.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-amber-500 text-amber-950 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl">
                                    <FileText size={18} />
                                    How to Fill
                                  </a>
                                ) : null}
                              </>
                            ) : (
                              <div className="py-12 px-6 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-3">
                                <AlertCircle className="w-8 h-8 text-white/20" />
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Contact Office for Information</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-blue-900/40 p-12 rounded-[3.5rem] border border-blue-700/50 text-center backdrop-blur-md">
                    <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400 opacity-50" />
                    <h3 className="text-2xl font-bold text-white mb-2">No Admission Notices</h3>
                    <p className="text-blue-200">Please visit our school campus for current admission availability.</p>
                  </div>
                )}
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
