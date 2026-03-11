const fs = require('fs');

// 1. Update Admin.tsx
let admin = fs.readFileSync('src/screens/Admin.tsx', 'utf8');

// Update Interface
admin = admin.replace(
  /forms\?: { name: string, url: string, target_class\?: string, is_open\?: boolean, start_date\?: string, end_date\?: string }\[\];/g,
  'forms?: { name: string, url: string, target_class?: string }[];\n  class_configs?: { [key: string]: { is_open: boolean, start_date: string, end_date: string } };'
);

// Update loadAdmissionSettings to initialize class_configs
const oldLoad = `      if (!Array.isArray(data.forms)) data.forms = [];
      setAdmissionSettings({ ...data, forms: processedForms });`;
const newLoad = `      if (!Array.isArray(processedForms)) processedForms = [];
      const class_configs = data.class_configs || {};
      setAdmissionSettings({ ...data, forms: processedForms, class_configs });`;
admin = admin.replace(oldLoad, newLoad) || admin.replace(oldLoad.replace(/\n/g, '\r\n'), newLoad.replace(/\n/g, '\r\n'));

// Update Admin UI Management Section
const oldAdminUIBlockStart = '{(() => {';
const oldAdminUIBlockEnd = '})()}';

const newAdminUISection = `{(() => {
                    const forms = Array.isArray(admissionSettings.forms) ? admissionSettings.forms : [];
                    const classConfigs = admissionSettings.class_configs || {};
                    const classNames = Array.from(new Set([...forms.map(f => f.target_class || 'General'), 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'])).filter(Boolean);
                    
                    return (
                      <div className="space-y-6">
                        {classNames.map(className => {
                          const admissionForm = forms.find(f => (f.target_class || 'General') === className && f.name.toLowerCase().includes('admission'));
                          const demoForm = forms.find(f => (f.target_class || 'General') === className && f.name.toLowerCase().includes('demo'));
                          const config = classConfigs[className] || { is_open: false, start_date: '', end_date: '' };

                          const updateConfig = (updates: any) => {
                            const newConfigs = { ...classConfigs, [className]: { ...config, ...updates } };
                            setAdmissionSettings({ ...admissionSettings, class_configs: newConfigs });
                          };

                          const handleBoxUpload = async (type: 'Admission Form' | 'Fill-up Demo', file: File) => {
                             const url = await handlePdfUpload(file);
                             if (url) {
                               const otherForms = forms.filter(f => !((f.target_class || 'General') === className && f.name === type));
                               const newForms = [...otherForms, { name: type, url: url, target_class: className }];
                               setAdmissionSettings({ ...admissionSettings, forms: newForms });
                             }
                          };

                          const removeForm = (type: string) => {
                             const newForms = forms.filter(f => !((f.target_class || 'General') === className && f.name === type));
                             setAdmissionSettings({ ...admissionSettings, forms: newForms });
                          };

                          return (
                            <div key={className} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">{className.match(/\\d+/)?.[0] || 'G'}</div>
                                  <h5 className="font-bold text-gray-900 text-lg">{className}</h5>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-1.5 rounded-xl border border-gray-200">
                                  <span className={\`text-xs font-bold px-3 py-1 rounded-lg \${config.is_open ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}\`}>
                                    {config.is_open ? 'OPEN' : 'CLOSED'}
                                  </span>
                                  <button 
                                    onClick={() => updateConfig({ is_open: !config.is_open })}
                                    className={\`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none \${config.is_open ? 'bg-blue-600' : 'bg-gray-200'}\`}
                                  >
                                    <span className={\`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out \${config.is_open ? 'translate-x-5' : 'translate-x-0'}\`} />
                                  </button>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                  <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Admission Start</label>
                                    <input 
                                      type="datetime-local" 
                                      value={config.start_date ? config.start_date.slice(0, 16) : ''} 
                                      onChange={(e) => updateConfig({ start_date: e.target.value })}
                                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Admission End</label>
                                    <input 
                                      type="datetime-local" 
                                      value={config.end_date ? config.end_date.slice(0, 16) : ''} 
                                      onChange={(e) => updateConfig({ end_date: e.target.value })}
                                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className={\`p-4 rounded-2xl border-2 border-dashed transition-all \${admissionForm ? 'border-green-200 bg-green-50/30' : 'border-gray-200 bg-gray-50/10'}\`}>
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="flex items-center gap-2">
                                        <FileText size={14} className="text-gray-400" />
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Admission Form</span>
                                      </div>
                                      {admissionForm && <button onClick={() => removeForm('Admission Form')} className="text-red-500 hover:text-red-700 text-[10px] font-black tracking-widest uppercase">Remove</button>}
                                    </div>
                                    {admissionForm ? (
                                      <a href={admissionForm.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-colors">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><Download size={14} /></div>
                                        <span className="text-sm truncate">View PDF</span>
                                      </a>
                                    ) : (
                                      <label className="flex flex-col items-center justify-center cursor-pointer py-3 hover:bg-white transition-all rounded-xl">
                                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full tracking-widest uppercase border border-blue-100">
                                          {uploadingNoticePdf ? 'Uploading...' : 'Upload PDF'}
                                        </span>
                                        <input type="file" className="hidden" accept="application/pdf" onChange={e => {
                                          const file = e.target.files?.[0];
                                          if (file) handleBoxUpload('Admission Form', file);
                                        }}/>
                                      </label>
                                    )}
                                  </div>

                                  <div className={\`p-4 rounded-2xl border-2 border-dashed transition-all \${demoForm ? 'border-orange-200 bg-orange-50/30' : 'border-gray-200 bg-gray-50/10'}\`}>
                                    <div className="flex justify-between items-center mb-3">
                                      <div className="flex items-center gap-2">
                                        <FileText size={14} className="text-gray-400" />
                                        <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Fill-up Demo</span>
                                      </div>
                                      {demoForm && <button onClick={() => removeForm('Fill-up Demo')} className="text-red-500 hover:text-red-700 text-[10px] font-black tracking-widest uppercase">Remove</button>}
                                    </div>
                                    {demoForm ? (
                                      <a href={demoForm.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-bold transition-colors">
                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"><Download size={14} /></div>
                                        <span className="text-sm truncate">View PDF</span>
                                      </a>
                                    ) : (
                                      <label className="flex flex-col items-center justify-center cursor-pointer py-3 hover:bg-white transition-all rounded-xl">
                                        <span className="text-[10px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full tracking-widest uppercase border border-orange-100">
                                          {uploadingNoticePdf ? 'Uploading...' : 'Upload PDF'}
                                        </span>
                                        <input type="file" className="hidden" accept="application/pdf" onChange={e => {
                                          const file = e.target.files?.[0];
                                          if (file) handleBoxUpload('Fill-up Demo', file);
                                        }}/>
                                      </label>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}`;

