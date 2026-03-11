"use client";

import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { LogOut, PlusCircle, Save, Trash2, FileText, Download } from 'lucide-react';

// #region --- Interfaces ---
interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  pdf_url?: string | null;
  is_active: boolean;
}

interface AdmissionSettings {
  id: string;
  is_open: boolean;
  start_date: string | null;
  end_date: string | null;
  announcement_text: string | null;
  form_url?: string | null;
  forms?: { name: string, url: string, target_class?: string }[];
  class_configs?: { [key: string]: { is_open: boolean, start_date: string, end_date: string } };
}

interface Facility {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  specifications: any;
  is_archived: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  file_url: string;
  thumbnail_url: string | null;
  media_type: 'image' | 'video';
}

interface ContactSettings {
  id: string;
  phone_numbers: string[];
  emails: string[];
  address: string;
  social_media: { platform: string; url: string }[];
  office_hours: string[];
}
// #endregion

export default function Admin() {
  // #region --- State Management ---
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  type TabType = 'notices' | 'admissions' | 'facilities' | 'gallery' | 'contacts' | 'faculty' | 'academics' | 'account';
  const [activeTab, setActiveTab] = useState<TabType>('notices');

  // Data states
  const [notices, setNotices] = useState<Notice[]>([]);
  const [admissionSettings, setAdmissionSettings] = useState<AdmissionSettings | null>(null);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [contactSettings, setContactSettings] = useState<ContactSettings | null>(null);

  // New item states
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({ title: '', description: '', date: new Date().toISOString().slice(0, 10), category: 'General', is_active: true });
  const [newFacility, setNewFacility] = useState<Partial<Facility>>({ name: '', description: '' });
  const [newGalleryItem, setNewGalleryItem] = useState({ category: 'Campus View' });
  const [uploading, setUploading] = useState(false);

  // Faculty State
  const [faculty, setFaculty] = useState<any[]>([]);
  const [newFaculty, setNewFaculty] = useState({ name: '', subject: '', qualification: '', experience: '', joining: '', image: '', achievements: '', bio: '' });

  // Academics State
  const [topStudents, setTopStudents] = useState<any[]>([]);
  const [newTopStudent, setNewTopStudent] = useState({ year: new Date().getFullYear(), name: '', image: '', percentage: '', details: '' });
  // #endregion

  // #region --- Auth & Data Loading ---
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (s) loadAllData();
    });
    return () => authListener?.subscription.unsubscribe();
  }, []);

  async function loadAllData() {
    await Promise.all([
      loadNotices(),
      loadAdmissionSettings(),
      loadFacilities(),
      loadGalleryItems(),
      loadContactSettings(),
      loadFaculty(),
      loadTopStudents()
    ]);
  }

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) toast(error.message);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
  }
  // #endregion

  // #region --- API Functions ---
  // Notices
  async function loadNotices() {
    const { data } = await supabase.from('notices').select('*').order('date', { ascending: false });
    if (data) setNotices(data);
  }
  const [uploadingNoticePdf, setUploadingNoticePdf] = useState(false);

  async function addNotice() {
    if (!newNotice.title) return;
    const { data, error } = await supabase.from('notices').insert(newNotice).select();
    if (data) {
      setNotices([data[0], ...notices]);
      setNewNotice({ title: '', description: '', date: new Date().toISOString().slice(0, 10), category: 'General', is_active: true, pdf_url: '' });
      toast('Notice added successfully!');
    }
    if (error) toast(error.message);
  }

  async function handlePdfUpload(file: File): Promise<string | null> {
    if (file.size > 300 * 1024) {
      toast('PDF size must be under 300KB. Please compress the file.');
      return null;
    }
    setUploadingNoticePdf(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage.from('pdf-files').upload(fileName, file);
    setUploadingNoticePdf(false);
    
    if (error) {
      toast('Error uploading PDF: ' + error.message);
      return null;
    }
    
    if (data) {
      return supabase.storage.from('pdf-files').getPublicUrl(data.path).data.publicUrl;
    }
    return null;
  }
  async function updateNotice(n: Notice) {
    const { error } = await supabase.from('notices').update(n).eq('id', n.id);
    if (error) toast(error.message); else toast('Notice updated successfully!');
  }
  async function deleteNotice(n: Notice) {
    if (!confirm('Are you sure you want to delete this notice?')) return;
    
    // Delete PDF from storage if exists
    if (n.pdf_url) {
      const urlParts = n.pdf_url.split('/pdf-files/');
      const filePath = urlParts.length > 1 ? urlParts[1] : null;
      if (filePath) {
        await supabase.storage.from('pdf-files').remove([filePath]);
      }
    }
    
    const { error } = await supabase.from('notices').delete().eq('id', n.id);
    if (!error) {
      setNotices(notices.filter(notice => notice.id !== n.id));
      toast('Notice deleted successfully!');
    }
    else toast(error.message);
  }

  // Admissions
  async function loadAdmissionSettings() {
    const { data, error } = await supabase.from('admissions_settings').select('*').limit(1).single();
    if (data) {
      // Ensure forms is always an array
      let processedForms = data.forms;
      if (typeof processedForms === 'string') {
        try { processedForms = JSON.parse(processedForms); } catch (e) { processedForms = []; }
      }
      if (!Array.isArray(processedForms)) processedForms = [];
      
      const classConfigs = data.class_configs || {};
      setAdmissionSettings({ ...data, forms: processedForms, class_configs: classConfigs });
    } else {
      console.warn('Load admissions error:', error?.message);
      const { data: newData, error: insertError } = await supabase.from('admissions_settings').insert({ is_open: false }).select().single();
      if (newData) {
        setAdmissionSettings({ ...newData, class_configs: {} });
      } else {
        console.error('Insert admissions error:', insertError?.message);
        setAdmissionSettings({ id: 'dummy', is_open: false, start_date: '', end_date: '', announcement_text: '', form_url: '', forms: [], class_configs: {} });
      }
    }
  }
  async function updateAdmissionSettings() {
    if (!admissionSettings) return;
    if (admissionSettings.id === 'dummy') {
      const { id, ...rest } = admissionSettings;
      const { error } = await supabase.from('admissions_settings').insert(rest);
      if (error) toast('Error creating settings: ' + error.message); else { toast('Settings created!'); loadAdmissionSettings(); }
    } else {
      const { error } = await supabase.from('admissions_settings').update(admissionSettings).eq('id', admissionSettings.id);
      if (error) toast('Error saving settings: ' + error.message); else toast('Admission settings updated!');
    }
  }

  // Facilities
  const [uploadingFacilityImg, setUploadingFacilityImg] = useState(false);

  async function handleFacilityImageUpload(file: File): Promise<string | null> {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast('Only JPG, PNG, and WebP images are allowed.');
      return null;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast('Image size must be under 2MB. Please compress the image.');
      return null;
    }
    setUploadingFacilityImg(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `facility_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage.from('images').upload(fileName, file);
    setUploadingFacilityImg(false);
    
    if (error) {
      toast('Error uploading image: ' + error.message);
      return null;
    }
    if (data) {
      return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
    }
    return null;
  }

  async function loadFacilities() {
    const { data } = await supabase.from('facilities').select('*');
    if (data) setFacilities(data);
  }
  async function addFacility() {
    if (!newFacility.name) return;
    const { data, error } = await supabase.from('facilities').insert(newFacility).select();
    if (data) {
      setFacilities([data[0], ...facilities]);
      setNewFacility({ name: '', description: '', image_url: '' });
      toast('Facility added successfully!');
    }
    if (error) toast(error.message);
  }
  async function updateFacility(f: Facility) {
    const { error } = await supabase.from('facilities').update(f).eq('id', f.id);
    if (error) toast(error.message); else toast('Facility updated successfully!');
  }
  async function toggleArchiveFacility(f: Facility) {
    const { error } = await supabase.from('facilities').update({ is_archived: !f.is_archived }).eq('id', f.id);
    if (!error) {
      loadFacilities();
      toast(`Facility ${f.is_archived ? 'unarchived' : 'archived'} successfully!`);
    }
  }

  // Faculty
  const [uploadingFacultyImg, setUploadingFacultyImg] = useState(false);

  async function handleFacultyImageUpload(file: File): Promise<string | null> {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast('Only JPG, PNG, and WebP images are allowed.');
      return null;
    }
    if (file.size > 200 * 1024) {
      toast('Image size must be under 200KB. Please compress the image.');
      return null;
    }
    setUploadingFacultyImg(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `faculty_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage.from('images').upload(fileName, file);
    setUploadingFacultyImg(false);
    
    if (error) {
      toast('Error uploading image: ' + error.message);
      return null;
    }
    if (data) {
      return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
    }
    return null;
  }

  async function loadFaculty() {
    const { data } = await supabase.from('faculty').select('*').order('created_at', { ascending: false });
    if (data) setFaculty(data);
  }
  async function addFaculty(e: React.FormEvent) {
    e.preventDefault();
    if (!newFaculty.name || !newFaculty.subject) return toast('Name and subject are required');
    const { data, error } = await supabase.from('faculty').insert(newFaculty).select();
    if (error) toast(error.message);
    else {
      setFaculty([data[0], ...faculty]);
      setNewFaculty({ name: '', subject: '', qualification: '', experience: '', joining: '', image: '', achievements: '', bio: '' });
      toast('Faculty added successfully!');
    }
  }
  async function updateFaculty(f: { id: string; [key: string]: any }) {
    const { error } = await supabase.from('faculty').update(f).eq('id', f.id);
    if (error) toast('Error updating faculty: ' + error.message);
    else toast('Faculty updated successfully!');
  }
  async function deleteFaculty(id: string) {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;
    
    const member = faculty.find(f => f.id === id);
    if (member?.image && member.image.includes('/images/')) {
      const urlParts = member.image.split('/images/');
      const filePath = urlParts.length > 1 ? urlParts[1] : null;
      if (filePath) await supabase.storage.from('images').remove([filePath]);
    }
    
    const { error } = await supabase.from('faculty').delete().eq('id', id);
    if (!error) {
      setFaculty(faculty.filter(f => f.id !== id));
      toast('Faculty deleted successfully!');
    } else {
      toast(error.message);
    }
  }

  // Academics (Top Students)
  const [uploadingAcademicsImg, setUploadingAcademicsImg] = useState(false);

  async function handleAcademicsImageUpload(file: File): Promise<string | null> {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast('Only JPG and PNG images are allowed.');
      return null;
    }
    if (file.size > 200 * 1024) {
      toast('Image size must be under 200KB. Please compress the image.');
      return null;
    }
    setUploadingAcademicsImg(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `academics_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage.from('images').upload(fileName, file);
    setUploadingAcademicsImg(false);
    
    if (error) {
      toast('Error uploading image: ' + error.message);
      return null;
    }
    if (data) {
      return supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
    }
    return null;
  }

  async function loadTopStudents() {
    const { data } = await supabase.from('top_students').select('*').order('year', { ascending: false }).order('percentage', { ascending: false });
    if (data) setTopStudents(data);
  }
  async function addTopStudent(e: React.FormEvent) {
    e.preventDefault();
    if (!newTopStudent.name || !newTopStudent.percentage || !newTopStudent.year) return toast('Name, Year, and Percentage are required');
    const { data, error } = await supabase.from('top_students').insert(newTopStudent).select();
    if (error) toast(error.message);
    else {
      setTopStudents([...topStudents, data[0]].sort((a,b) => b.year - a.year || b.percentage.localeCompare(a.percentage)));
      setNewTopStudent({ year: new Date().getFullYear(), name: '', image: '', percentage: '', details: '' });
      toast('Top student added successfully!');
    }
  }
  async function updateTopStudent(s: { id: string; [key: string]: any }) {
    const { error } = await supabase.from('top_students').update(s).eq('id', s.id);
    if (error) toast('Error updating student: ' + error.message);
    else toast('Top student updated successfully!');
  }
  async function deleteTopStudent(id: string) {
    if (!confirm('Are you sure you want to delete this student record?')) return;
    
    const student = topStudents.find(s => s.id === id);
    if (student?.image && student.image.includes('/images/')) {
      const urlParts = student.image.split('/images/');
      const filePath = urlParts.length > 1 ? urlParts[1] : null;
      if (filePath) await supabase.storage.from('images').remove([filePath]);
    }

    const { error } = await supabase.from('top_students').delete().eq('id', id);
    if (!error) {
      setTopStudents(topStudents.filter(s => s.id !== id));
      toast('Top student deleted successfully!');
    } else {
      toast(error.message);
    }
  }

  // Gallery
  async function loadGalleryItems() {
    const { data } = await supabase.from('gallery_items').select('*');
    if (data) setGalleryItems(data);
  }
  async function addGalleryItem(file: File) {
    setUploading(true);
    const { data, error } = await supabase.storage.from('images').upload(`${Date.now()}_${file.name}`, file);
    if (data) {
      const publicUrl = supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
      const { data: item, error: itemError } = await supabase.from('gallery_items').insert({ title: 'New Item', description: '', category: newGalleryItem.category, file_url: publicUrl, media_type: 'image' }).select();
      if (item) {
        setGalleryItems([item[0], ...galleryItems]);
        toast('Gallery item uploaded successfully!');
      }
      if (itemError) toast(itemError.message);
    }
    if (error) toast(error.message);
    setUploading(false);
  }
  async function deleteGalleryItem(id: string) {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;
    const item = galleryItems.find(i => i.id === id);
    if (!item) return;
    
    // Extract generic file path from Public URL
    const urlParts = item.file_url.split('/images/');
    const filePath = urlParts.length > 1 ? urlParts[1] : item.file_url;
    
    const { error } = await supabase.storage.from('images').remove([filePath]);
    if (!error || error.message.includes('not found')) {
      const { error: dbError } = await supabase.from('gallery_items').delete().eq('id', id);
      if (!dbError) {
        setGalleryItems(galleryItems.filter(i => i.id !== id));
        toast('Gallery item deleted successfully!');
      } else {
        toast(dbError.message);
      }
    } else {
      toast(error.message);
    }
  }

  // Contacts
  async function loadContactSettings() {
    const { data, error } = await supabase.from('contact_settings').select('*').limit(1).single();
    if (data) {
      setContactSettings(data);
    } else {
      console.warn('Load contacts error:', error?.message);
      const { data: newData, error: insertError } = await supabase.from('contact_settings').insert({ address: '' }).select().single();
      if (newData) {
        setContactSettings(newData);
      } else {
        console.error('Insert contacts error:', insertError?.message);
        setContactSettings({ id: 'dummy', address: '', phone_numbers: [], emails: [], social_media: [], office_hours: [] });
      }
    }
  }
  async function updateContactSettings() {
    if (!contactSettings) return;
    if (contactSettings.id === 'dummy') {
      const { id, ...rest } = contactSettings;
      const { error } = await supabase.from('contact_settings').insert(rest);
      if (error) toast('Error creating contacts: ' + error.message); else { toast('Contacts created!'); loadContactSettings(); }
    } else {
      const { error } = await supabase.from('contact_settings').update(contactSettings).eq('id', contactSettings.id);
      if (error) toast('Error saving contacts: ' + error.message); else toast('Contact settings updated!');
    }
  }

  // Account Settings
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
  const [updatingAccount, setUpdatingAccount] = useState(false);

  async function updateAccount(e: React.FormEvent) {
    e.preventDefault();
    if (newAdminPassword && newAdminPassword !== confirmAdminPassword) {
      return toast('Passwords do not match');
    }
    
    setUpdatingAccount(true);
    const updates: any = {};
    if (newAdminEmail) updates.email = newAdminEmail;
    if (newAdminPassword) updates.password = newAdminPassword;

    const { error } = await supabase.auth.updateUser(updates);
    
    setUpdatingAccount(false);
    
    if (error) {
      toast('Error updating account: ' + error.message);
    } else {
      toast('Account updated successfully! If you changed your email, please check your inbox to confirm.');
      setNewAdminPassword('');
      setConfirmAdminPassword('');
    }
  }
  // #endregion

  // #region --- Render ---
  const renderTabContent = () => {
    switch (activeTab) {
      case 'admissions':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Admissions Settings</h3>
            {admissionSettings && (
              <div className="space-y-6">
                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <label className="flex items-center gap-3 font-medium cursor-pointer text-gray-800">
                    <input type="checkbox" checked={admissionSettings.is_open} onChange={e => setAdmissionSettings({ ...admissionSettings, is_open: e.target.checked })} className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all"/>
                    <span className="text-lg">Admissions Are Currently Open</span>
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Start Date & Time</label>
                    <input type="datetime-local" value={admissionSettings.start_date ? new Date(admissionSettings.start_date).toISOString().slice(0, 16) : ''} onChange={e => setAdmissionSettings({ ...admissionSettings, start_date: new Date(e.target.value).toISOString() })} className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"/>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">End Date & Time</label>
                    <input type="datetime-local" value={admissionSettings.end_date ? new Date(admissionSettings.end_date).toISOString().slice(0, 16) : ''} onChange={e => setAdmissionSettings({ ...admissionSettings, end_date: new Date(e.target.value).toISOString() })} className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"/>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Announcement Text</label>
                  <p className="text-xs text-gray-500 mb-3">Custom message displayed on the Admissions page</p>
                  <textarea value={admissionSettings.announcement_text || ''} onChange={e => setAdmissionSettings({ ...admissionSettings, announcement_text: e.target.value })} className="p-3 border border-gray-300 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="Enter announcement text..."/>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Class-wise Admission Forms</h4>
                      <p className="text-sm text-gray-500">Each class can have one Admission Form and one Fill-up Demo.</p>
                    </div>
                  </div>

                  {(() => {
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
                                  <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold tracking-tighter">
                                    {(className.match(/\d+/) || ['G'])[0]}
                                  </div>
                                  <h5 className="font-bold text-gray-900 text-lg">{className}</h5>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-1.5 rounded-xl border border-gray-200">
                                  <span className={`text-[10px] font-black px-3 py-1 rounded-lg ${config.is_open ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {config.is_open ? 'OPEN' : 'CLOSED'}
                                  </span>
                                  <button 
                                    onClick={() => updateConfig({ is_open: !config.is_open })}
                                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${config.is_open ? 'bg-blue-600' : 'bg-gray-200'}`}
                                  >
                                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${config.is_open ? 'translate-x-5' : 'translate-x-0'}`} />
                                  </button>
                                </div>
                              </div>

                              <div className="p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                  <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Admission Start</label>
                                    <input 
                                      type="datetime-local" 
                                      value={config.start_date || ''} 
                                      onChange={(e) => updateConfig({ start_date: e.target.value })}
                                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Admission End</label>
                                    <input 
                                      type="datetime-local" 
                                      value={config.end_date || ''} 
                                      onChange={(e) => updateConfig({ end_date: e.target.value })}
                                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className={`p-5 rounded-2xl border-2 border-dashed transition-all ${admissionForm ? 'border-green-200 bg-green-50/50' : 'border-gray-200 bg-gray-50/30'}`}>
                                    <div className="flex justify-between items-center mb-4">
                                      <div className="flex items-center gap-2">
                                        <FileText size={16} className="text-gray-400" />
                                        <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Admission Form</span>
                                      </div>
                                      {admissionForm && <button onClick={() => removeForm('Admission Form')} className="text-red-500 hover:text-red-700 text-[10px] font-black uppercase">Remove</button>}
                                    </div>
                                    {admissionForm ? (
                                      <a href={admissionForm.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-white rounded-xl shadow-sm border border-green-100 hover:border-green-300 transition-all text-blue-600 font-bold">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Download size={18} /></div>
                                        <div className="flex-1 min-w-0 text-left">
                                           <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Status</div>
                                           <div className="text-sm truncate">View Form</div>
                                        </div>
                                      </a>
                                    ) : (
                                      <label className="flex flex-col items-center justify-center cursor-pointer py-4 border border-blue-100 bg-blue-50/30 rounded-2xl hover:bg-white transition-all">
                                        <PlusCircle size={20} className="text-blue-400 mb-2" />
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Upload PDF</span>
                                        <input type="file" className="hidden" accept="application/pdf" onChange={e => {
                                          const file = e.target.files?.[0];
                                          if (file) handleBoxUpload('Admission Form', file);
                                        }}/>
                                      </label>
                                    )}
                                  </div>

                                  <div className={`p-5 rounded-2xl border-2 border-dashed transition-all ${demoForm ? 'border-orange-200 bg-orange-50/50' : 'border-gray-200 bg-gray-50/30'}`}>
                                    <div className="flex justify-between items-center mb-4">
                                      <div className="flex items-center gap-2">
                                        <FileText size={16} className="text-gray-400" />
                                        <span className="text-xs font-black text-gray-600 uppercase tracking-widest">Fill-up Demo</span>
                                      </div>
                                      {demoForm && <button onClick={() => removeForm('Fill-up Demo')} className="text-red-500 hover:text-red-700 text-[10px] font-black uppercase">Remove</button>}
                                    </div>
                                    {demoForm ? (
                                      <a href={demoForm.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-white rounded-xl shadow-sm border border-orange-100 hover:border-orange-300 transition-all text-orange-600 font-bold">
                                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600"><Download size={18} /></div>
                                        <div className="flex-1 min-w-0 text-left">
                                           <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Status</div>
                                           <div className="text-sm truncate">View Demo</div>
                                        </div>
                                      </a>
                                    ) : (
                                      <label className="flex flex-col items-center justify-center cursor-pointer py-4 border border-orange-100 bg-orange-50/30 rounded-2xl hover:bg-white transition-all">
                                        <PlusCircle size={20} className="text-orange-400 mb-2" />
                                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Upload Demo</span>
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
                  })()}

                </div>
                
                <div className="flex justify-end pt-8 border-t">
                  <button onClick={updateAdmissionSettings} className="bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-700 transition-all shadow-lg font-bold">
                    <Save size={24}/> SAVE ALL ADMISSION SETTINGS
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 'facilities':
        return (
          <div>
                        <div className="mt-8 p-4 border rounded-lg grid gap-2">
              <h4 className="font-semibold mb-2">Add New Facility</h4>
              <input placeholder="Name" value={newFacility.name} onChange={e => setNewFacility({...newFacility, name: e.target.value})} className="p-2 border rounded w-full"/>
              <textarea placeholder="Description" value={newFacility.description} onChange={e => setNewFacility({...newFacility, description: e.target.value})} className="p-2 border rounded w-full"/>
              <label className="flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white">
                <span className="text-sm font-semibold truncate">{uploadingFacilityImg ? 'Uploading...' : newFacility.image_url ? 'Image Ready ✓' : 'Upload Image (< 2MB)'}</span>
                <input type="file" disabled={uploadingFacilityImg} accept="image/jpeg, image/png, image/webp" className="hidden" onChange={async (e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    const url = await handleFacilityImageUpload(e.target.files[0]);
                    if (url) setNewFacility({...newFacility, image_url: url});
                  }
                }}/>
              </label>
              <button onClick={addFacility} disabled={uploadingFacilityImg} className="bg-green-600 text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2"><PlusCircle size={20}/> Add Facility</button>
            </div>
            <h3 className="text-xl font-semibold mb-4">Facilities</h3>
            <div className="space-y-4">
              {facilities.map(f => (
                <div key={f.id} className="p-4 border rounded-lg grid gap-2">
                  <input value={f.name} onChange={e => setFacilities(facilities.map(fac => fac.id === f.id ? {...fac, name: e.target.value} : fac))} className="text-lg font-bold w-full p-2 border rounded"/>
                  <textarea value={f.description} onChange={e => setFacilities(facilities.map(fac => fac.id === f.id ? {...fac, description: e.target.value} : fac))} className="w-full p-2 border rounded h-24"/>
                  {f.image_url && <img src={f.image_url} alt={f.name} className="h-32 object-cover rounded"/>}
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <input type="text" placeholder="Image URL (optional)" value={f.image_url || ''} onChange={e => setFacilities(facilities.map(fac => fac.id === f.id ? {...fac, image_url: e.target.value} : fac))} className="flex-1 p-2 border rounded text-sm"/>
                    <label className="flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm">
                      <span className="font-semibold">{uploadingFacilityImg ? 'Uploading...' : 'Replace Image (< 2MB)'}</span>
                      <input type="file" disabled={uploadingFacilityImg} accept="image/jpeg, image/png, image/webp" className="hidden" onChange={async (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const url = await handleFacilityImageUpload(e.target.files[0]);
                          if (url) setFacilities(facilities.map(fac => fac.id === f.id ? {...fac, image_url: url} : fac));
                        }
                      }}/>
                    </label>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => updateFacility(f)} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-1"><Save size={16}/> Save</button>
                    <button onClick={() => toggleArchiveFacility(f)} className={`px-4 py-2 rounded text-white flex items-center gap-1 ${f.is_archived ? 'bg-gray-500' : 'bg-yellow-500'}`}>{f.is_archived ? 'Unarchive' : 'Archive'}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'faculty':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Add New Faculty</h3>
              <form onSubmit={addFaculty} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Name" value={newFaculty.name} onChange={e => setNewFaculty({...newFaculty, name: e.target.value})} className="p-2 border rounded"/>
                <input required type="text" placeholder="Subject" value={newFaculty.subject} onChange={e => setNewFaculty({...newFaculty, subject: e.target.value})} className="p-2 border rounded"/>
                <input type="text" placeholder="Qualification" value={newFaculty.qualification} onChange={e => setNewFaculty({...newFaculty, qualification: e.target.value})} className="p-2 border rounded"/>
                <input type="text" placeholder="Experience" value={newFaculty.experience} onChange={e => setNewFaculty({...newFaculty, experience: e.target.value})} className="p-2 border rounded"/>
                <input type="text" placeholder="Joining (e.g. Jan 2006)" value={newFaculty.joining} onChange={e => setNewFaculty({...newFaculty, joining: e.target.value})} className="p-2 border rounded"/>
                <label className="flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white">
                  <span className="text-sm font-semibold truncate">{uploadingFacultyImg ? 'Uploading...' : newFaculty.image ? 'Image Ready ✓' : 'Upload Image (< 200KB)'}</span>
                  <input type="file" disabled={uploadingFacultyImg} accept="image/jpeg, image/png, image/webp" className="hidden" onChange={async (e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const url = await handleFacultyImageUpload(e.target.files[0]);
                      if (url) setNewFaculty({...newFaculty, image: url});
                    }
                  }}/>
                </label>
                <textarea placeholder="Achievements" value={newFaculty.achievements} onChange={e => setNewFaculty({...newFaculty, achievements: e.target.value})} className="p-2 border rounded md:col-span-2 h-20"/>
                <textarea placeholder="Bio" value={newFaculty.bio} onChange={e => setNewFaculty({...newFaculty, bio: e.target.value})} className="p-2 border rounded md:col-span-2 h-20"/>
                <button type="submit" disabled={uploadingFacultyImg} className="md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded font-medium flex items-center justify-center space-x-2"><PlusCircle className="w-5 h-5"/><span>Add Faculty</span></button>
              </form>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-xl font-semibold mb-4">Manage Faculty</h3>
              {faculty.map(f => (
                <div key={f.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input value={f.name} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, name: e.target.value} : fac))} className="font-bold w-full p-2 border rounded" placeholder="Name"/>
                  <input value={f.subject} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, subject: e.target.value} : fac))} className="w-full p-2 border rounded" placeholder="Subject"/>
                  <input value={f.qualification} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, qualification: e.target.value} : fac))} className="w-full p-2 border rounded text-sm text-gray-600" placeholder="Qualification"/>
                  <input value={f.experience} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, experience: e.target.value} : fac))} className="w-full p-2 border rounded text-sm text-gray-600" placeholder="Experience"/>
                  <div className="flex flex-col sm:flex-row gap-2 w-full md:col-span-2">
                    <input value={f.image || ''} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, image: e.target.value} : fac))} className="flex-1 p-2 border rounded text-sm text-gray-600" placeholder="Image URL"/>
                    <label className="flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm">
                      <span className="font-semibold">{uploadingFacultyImg ? 'Uploading...' : 'Replace Image (< 200KB)'}</span>
                      <input type="file" disabled={uploadingFacultyImg} accept="image/jpeg, image/png, image/webp" className="hidden" onChange={async (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const url = await handleFacultyImageUpload(e.target.files[0]);
                          if (url) setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, image: url} : fac));
                        }
                      }}/>
                    </label>
                  </div>
                  <textarea value={f.bio} onChange={e => setFaculty(faculty.map(fac => fac.id === f.id ? {...fac, bio: e.target.value} : fac))} className="w-full p-2 border rounded h-24 md:col-span-2" placeholder="Bio"/>
                  <div className="md:col-span-2 flex justify-end space-x-2 mt-2">
                    <button onClick={() => updateFaculty(f)} className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1"><Save className="w-4 h-4 mr-1"/> Save</button>
                    <button onClick={() => deleteFaculty(f.id)} className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"><Trash2 className="w-4 h-4 mr-1"/> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'academics':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 border-b pb-2">Add Top Student Details</h3>
              <form onSubmit={addTopStudent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="number" placeholder="Year (e.g. 2025)" value={newTopStudent.year || ''} onChange={e => setNewTopStudent({...newTopStudent, year: parseInt(e.target.value)})} className="p-2 border rounded"/>
                <input required type="text" placeholder="Student Name" value={newTopStudent.name} onChange={e => setNewTopStudent({...newTopStudent, name: e.target.value})} className="p-2 border rounded"/>
                <input required type="text" placeholder="Percentage (e.g. 92%)" value={newTopStudent.percentage} onChange={e => setNewTopStudent({...newTopStudent, percentage: e.target.value})} className="p-2 border rounded"/>
                <label className="flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white">
                  <span className="text-sm font-semibold truncate">{uploadingAcademicsImg ? 'Uploading...' : newTopStudent.image ? 'Image Ready ✓' : 'Upload Image (JPG/PNG < 200KB)'}</span>
                  <input type="file" disabled={uploadingAcademicsImg} accept="image/jpeg, image/png" className="hidden" onChange={async (e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const url = await handleAcademicsImageUpload(e.target.files[0]);
                      if (url) setNewTopStudent({...newTopStudent, image: url});
                    }
                  }}/>
                </label>
                <textarea placeholder="Description Details" value={newTopStudent.details} onChange={e => setNewTopStudent({...newTopStudent, details: e.target.value})} className="p-2 border rounded md:col-span-2 h-20"/>
                <button type="submit" className="md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition"><PlusCircle className="w-5 h-5"/><span>Add Record</span></button>
              </form>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 border-b pb-2">Manage Top Students (All Years)</h3>
              {topStudents.map(s => (
                <div key={s.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="number" value={s.year} onChange={e => setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, year: parseInt(e.target.value)} : ts))} className="w-full p-2 border rounded" placeholder="Year"/>
                  <input value={s.name} onChange={e => setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, name: e.target.value} : ts))} className="font-bold w-full p-2 border rounded" placeholder="Name"/>
                  <input value={s.percentage} onChange={e => setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, percentage: e.target.value} : ts))} className="w-full p-2 border rounded font-semibold text-blue-800" placeholder="Percentage"/>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <input value={s.image} onChange={e => setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, image: e.target.value} : ts))} className="flex-1 p-2 border rounded text-sm text-gray-600" placeholder="Image URL"/>
                    <label className="flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm">
                      <span className="font-semibold">{uploadingAcademicsImg ? 'Uploading...' : 'Replace Image (JPG/PNG < 200KB)'}</span>
                      <input type="file" disabled={uploadingAcademicsImg} accept="image/jpeg, image/png" className="hidden" onChange={async (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const url = await handleAcademicsImageUpload(e.target.files[0]);
                          if (url) setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, image: url} : ts));
                        }
                      }}/>
                    </label>
                  </div>
                  <textarea value={s.details} onChange={e => setTopStudents(topStudents.map(ts => ts.id === s.id ? {...ts, details: e.target.value} : ts))} className="w-full p-2 border rounded h-16 md:col-span-2" placeholder="Details"/>
                  <div className="md:col-span-2 flex justify-end space-x-2 mt-2 border-t pt-3">
                    <button onClick={() => updateTopStudent(s)} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 font-medium hover:bg-green-700"><Save className="w-4 h-4"/> Save Record</button>
                    <button onClick={() => deleteTopStudent(s.id)} className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 font-medium hover:bg-red-700"><Trash2 className="w-4 h-4"/> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Gallery Management</h3>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
              <h4 className="font-bold text-lg mb-3 text-blue-900">Upload New Media</h4>
              <p className="text-sm text-blue-800 mb-4">Upload images to showcase on the public gallery page. The file will be saved directly to the Supabase storage bucket.</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <select value={newGalleryItem.category} onChange={e => setNewGalleryItem({...newGalleryItem, category: e.target.value})} className="p-3 border border-blue-200 rounded-lg w-full sm:w-auto focus:ring-2 focus:ring-blue-500 font-semibold text-gray-700 outline-none">
                  <option value="Campus View">Campus View</option>
                  <option value="Classroom Activities">Classroom Activities</option>
                  <option value="Sports Day">Sports Day</option>
                  <option value="Cultural Programs">Cultural Programs</option>
                  <option value="Independence Day">Independence Day</option>
                  <option value="Science Exhibition">Science Exhibition</option>
                  <option value="Other">Other</option>
                </select>
                <label className="flex-1 cursor-pointer bg-white border-2 border-dashed border-blue-300 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors w-full">
                  <span className="text-blue-600 font-semibold">{uploading ? 'Uploading...' : 'Click to select an image'}</span>
                  <input type="file" onChange={e => e.target.files && addGalleryItem(e.target.files[0])} disabled={uploading} className="hidden" accept="image/*"/>
                </label>
              </div>
              {uploading && <div className="mt-3 w-full bg-blue-200 rounded-full h-2 overflow-hidden"><div className="bg-blue-600 h-2 rounded-full animate-pulse w-full"></div></div>}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map(item => (
                <div key={item.id} className="relative p-3 border border-gray-200 rounded-xl bg-gray-50 shadow-sm flex flex-col gap-3 group hover:shadow-md transition-shadow">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-video">
                    <img src={item.file_url} alt={item.title} className="w-full h-full object-cover"/>
                    <button onClick={() => deleteGalleryItem(item.id)} className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition opacity-0 group-hover:opacity-100 transform hover:scale-110"><Trash2 size={16}/></button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
                    <select value={item.category || 'Campus View'} onChange={e => setGalleryItems(galleryItems.map(g => g.id === item.id ? {...g, category: e.target.value} : g))} className="p-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                      <option value="Campus View">Campus View</option>
                      <option value="Classroom Activities">Classroom Activities</option>
                      <option value="Sports Day">Sports Day</option>
                      <option value="Cultural Programs">Cultural Programs</option>
                      <option value="Independence Day">Independence Day</option>
                      <option value="Science Exhibition">Science Exhibition</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className="text-xs font-bold text-gray-500 uppercase">Image Title</label>
                    <input value={item.title || ''} onChange={e => setGalleryItems(galleryItems.map(g => g.id === item.id ? {...g, title: e.target.value} : g))} placeholder="Enter title" className="p-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                    <button onClick={async () => {
                        const { error } = await supabase.from('gallery_items').update({title: item.title, category: item.category}).eq('id', item.id);
                        if (error) toast(error.message); else toast('Title updated successfully!');
                      }} className="bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors px-3 py-2 rounded-lg text-sm font-semibold w-full flex items-center justify-center gap-2">
                      <Save size={16}/> Save Title
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contacts':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Contact Information</h3>
            {contactSettings && (
              <div className="grid gap-6">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">School Address</label>
                  <textarea value={contactSettings.address} onChange={e => setContactSettings({...contactSettings, address: e.target.value})} className="p-3 border border-gray-300 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter full physical address..."/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Numbers</label>
                    <p className="text-xs text-gray-500 mb-3">Separate multiple numbers with commas.</p>
                    <input value={contactSettings.phone_numbers?.join(', ') || ''} onChange={e => setContactSettings({...contactSettings, phone_numbers: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})} className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Addresses</label>
                    <p className="text-xs text-gray-500 mb-3">Separate multiple emails with commas.</p>
                    <input value={contactSettings.emails?.join(', ') || ''} onChange={e => setContactSettings({...contactSettings, emails: e.target.value.split(',').map(s => s.trim()).filter(Boolean)})} className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Office Hours</label>
                  <p className="text-xs text-gray-500 mb-3">Separate multiple hours with line breaks (e.g. "Monday - Friday: 8:00 AM - 4:00 PM\nSaturday: 8:00 AM - 1:00 PM").</p>
                  <textarea value={contactSettings.office_hours?.join('\n') || ''} onChange={e => setContactSettings({...contactSettings, office_hours: e.target.value.split('\n').filter(Boolean)})} className="p-3 border border-gray-300 rounded-lg w-full h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Monday - Friday: 8:00 AM - 4:00 PM&#10;Saturday: 8:00 AM - 1:00 PM&#10;Sunday: Closed"/>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Social Media Links</label>
                  <p className="text-xs text-gray-500 mb-3">Provide an array of objects in JSON format. E.g. <code className="bg-gray-200 px-1 rounded text-pink-600">{'[{"platform": "facebook", "url": "https://facebook.com/..."}]'}</code></p>
                  <textarea value={JSON.stringify(contactSettings.social_media || [], null, 2)} onChange={e => {
                    try {
                      setContactSettings({...contactSettings, social_media: JSON.parse(e.target.value)});
                    } catch(err) { /* ignore parse error while typing */ }
                  }} className="p-3 border border-gray-300 rounded-lg w-full h-32 font-mono text-sm shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button onClick={updateContactSettings} className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm font-semibold">
                    <Save size={20}/>Save Contact Information
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 'account':
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Account Settings</h3>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
              <p className="text-sm text-blue-800">Update your administrator login credentials. If you change your email address, you may be required to verify the new address.</p>
            </div>
            <form onSubmit={updateAccount} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">New Email Address (Optional)</label>
                <input type="email" value={newAdminEmail} onChange={e => setNewAdminEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter new email"/>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-sm font-bold text-gray-700 mb-2">New Password (Optional)</label>
                <input type="password" value={newAdminPassword} onChange={e => setNewAdminPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Enter new password"/>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Confirm New Password</label>
                <input type="password" value={confirmAdminPassword} onChange={e => setConfirmAdminPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Confirm new password"/>
              </div>
              <div className="flex justify-end pt-4">
                <button type="submit" disabled={updatingAccount || (!newAdminEmail && !newAdminPassword)} className="bg-[#0b2545] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm font-semibold disabled:opacity-50">
                  <Save size={20}/>{updatingAccount ? 'Updating...' : 'Update Account'}
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return (
          <div>
            <div className="mt-8 p-4 border rounded-lg bg-blue-50">
              <h4 className="font-semibold mb-4 text-lg text-blue-900 border-b pb-2">Add New Notice</h4>
              <div className="grid gap-3">
                <div className="flex gap-2">
                  <input type="date" value={newNotice.date} onChange={e => setNewNotice({...newNotice, date: e.target.value})} className="p-2 border rounded w-1/3"/>
                  <select value={newNotice.category} onChange={e => setNewNotice({...newNotice, category: e.target.value})} className="p-2 border rounded w-1/3">
                    <option value="General">General</option>
                    <option value="Admission">Admission</option>
                    <option value="Exam">Exam</option>
                    <option value="Holiday">Holiday</option>
                    <option value="Result">Result</option>
                    <option value="Event">Event</option>
                  </select>
                  <label className="flex items-center gap-1 w-1/3 px-2 border rounded bg-white">
                    <input type="checkbox" checked={newNotice.is_active} onChange={e => setNewNotice({...newNotice, is_active: e.target.checked})} className="w-4 h-4"/> Active
                  </label>
                </div>
                <input placeholder="Notice Title" value={newNotice.title} onChange={e => setNewNotice({...newNotice, title: e.target.value})} className="p-2 border rounded w-full"/>
                <textarea placeholder="Description" value={newNotice.description} onChange={e => setNewNotice({...newNotice, description: e.target.value})} className="p-2 border rounded w-full h-24"/>
                <label className="flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full">
                  <span className="text-sm font-semibold truncate">{uploadingNoticePdf ? 'Uploading PDF...' : newNotice.pdf_url ? 'PDF Uploaded ✓' : 'Upload PDF File (< 300KB)'}</span>
                  <input type="file" disabled={uploadingNoticePdf} accept="application/pdf" className="hidden" onChange={async (e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const url = await handlePdfUpload(e.target.files[0]);
                      if (url) setNewNotice({...newNotice, pdf_url: url});
                    }
                  }}/>
                </label>
                <div className="flex gap-2">
                  <input placeholder="Or enter manual PDF URL..." value={newNotice.pdf_url || ''} onChange={e => setNewNotice({...newNotice, pdf_url: e.target.value})} className="p-2 border rounded flex-1 text-sm"/>
                  {newNotice.pdf_url && <button onClick={() => setNewNotice({...newNotice, pdf_url: ''})} className="px-3 py-1 bg-gray-200 rounded text-xs hover:bg-gray-300">Clear</button>}
                </div>
                <button onClick={addNotice} disabled={uploadingNoticePdf} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2"><PlusCircle size={20}/> Add Notice</button>
              </div>
            </div>
                        <h3 className="text-xl font-semibold mb-4">Notices</h3>
            <div className="space-y-4">
              {notices.map(n => (
                <div key={n.id} className="p-4 border rounded-lg grid gap-2">
                  <div className="flex gap-2">
                    <input type="date" value={n.date} onChange={e => setNotices(notices.map(nt => nt.id === n.id ? {...nt, date: e.target.value} : nt))} className="p-2 border rounded w-1/3"/>
                    <select value={n.category} onChange={e => setNotices(notices.map(nt => nt.id === n.id ? {...nt, category: e.target.value} : nt))} className="p-2 border rounded w-1/3">
                      <option value="General">General</option>
                      <option value="Admission">Admission</option>
                      <option value="Exam">Exam</option>
                      <option value="Holiday">Holiday</option>
                      <option value="Result">Result</option>
                      <option value="Event">Event</option>
                    </select>
                    <label className="flex items-center gap-1 w-1/3 px-2 border rounded bg-gray-50">
                      <input type="checkbox" checked={n.is_active} onChange={e => setNotices(notices.map(nt => nt.id === n.id ? {...nt, is_active: e.target.checked} : nt))} className="w-4 h-4"/> Active
                    </label>
                  </div>
                  <input value={n.title} onChange={e => setNotices(notices.map(nt => nt.id === n.id ? {...nt, title: e.target.value} : nt))} className="text-lg font-bold w-full p-2 border rounded" placeholder="Title"/>
                  <textarea value={n.description} onChange={e => setNotices(notices.map(nt => nt.id === n.id ? {...nt, description: e.target.value} : nt))} className="w-full p-2 border rounded h-24" placeholder="Description"/>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <label className="flex items-center justify-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition flex-1 text-sm">
                      <span className="font-semibold">{uploadingNoticePdf ? 'Uploading...' : 'Replace PDF File (< 300KB)'}</span>
                      <input type="file" disabled={uploadingNoticePdf} accept="application/pdf" className="hidden" onChange={async (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const url = await handlePdfUpload(e.target.files[0]);
                          if (url) setNotices(notices.map(nt => nt.id === n.id ? {...nt, pdf_url: url} : nt));
                        }
                      }}/>
                    </label>
                    <button onClick={() => updateNotice(n)} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center gap-1 flex-1 shadow-sm"><Save size={16}/> Save Changes</button>
                    <button onClick={() => deleteNotice(n)} className="bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center gap-1 shadow-sm"><Trash2 size={16}/> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Sign In</h1>
          <form onSubmit={signIn} className="space-y-4">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="w-full px-4 py-2 border rounded-lg" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="w-full px-4 py-2 border rounded-lg" />
            <button type="submit" disabled={loading} className="w-full bg-[#0b2545] text-white py-3 rounded-lg font-semibold">
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0b2545]">Admin Dashboard</h1>
          <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex border-b mb-8 overflow-x-auto pb-2">
          <button onClick={() => setActiveTab('notices')} className={`px-4 py-2 shrink-0 ${activeTab === 'notices' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Notices</button>
          <button onClick={() => setActiveTab('academics')} className={`px-4 py-2 shrink-0 ${activeTab === 'academics' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Academics</button>
          <button onClick={() => setActiveTab('admissions')} className={`px-4 py-2 shrink-0 ${activeTab === 'admissions' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Admissions</button>
          <button onClick={() => setActiveTab('facilities')} className={`px-4 py-2 shrink-0 ${activeTab === 'facilities' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Facilities</button>
          <button onClick={() => setActiveTab('faculty')} className={`px-4 py-2 shrink-0 ${activeTab === 'faculty' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Faculty</button>
          <button onClick={() => setActiveTab('gallery')} className={`px-4 py-2 shrink-0 ${activeTab === 'gallery' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Gallery</button>
          <button onClick={() => setActiveTab('contacts')} className={`px-4 py-2 shrink-0 ${activeTab === 'contacts' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Contact</button>
          <button onClick={() => setActiveTab('account')} className={`px-4 py-2 shrink-0 ${activeTab === 'account' ? 'border-b-2 border-blue-600 font-semibold' : ''}`}>Account</button>
        </div>
        <div>
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
  // #endregion
}