const lines = admin.split(/\r?\n/);
const startIdx = lines.findIndex(l => l.includes('{(() => {'));
const endIdx = lines.findIndex(l => l.includes('})()}'));

if (startIdx !== -1 && endIdx !== -1) {
    lines.splice(startIdx, endIdx - startIdx + 1, newAdminUISection);
    admin = lines.join('\n');
    console.log('Patched Admin.tsx UI successfully');
} else {
    console.log('Could not find Admin UI block markers');
}

fs.writeFileSync('src/screens/Admin.tsx', admin);


// 2. Update Admissions.tsx
let adm = fs.readFileSync('src/screens/Admissions.tsx', 'utf8');

// Update UI for Public View
const oldPublicUIStart = '<div className="w-full max-w-5xl mx-auto space-y-6">';
const newPublicUISection = \`<div className="w-full max-w-6xl mx-auto space-y-12">
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
                          <div className={\`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border \${
                            status === 'OPEN' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                            status === 'UPCOMING' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                            'bg-red-500/20 text-red-300 border-red-500/30'
                          }\`}>
                            {status}
                          </div>

                          <div className={\`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-glow \${
                            status === 'OPEN' ? 'bg-green-500/20' : status === 'UPCOMING' ? 'bg-blue-500/20' : 'bg-red-500/20'
                          }\`}>
                            <FileText className={\`w-10 h-10 \${
                              status === 'OPEN' ? 'text-green-400' : status === 'UPCOMING' ? 'text-blue-400' : 'text-red-400'
                            }\`} />
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
              </div>\`;

const admLines = adm.split(/\\r?\\n/);
const admStartIdx = admLines.findIndex(l => l.includes('<div className="w-full max-w-5xl mx-auto space-y-6">'));
let admEndIdx = -1;
if (admStartIdx !== -1) {
    let braceCount = 0;
    for (let i = admStartIdx; i < admLines.length; i++) {
        const line = admLines[i];
        if (line.includes('<div')) braceCount += (line.match(/<div/g) || []).length;
        if (line.includes('</div')) braceCount -= (line.match(/<\\/div/g) || []).length;
        if (braceCount === -1) {
            admEndIdx = i;
            break;
        }
    }
}

// Remove Apply Online section
const onlineStart = admLines.findIndex(l => l.includes('<div className="mt-12 pt-8 border-t border-blue-700/50 flex flex-col items-center gap-4">'));
let onlineEnd = -1;
if (onlineStart !== -1) {
    let braceCount = 0;
    for (let i = onlineStart; i < admLines.length; i++) {
        const line = admLines[i];
        if (line.includes('<div')) braceCount += (line.match(/<div/g) || []).length;
        if (line.includes('</div')) braceCount -= (line.match(/<\\/div/g) || []).length;
        if (braceCount === -1) {
            onlineEnd = i;
            break;
        }
    }
}

if (onlineStart !== -1 && onlineEnd !== -1) {
    admLines.splice(onlineStart, onlineEnd - onlineStart + 1);
}

if (admStartIdx !== -1 && admEndIdx !== -1) {
    admLines.splice(admStartIdx, admEndIdx - admStartIdx + 1, newPublicUISection);
    adm = admLines.join('\\n');
    console.log('Patched Admissions.tsx UI successfully');
} else {
    console.log('Could not find Admissions UI block markers');
}

fs.writeFileSync('src/screens/Admissions.tsx', adm);
console.log('Admissions Redesign Complete');
