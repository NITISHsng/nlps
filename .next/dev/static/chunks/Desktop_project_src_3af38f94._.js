(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/project/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/project/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xbxxtqavxhjcymeefjzk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_4OXRkpKwKoAFPDWe-pj63w_Add8erK_");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/src/pages/Admin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Admin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/lucide-react/dist/esm/icons/plus-circle.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/project/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Admin() {
    _s();
    // #region --- State Management ---
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('notices');
    // Data states
    const [notices, setNotices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [admissionSettings, setAdmissionSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [facilities, setFacilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [galleryItems, setGalleryItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactSettings, setContactSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // New item states
    const [newNotice, setNewNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        date: new Date().toISOString().slice(0, 10),
        category: 'General',
        is_active: true
    });
    const [newFacility, setNewFacility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: ''
    });
    const [newGalleryItem, setNewGalleryItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: 'Campus View'
    });
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Faculty State
    const [faculty, setFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newFaculty, setNewFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        subject: '',
        qualification: '',
        experience: '',
        joining: '',
        image: '',
        achievements: '',
        bio: ''
    });
    // Academics State
    const [topStudents, setTopStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTopStudent, setNewTopStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        year: new Date().getFullYear(),
        name: '',
        image: '',
        percentage: '',
        details: ''
    });
    // #endregion
    // #region --- Auth & Data Loading ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Admin.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "Admin.useEffect": ({ data })=>setSession(data.session)
            }["Admin.useEffect"]);
            const { data: authListener } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "Admin.useEffect": (_event, s)=>{
                    setSession(s);
                    if (s) loadAllData();
                }
            }["Admin.useEffect"]);
            return ({
                "Admin.useEffect": ()=>authListener?.subscription.unsubscribe()
            })["Admin.useEffect"];
        }
    }["Admin.useEffect"], []);
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
    async function signIn(e) {
        e.preventDefault();
        setLoading(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        setLoading(false);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
    }
    async function signOut() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setSession(null);
    }
    // #endregion
    // #region --- API Functions ---
    // Notices
    async function loadNotices() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notices').select('*').order('date', {
            ascending: false
        });
        if (data) setNotices(data);
    }
    const [uploadingNoticePdf, setUploadingNoticePdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function addNotice() {
        if (!newNotice.title) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notices').insert(newNotice).select();
        if (data) {
            setNotices([
                data[0],
                ...notices
            ]);
            setNewNotice({
                title: '',
                description: '',
                date: new Date().toISOString().slice(0, 10),
                category: 'General',
                is_active: true,
                pdf_url: ''
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Notice added successfully!');
        }
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
    }
    async function handlePdfUpload(file) {
        if (file.size > 300 * 1024) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('PDF size must be under 300KB. Please compress the file.');
            return null;
        }
        setUploadingNoticePdf(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('pdf-files').upload(fileName, file);
        setUploadingNoticePdf(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error uploading PDF: ' + error.message);
            return null;
        }
        if (data) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('pdf-files').getPublicUrl(data.path).data.publicUrl;
        }
        return null;
    }
    async function updateNotice(n) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notices').update(n).eq('id', n.id);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Notice updated successfully!');
    }
    async function deleteNotice(n) {
        if (!confirm('Are you sure you want to delete this notice?')) return;
        // Delete PDF from storage if exists
        if (n.pdf_url) {
            const urlParts = n.pdf_url.split('/pdf-files/');
            const filePath = urlParts.length > 1 ? urlParts[1] : null;
            if (filePath) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('pdf-files').remove([
                    filePath
                ]);
            }
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notices').delete().eq('id', n.id);
        if (!error) {
            setNotices(notices.filter((notice)=>notice.id !== n.id));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Notice deleted successfully!');
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
    }
    // Admissions
    async function loadAdmissionSettings() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('admissions_settings').select('*').limit(1).single();
        if (data) {
            setAdmissionSettings(data);
        } else {
            console.warn('Load admissions error:', error?.message);
            const { data: newData, error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('admissions_settings').insert({
                is_open: false
            }).select().single();
            if (newData) {
                setAdmissionSettings(newData);
            } else {
                console.error('Insert admissions error:', insertError?.message);
                setAdmissionSettings({
                    id: 'dummy',
                    is_open: false,
                    start_date: '',
                    end_date: '',
                    announcement_text: ''
                });
            }
        }
    }
    async function updateAdmissionSettings() {
        if (!admissionSettings) return;
        if (admissionSettings.id === 'dummy') {
            const { id, ...rest } = admissionSettings;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('admissions_settings').insert(rest);
            if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error creating settings: ' + error.message);
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Settings created!');
                loadAdmissionSettings();
            }
        } else {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('admissions_settings').update(admissionSettings).eq('id', admissionSettings.id);
            if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error saving settings: ' + error.message);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Admission settings updated!');
        }
    }
    // Facilities
    const [uploadingFacilityImg, setUploadingFacilityImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleFacilityImageUpload(file) {
        const validTypes = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];
        if (!validTypes.includes(file.type)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Only JPG, PNG, and WebP images are allowed.');
            return null;
        }
        if (file.size > 2 * 1024 * 1024) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Image size must be under 2MB. Please compress the image.');
            return null;
        }
        setUploadingFacilityImg(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `facility_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').upload(fileName, file);
        setUploadingFacilityImg(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error uploading image: ' + error.message);
            return null;
        }
        if (data) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').getPublicUrl(data.path).data.publicUrl;
        }
        return null;
    }
    async function loadFacilities() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('facilities').select('*');
        if (data) setFacilities(data);
    }
    async function addFacility() {
        if (!newFacility.name) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('facilities').insert(newFacility).select();
        if (data) {
            setFacilities([
                data[0],
                ...facilities
            ]);
            setNewFacility({
                name: '',
                description: '',
                image_url: ''
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Facility added successfully!');
        }
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
    }
    async function updateFacility(f) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('facilities').update(f).eq('id', f.id);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Facility updated successfully!');
    }
    async function toggleArchiveFacility(f) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('facilities').update({
            is_archived: !f.is_archived
        }).eq('id', f.id);
        if (!error) {
            loadFacilities();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`Facility ${f.is_archived ? 'unarchived' : 'archived'} successfully!`);
        }
    }
    // Faculty
    const [uploadingFacultyImg, setUploadingFacultyImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleFacultyImageUpload(file) {
        const validTypes = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];
        if (!validTypes.includes(file.type)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Only JPG, PNG, and WebP images are allowed.');
            return null;
        }
        if (file.size > 200 * 1024) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Image size must be under 200KB. Please compress the image.');
            return null;
        }
        setUploadingFacultyImg(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `faculty_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').upload(fileName, file);
        setUploadingFacultyImg(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error uploading image: ' + error.message);
            return null;
        }
        if (data) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').getPublicUrl(data.path).data.publicUrl;
        }
        return null;
    }
    async function loadFaculty() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('faculty').select('*').order('created_at', {
            ascending: false
        });
        if (data) setFaculty(data);
    }
    async function addFaculty(e) {
        e.preventDefault();
        if (!newFaculty.name || !newFaculty.subject) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Name and subject are required');
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('faculty').insert(newFaculty).select();
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        else {
            setFaculty([
                data[0],
                ...faculty
            ]);
            setNewFaculty({
                name: '',
                subject: '',
                qualification: '',
                experience: '',
                joining: '',
                image: '',
                achievements: '',
                bio: ''
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Faculty added successfully!');
        }
    }
    async function updateFaculty(f) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('faculty').update(f).eq('id', f.id);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error updating faculty: ' + error.message);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Faculty updated successfully!');
    }
    async function deleteFaculty(id) {
        if (!confirm('Are you sure you want to delete this faculty member?')) return;
        const member = faculty.find((f)=>f.id === id);
        if (member?.image && member.image.includes('/images/')) {
            const urlParts = member.image.split('/images/');
            const filePath = urlParts.length > 1 ? urlParts[1] : null;
            if (filePath) await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').remove([
                filePath
            ]);
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('faculty').delete().eq('id', id);
        if (!error) {
            setFaculty(faculty.filter((f)=>f.id !== id));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Faculty deleted successfully!');
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        }
    }
    // Academics (Top Students)
    const [uploadingAcademicsImg, setUploadingAcademicsImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function handleAcademicsImageUpload(file) {
        const validTypes = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];
        if (!validTypes.includes(file.type)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Only JPG and PNG images are allowed.');
            return null;
        }
        if (file.size > 200 * 1024) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Image size must be under 200KB. Please compress the image.');
            return null;
        }
        setUploadingAcademicsImg(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `academics_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').upload(fileName, file);
        setUploadingAcademicsImg(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error uploading image: ' + error.message);
            return null;
        }
        if (data) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').getPublicUrl(data.path).data.publicUrl;
        }
        return null;
    }
    async function loadTopStudents() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('top_students').select('*').order('year', {
            ascending: false
        }).order('percentage', {
            ascending: false
        });
        if (data) setTopStudents(data);
    }
    async function addTopStudent(e) {
        e.preventDefault();
        if (!newTopStudent.name || !newTopStudent.percentage || !newTopStudent.year) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Name, Year, and Percentage are required');
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('top_students').insert(newTopStudent).select();
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        else {
            setTopStudents([
                ...topStudents,
                data[0]
            ].sort((a, b)=>b.year - a.year || b.percentage.localeCompare(a.percentage)));
            setNewTopStudent({
                year: new Date().getFullYear(),
                name: '',
                image: '',
                percentage: '',
                details: ''
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Top student added successfully!');
        }
    }
    async function updateTopStudent(s) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('top_students').update(s).eq('id', s.id);
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error updating student: ' + error.message);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Top student updated successfully!');
    }
    async function deleteTopStudent(id) {
        if (!confirm('Are you sure you want to delete this student record?')) return;
        const student = topStudents.find((s)=>s.id === id);
        if (student?.image && student.image.includes('/images/')) {
            const urlParts = student.image.split('/images/');
            const filePath = urlParts.length > 1 ? urlParts[1] : null;
            if (filePath) await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').remove([
                filePath
            ]);
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('top_students').delete().eq('id', id);
        if (!error) {
            setTopStudents(topStudents.filter((s)=>s.id !== id));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Top student deleted successfully!');
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        }
    }
    // Gallery
    async function loadGalleryItems() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery_items').select('*');
        if (data) setGalleryItems(data);
    }
    async function addGalleryItem(file) {
        setUploading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').upload(`${Date.now()}_${file.name}`, file);
        if (data) {
            const publicUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').getPublicUrl(data.path).data.publicUrl;
            const { data: item, error: itemError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery_items').insert({
                title: 'New Item',
                description: '',
                category: newGalleryItem.category,
                file_url: publicUrl,
                media_type: 'image'
            }).select();
            if (item) {
                setGalleryItems([
                    item[0],
                    ...galleryItems
                ]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Gallery item uploaded successfully!');
            }
            if (itemError) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemError.message);
        }
        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        setUploading(false);
    }
    async function deleteGalleryItem(id) {
        if (!confirm('Are you sure you want to delete this gallery item?')) return;
        const item = galleryItems.find((i)=>i.id === id);
        if (!item) return;
        // Extract generic file path from Public URL
        const urlParts = item.file_url.split('/images/');
        const filePath = urlParts.length > 1 ? urlParts[1] : item.file_url;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('images').remove([
            filePath
        ]);
        if (!error || error.message.includes('not found')) {
            const { error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery_items').delete().eq('id', id);
            if (!dbError) {
                setGalleryItems(galleryItems.filter((i)=>i.id !== id));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Gallery item deleted successfully!');
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dbError.message);
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
        }
    }
    // Contacts
    async function loadContactSettings() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_settings').select('*').limit(1).single();
        if (data) {
            setContactSettings(data);
        } else {
            console.warn('Load contacts error:', error?.message);
            const { data: newData, error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_settings').insert({
                address: ''
            }).select().single();
            if (newData) {
                setContactSettings(newData);
            } else {
                console.error('Insert contacts error:', insertError?.message);
                setContactSettings({
                    id: 'dummy',
                    address: '',
                    phone_numbers: [],
                    emails: [],
                    social_media: [],
                    office_hours: []
                });
            }
        }
    }
    async function updateContactSettings() {
        if (!contactSettings) return;
        if (contactSettings.id === 'dummy') {
            const { id, ...rest } = contactSettings;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_settings').insert(rest);
            if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error creating contacts: ' + error.message);
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Contacts created!');
                loadContactSettings();
            }
        } else {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_settings').update(contactSettings).eq('id', contactSettings.id);
            if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error saving contacts: ' + error.message);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Contact settings updated!');
        }
    }
    // Account Settings
    const [newAdminEmail, setNewAdminEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAdminPassword, setNewAdminPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmAdminPassword, setConfirmAdminPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [updatingAccount, setUpdatingAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function updateAccount(e) {
        e.preventDefault();
        if (newAdminPassword && newAdminPassword !== confirmAdminPassword) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Passwords do not match');
        }
        setUpdatingAccount(true);
        const updates = {};
        if (newAdminEmail) updates.email = newAdminEmail;
        if (newAdminPassword) updates.password = newAdminPassword;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser(updates);
        setUpdatingAccount(false);
        if (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Error updating account: ' + error.message);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Account updated successfully! If you changed your email, please check your inbox to confirm.');
            setNewAdminPassword('');
            setConfirmAdminPassword('');
        }
    }
    // #endregion
    // #region --- Render ---
    const renderTabContent = ()=>{
        switch(activeTab){
            case 'admissions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-4",
                            children: "Admissions Settings"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this),
                        admissionSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50/50 p-4 rounded-lg border border-blue-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 font-medium cursor-pointer text-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: admissionSettings.is_open,
                                                onChange: (e)=>setAdmissionSettings({
                                                        ...admissionSettings,
                                                        is_open: e.target.checked
                                                    }),
                                                className: "h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "Admissions Are Currently Open"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 526,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 524,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 523,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                    children: "Start Date & Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "datetime-local",
                                                    value: admissionSettings.start_date ? new Date(admissionSettings.start_date).toISOString().slice(0, 16) : '',
                                                    onChange: (e)=>setAdmissionSettings({
                                                            ...admissionSettings,
                                                            start_date: new Date(e.target.value).toISOString()
                                                        }),
                                                    className: "p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 531,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                    children: "End Date & Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "datetime-local",
                                                    value: admissionSettings.end_date ? new Date(admissionSettings.end_date).toISOString().slice(0, 16) : '',
                                                    onChange: (e)=>setAdmissionSettings({
                                                            ...admissionSettings,
                                                            end_date: new Date(e.target.value).toISOString()
                                                        }),
                                                    className: "p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 535,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 530,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl border border-gray-200 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Announcement Text"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 542,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-3",
                                            children: 'Custom message displayed on the Admissions page (e.g., "Classes V to X - Limited Seats Available")'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 543,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: admissionSettings.announcement_text || '',
                                            onChange: (e)=>setAdmissionSettings({
                                                    ...admissionSettings,
                                                    announcement_text: e.target.value
                                                }),
                                            className: "p-3 border border-gray-300 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "Enter announcement text..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 541,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: updateAdmissionSettings,
                                        className: "bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 549,
                                                columnNumber: 21
                                            }, this),
                                            "Save Admission Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 548,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 547,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 522,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 519,
                    columnNumber: 11
                }, this);
            case 'facilities':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 p-4 border rounded-lg grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-2",
                                    children: "Add New Facility"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "Name",
                                    value: newFacility.name,
                                    onChange: (e)=>setNewFacility({
                                            ...newFacility,
                                            name: e.target.value
                                        }),
                                    className: "p-2 border rounded w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Description",
                                    value: newFacility.description,
                                    onChange: (e)=>setNewFacility({
                                            ...newFacility,
                                            description: e.target.value
                                        }),
                                    className: "p-2 border rounded w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold truncate",
                                            children: uploadingFacilityImg ? 'Uploading...' : newFacility.image_url ? 'Image Ready ✓' : 'Upload Image (< 2MB)'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            disabled: uploadingFacilityImg,
                                            accept: "image/jpeg, image/png, image/webp",
                                            className: "hidden",
                                            onChange: async (e)=>{
                                                if (e.target.files && e.target.files.length > 0) {
                                                    const url = await handleFacilityImageUpload(e.target.files[0]);
                                                    if (url) setNewFacility({
                                                        ...newFacility,
                                                        image_url: url
                                                    });
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 565,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 563,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addFacility,
                                    disabled: uploadingFacilityImg,
                                    className: "bg-green-600 text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 572,
                                            columnNumber: 164
                                        }, this),
                                        " Add Facility"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 559,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Facilities"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 574,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: facilities.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border rounded-lg grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: f.name,
                                            onChange: (e)=>setFacilities(facilities.map((fac)=>fac.id === f.id ? {
                                                        ...fac,
                                                        name: e.target.value
                                                    } : fac)),
                                            className: "text-lg font-bold w-full p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 578,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: f.description,
                                            onChange: (e)=>setFacilities(facilities.map((fac)=>fac.id === f.id ? {
                                                        ...fac,
                                                        description: e.target.value
                                                    } : fac)),
                                            className: "w-full p-2 border rounded h-24"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this),
                                        f.image_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: f.image_url,
                                            alt: f.name,
                                            className: "h-32 object-cover rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 580,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-2 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Image URL (optional)",
                                                    value: f.image_url || '',
                                                    onChange: (e)=>setFacilities(facilities.map((fac)=>fac.id === f.id ? {
                                                                ...fac,
                                                                image_url: e.target.value
                                                            } : fac)),
                                                    className: "flex-1 p-2 border rounded text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: uploadingFacilityImg ? 'Uploading...' : 'Replace Image (< 2MB)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            disabled: uploadingFacilityImg,
                                                            accept: "image/jpeg, image/png, image/webp",
                                                            className: "hidden",
                                                            onChange: async (e)=>{
                                                                if (e.target.files && e.target.files.length > 0) {
                                                                    const url = await handleFacilityImageUpload(e.target.files[0]);
                                                                    if (url) setFacilities(facilities.map((fac)=>fac.id === f.id ? {
                                                                            ...fac,
                                                                            image_url: url
                                                                        } : fac));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 581,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateFacility(f),
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 140
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleArchiveFacility(f),
                                                    className: `px-4 py-2 rounded text-white flex items-center gap-1 ${f.is_archived ? 'bg-gray-500' : 'bg-yellow-500'}`,
                                                    children: f.is_archived ? 'Unarchive' : 'Archive'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 593,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, f.id, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 577,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 575,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 558,
                    columnNumber: 11
                }, this);
            case 'faculty':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-sm border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "Add New Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: addFaculty,
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            placeholder: "Name",
                                            value: newFaculty.name,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    name: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            placeholder: "Subject",
                                            value: newFaculty.subject,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    subject: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Qualification",
                                            value: newFaculty.qualification,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    qualification: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Experience",
                                            value: newFaculty.experience,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    experience: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Joining (e.g. Jan 2006)",
                                            value: newFaculty.joining,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    joining: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold truncate",
                                                    children: uploadingFacultyImg ? 'Uploading...' : newFaculty.image ? 'Image Ready ✓' : 'Upload Image (< 200KB)'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    disabled: uploadingFacultyImg,
                                                    accept: "image/jpeg, image/png, image/webp",
                                                    className: "hidden",
                                                    onChange: async (e)=>{
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            const url = await handleFacultyImageUpload(e.target.files[0]);
                                                            if (url) setNewFaculty({
                                                                ...newFaculty,
                                                                image: url
                                                            });
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Achievements",
                                            value: newFaculty.achievements,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    achievements: e.target.value
                                                }),
                                            className: "p-2 border rounded md:col-span-2 h-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 622,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Bio",
                                            value: newFaculty.bio,
                                            onChange: (e)=>setNewFaculty({
                                                    ...newFaculty,
                                                    bio: e.target.value
                                                }),
                                            className: "p-2 border rounded md:col-span-2 h-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 623,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: uploadingFacultyImg,
                                            className: "md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded font-medium flex items-center justify-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 192
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Faculty"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 225
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 605,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4",
                                    children: "Manage Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 629,
                                    columnNumber: 15
                                }, this),
                                faculty.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: f.name,
                                                onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                            ...fac,
                                                            name: e.target.value
                                                        } : fac)),
                                                className: "font-bold w-full p-2 border rounded",
                                                placeholder: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 632,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: f.subject,
                                                onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                            ...fac,
                                                            subject: e.target.value
                                                        } : fac)),
                                                className: "w-full p-2 border rounded",
                                                placeholder: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: f.qualification,
                                                onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                            ...fac,
                                                            qualification: e.target.value
                                                        } : fac)),
                                                className: "w-full p-2 border rounded text-sm text-gray-600",
                                                placeholder: "Qualification"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 634,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: f.experience,
                                                onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                            ...fac,
                                                            experience: e.target.value
                                                        } : fac)),
                                                className: "w-full p-2 border rounded text-sm text-gray-600",
                                                placeholder: "Experience"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 635,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-2 w-full md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: f.image || '',
                                                        onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                                    ...fac,
                                                                    image: e.target.value
                                                                } : fac)),
                                                        className: "flex-1 p-2 border rounded text-sm text-gray-600",
                                                        placeholder: "Image URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: uploadingFacultyImg ? 'Uploading...' : 'Replace Image (< 200KB)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                disabled: uploadingFacultyImg,
                                                                accept: "image/jpeg, image/png, image/webp",
                                                                className: "hidden",
                                                                onChange: async (e)=>{
                                                                    if (e.target.files && e.target.files.length > 0) {
                                                                        const url = await handleFacultyImageUpload(e.target.files[0]);
                                                                        if (url) setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                                                ...fac,
                                                                                image: url
                                                                            } : fac));
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 636,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: f.bio,
                                                onChange: (e)=>setFaculty(faculty.map((fac)=>fac.id === f.id ? {
                                                            ...fac,
                                                            bio: e.target.value
                                                        } : fac)),
                                                className: "w-full p-2 border rounded h-24 md:col-span-2",
                                                placeholder: "Bio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 648,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 flex justify-end space-x-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateFaculty(f),
                                                        className: "bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "w-4 h-4 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 140
                                                            }, this),
                                                            " Save"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteFaculty(f.id),
                                                        className: "bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 651,
                                                                columnNumber: 141
                                                            }, this),
                                                            " Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 649,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, f.id, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 631,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 628,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 604,
                    columnNumber: 11
                }, this);
            case 'academics':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-lg shadow-sm border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4 text-blue-900 border-b pb-2",
                                    children: "Add Top Student Details"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: addTopStudent,
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "number",
                                            placeholder: "Year (e.g. 2025)",
                                            value: newTopStudent.year || '',
                                            onChange: (e)=>setNewTopStudent({
                                                    ...newTopStudent,
                                                    year: parseInt(e.target.value)
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 664,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            placeholder: "Student Name",
                                            value: newTopStudent.name,
                                            onChange: (e)=>setNewTopStudent({
                                                    ...newTopStudent,
                                                    name: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 665,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            required: true,
                                            type: "text",
                                            placeholder: "Percentage (e.g. 92%)",
                                            value: newTopStudent.percentage,
                                            onChange: (e)=>setNewTopStudent({
                                                    ...newTopStudent,
                                                    percentage: e.target.value
                                                }),
                                            className: "p-2 border rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 666,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold truncate",
                                                    children: uploadingAcademicsImg ? 'Uploading...' : newTopStudent.image ? 'Image Ready ✓' : 'Upload Image (JPG/PNG < 200KB)'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    disabled: uploadingAcademicsImg,
                                                    accept: "image/jpeg, image/png",
                                                    className: "hidden",
                                                    onChange: async (e)=>{
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            const url = await handleAcademicsImageUpload(e.target.files[0]);
                                                            if (url) setNewTopStudent({
                                                                ...newTopStudent,
                                                                image: url
                                                            });
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Description Details",
                                            value: newTopStudent.details,
                                            onChange: (e)=>setNewTopStudent({
                                                    ...newTopStudent,
                                                    details: e.target.value
                                                }),
                                            className: "p-2 border rounded md:col-span-2 h-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 190
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Record"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 223
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 677,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 661,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4 text-blue-900 border-b pb-2",
                                    children: "Manage Top Students (All Years)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this),
                                topStudents.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: s.year,
                                                onChange: (e)=>setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                            ...ts,
                                                            year: parseInt(e.target.value)
                                                        } : ts)),
                                                className: "w-full p-2 border rounded",
                                                placeholder: "Year"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 685,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: s.name,
                                                onChange: (e)=>setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                            ...ts,
                                                            name: e.target.value
                                                        } : ts)),
                                                className: "font-bold w-full p-2 border rounded",
                                                placeholder: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 686,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: s.percentage,
                                                onChange: (e)=>setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                            ...ts,
                                                            percentage: e.target.value
                                                        } : ts)),
                                                className: "w-full p-2 border rounded font-semibold text-blue-800",
                                                placeholder: "Percentage"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: s.image,
                                                        onChange: (e)=>setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                                    ...ts,
                                                                    image: e.target.value
                                                                } : ts)),
                                                        className: "flex-1 p-2 border rounded text-sm text-gray-600",
                                                        placeholder: "Image URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center justify-center p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: uploadingAcademicsImg ? 'Uploading...' : 'Replace Image (JPG/PNG < 200KB)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                disabled: uploadingAcademicsImg,
                                                                accept: "image/jpeg, image/png",
                                                                className: "hidden",
                                                                onChange: async (e)=>{
                                                                    if (e.target.files && e.target.files.length > 0) {
                                                                        const url = await handleAcademicsImageUpload(e.target.files[0]);
                                                                        if (url) setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                                                ...ts,
                                                                                image: url
                                                                            } : ts));
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 688,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: s.details,
                                                onChange: (e)=>setTopStudents(topStudents.map((ts)=>ts.id === s.id ? {
                                                            ...ts,
                                                            details: e.target.value
                                                        } : ts)),
                                                className: "w-full p-2 border rounded h-16 md:col-span-2",
                                                placeholder: "Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 700,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 flex justify-end space-x-2 mt-2 border-t pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateTopStudent(s),
                                                        className: "bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 font-medium hover:bg-green-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 174
                                                            }, this),
                                                            " Save Record"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteTopStudent(s.id),
                                                        className: "bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 font-medium hover:bg-red-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 173
                                                            }, this),
                                                            " Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 701,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 684,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 681,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 660,
                    columnNumber: 11
                }, this);
            case 'gallery':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-4",
                            children: "Gallery Management"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 713,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-lg mb-3 text-blue-900",
                                    children: "Upload New Media"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800 mb-4",
                                    children: "Upload images to showcase on the public gallery page. The file will be saved directly to the Supabase storage bucket."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newGalleryItem.category,
                                            onChange: (e)=>setNewGalleryItem({
                                                    ...newGalleryItem,
                                                    category: e.target.value
                                                }),
                                            className: "p-3 border border-blue-200 rounded-lg w-full sm:w-auto focus:ring-2 focus:ring-blue-500 font-semibold text-gray-700 outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Campus View",
                                                    children: "Campus View"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Classroom Activities",
                                                    children: "Classroom Activities"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Sports Day",
                                                    children: "Sports Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cultural Programs",
                                                    children: "Cultural Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Independence Day",
                                                    children: "Independence Day"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Science Exhibition",
                                                    children: "Science Exhibition"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex-1 cursor-pointer bg-white border-2 border-dashed border-blue-300 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600 font-semibold",
                                                    children: uploading ? 'Uploading...' : 'Click to select an image'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    onChange: (e)=>e.target.files && addGalleryItem(e.target.files[0]),
                                                    disabled: uploading,
                                                    className: "hidden",
                                                    accept: "image/*"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 718,
                                    columnNumber: 15
                                }, this),
                                uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 w-full bg-blue-200 rounded-full h-2 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-600 h-2 rounded-full animate-pulse w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 733,
                                        columnNumber: 103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 733,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 715,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                            children: galleryItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative p-3 border border-gray-200 rounded-xl bg-gray-50 shadow-sm flex flex-col gap-3 group hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden rounded-lg bg-gray-200 aspect-video",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.file_url,
                                                    alt: item.title,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteGalleryItem(item.id),
                                                    className: "absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition opacity-0 group-hover:opacity-100 transform hover:scale-110",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 244
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 739,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-gray-500 uppercase",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: item.category || 'Campus View',
                                                    onChange: (e)=>setGalleryItems(galleryItems.map((g)=>g.id === item.id ? {
                                                                ...g,
                                                                category: e.target.value
                                                            } : g)),
                                                    className: "p-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Campus View",
                                                            children: "Campus View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Classroom Activities",
                                                            children: "Classroom Activities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Sports Day",
                                                            children: "Sports Day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Cultural Programs",
                                                            children: "Cultural Programs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Independence Day",
                                                            children: "Independence Day"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Science Exhibition",
                                                            children: "Science Exhibition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Other",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-gray-500 uppercase",
                                                    children: "Image Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: item.title || '',
                                                    onChange: (e)=>setGalleryItems(galleryItems.map((g)=>g.id === item.id ? {
                                                                ...g,
                                                                title: e.target.value
                                                            } : g)),
                                                    placeholder: "Enter title",
                                                    className: "p-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: async ()=>{
                                                        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery_items').update({
                                                            title: item.title,
                                                            category: item.category
                                                        }).eq('id', item.id);
                                                        if (error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(error.message);
                                                        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('Title updated successfully!');
                                                    },
                                                    className: "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors px-3 py-2 rounded-lg text-sm font-semibold w-full flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Save Title"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 743,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 738,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 736,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 712,
                    columnNumber: 11
                }, this);
            case 'contacts':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-4",
                            children: "Contact Information"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 771,
                            columnNumber: 13
                        }, this),
                        contactSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "School Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 775,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: contactSettings.address,
                                            onChange: (e)=>setContactSettings({
                                                    ...contactSettings,
                                                    address: e.target.value
                                                }),
                                            className: "p-3 border border-gray-300 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                            placeholder: "Enter full physical address..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 776,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 774,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 p-5 rounded-xl border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                    children: "Phone Numbers"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mb-3",
                                                    children: "Separate multiple numbers with commas."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: contactSettings.phone_numbers?.join(', ') || '',
                                                    onChange: (e)=>setContactSettings({
                                                            ...contactSettings,
                                                            phone_numbers: e.target.value.split(',').map((s)=>s.trim()).filter(Boolean)
                                                        }),
                                                    className: "p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 780,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 p-5 rounded-xl border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                    children: "Email Addresses"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mb-3",
                                                    children: "Separate multiple emails with commas."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: contactSettings.emails?.join(', ') || '',
                                                    onChange: (e)=>setContactSettings({
                                                            ...contactSettings,
                                                            emails: e.target.value.split(',').map((s)=>s.trim()).filter(Boolean)
                                                        }),
                                                    className: "p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 786,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 779,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Office Hours"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 794,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-3",
                                            children: 'Separate multiple hours with line breaks (e.g. "Monday - Friday: 8:00 AM - 4:00 PM\\nSaturday: 8:00 AM - 1:00 PM").'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 795,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: contactSettings.office_hours?.join('\n') || '',
                                            onChange: (e)=>setContactSettings({
                                                    ...contactSettings,
                                                    office_hours: e.target.value.split('\n').filter(Boolean)
                                                }),
                                            className: "p-3 border border-gray-300 rounded-lg w-full h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",
                                            placeholder: "Monday - Friday: 8:00 AM - 4:00 PM Saturday: 8:00 AM - 1:00 PM Sunday: Closed"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 796,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 793,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-5 rounded-xl border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Social Media Links"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 800,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mb-3",
                                            children: [
                                                "Provide an array of objects in JSON format. E.g. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-gray-200 px-1 rounded text-pink-600",
                                                    children: '[{"platform": "facebook", "url": "https://facebook.com/..."}]'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 110
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 801,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: JSON.stringify(contactSettings.social_media || [], null, 2),
                                            onChange: (e)=>{
                                                try {
                                                    setContactSettings({
                                                        ...contactSettings,
                                                        social_media: JSON.parse(e.target.value)
                                                    });
                                                } catch (err) {}
                                            },
                                            className: "p-3 border border-gray-300 rounded-lg w-full h-32 font-mono text-sm shadow-inner focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 802,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 799,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: updateContactSettings,
                                        className: "bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 811,
                                                columnNumber: 21
                                            }, this),
                                            "Save Contact Information"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 810,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 809,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 773,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 770,
                    columnNumber: 11
                }, this);
            case 'account':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-6 text-gray-800 border-b pb-4",
                            children: "Account Settings"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 821,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-800",
                                children: "Update your administrator login credentials. If you change your email address, you may be required to verify the new address."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 823,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 822,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: updateAccount,
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "New Email Address (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 827,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: newAdminEmail,
                                            onChange: (e)=>setNewAdminEmail(e.target.value),
                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                                            placeholder: "Enter new email"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 826,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "New Password (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 831,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: newAdminPassword,
                                            onChange: (e)=>setNewAdminPassword(e.target.value),
                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                                            placeholder: "Enter new password"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 832,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-gray-700 mb-2",
                                            children: "Confirm New Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: confirmAdminPassword,
                                            onChange: (e)=>setConfirmAdminPassword(e.target.value),
                                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                                            placeholder: "Confirm new password"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 836,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 834,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: updatingAccount || !newAdminEmail && !newAdminPassword,
                                        className: "bg-[#0b2545] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-sm font-semibold disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                lineNumber: 840,
                                                columnNumber: 19
                                            }, this),
                                            updatingAccount ? 'Updating...' : 'Update Account'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                        lineNumber: 839,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 838,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 825,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 820,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 p-4 border rounded-lg bg-blue-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4 text-lg text-blue-900 border-b pb-2",
                                    children: "Add New Notice"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 850,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: newNotice.date,
                                                    onChange: (e)=>setNewNotice({
                                                            ...newNotice,
                                                            date: e.target.value
                                                        }),
                                                    className: "p-2 border rounded w-1/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newNotice.category,
                                                    onChange: (e)=>setNewNotice({
                                                            ...newNotice,
                                                            category: e.target.value
                                                        }),
                                                    className: "p-2 border rounded w-1/3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "General",
                                                            children: "General"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Admission",
                                                            children: "Admission"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 856,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Exam",
                                                            children: "Exam"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Holiday",
                                                            children: "Holiday"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Result",
                                                            children: "Result"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 859,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Event",
                                                            children: "Event"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1 w-1/3 px-2 border rounded bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: newNotice.is_active,
                                                            onChange: (e)=>setNewNotice({
                                                                    ...newNotice,
                                                                    is_active: e.target.checked
                                                                }),
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 863,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 852,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Notice Title",
                                            value: newNotice.title,
                                            onChange: (e)=>setNewNotice({
                                                    ...newNotice,
                                                    title: e.target.value
                                                }),
                                            className: "p-2 border rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 866,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Description",
                                            value: newNotice.description,
                                            onChange: (e)=>setNewNotice({
                                                    ...newNotice,
                                                    description: e.target.value
                                                }),
                                            className: "p-2 border rounded w-full h-24"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 867,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold truncate",
                                                    children: uploadingNoticePdf ? 'Uploading PDF...' : newNotice.pdf_url ? 'PDF Uploaded ✓' : 'Upload PDF File (< 300KB)'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    disabled: uploadingNoticePdf,
                                                    accept: "application/pdf",
                                                    className: "hidden",
                                                    onChange: async (e)=>{
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            const url = await handlePdfUpload(e.target.files[0]);
                                                            if (url) setNewNotice({
                                                                ...newNotice,
                                                                pdf_url: url
                                                            });
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 868,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "Or enter manual PDF URL...",
                                                    value: newNotice.pdf_url || '',
                                                    onChange: (e)=>setNewNotice({
                                                            ...newNotice,
                                                            pdf_url: e.target.value
                                                        }),
                                                    className: "p-2 border rounded flex-1 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 19
                                                }, this),
                                                newNotice.pdf_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setNewNotice({
                                                            ...newNotice,
                                                            pdf_url: ''
                                                        }),
                                                    className: "px-3 py-1 bg-gray-200 rounded text-xs hover:bg-gray-300",
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 877,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addNotice,
                                            disabled: uploadingNoticePdf,
                                            className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 181
                                                }, this),
                                                " Add Notice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 881,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 851,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 849,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Notices"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 884,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: notices.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border rounded-lg grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: n.date,
                                                    onChange: (e)=>setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                                ...nt,
                                                                date: e.target.value
                                                            } : nt)),
                                                    className: "p-2 border rounded w-1/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: n.category,
                                                    onChange: (e)=>setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                                ...nt,
                                                                category: e.target.value
                                                            } : nt)),
                                                    className: "p-2 border rounded w-1/3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "General",
                                                            children: "General"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 891,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Admission",
                                                            children: "Admission"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Exam",
                                                            children: "Exam"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 893,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Holiday",
                                                            children: "Holiday"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 894,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Result",
                                                            children: "Result"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Event",
                                                            children: "Event"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1 w-1/3 px-2 border rounded bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: n.is_active,
                                                            onChange: (e)=>setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                                        ...nt,
                                                                        is_active: e.target.checked
                                                                    } : nt)),
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 888,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: n.title,
                                            onChange: (e)=>setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                        ...nt,
                                                        title: e.target.value
                                                    } : nt)),
                                            className: "text-lg font-bold w-full p-2 border rounded",
                                            placeholder: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 902,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: n.description,
                                            onChange: (e)=>setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                        ...nt,
                                                        description: e.target.value
                                                    } : nt)),
                                            className: "w-full p-2 border rounded h-24",
                                            placeholder: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 903,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center justify-center gap-2 p-2 border border-blue-200 rounded text-blue-700 hover:bg-blue-50 cursor-pointer transition flex-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: uploadingNoticePdf ? 'Uploading...' : 'Replace PDF File (< 300KB)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            disabled: uploadingNoticePdf,
                                                            accept: "application/pdf",
                                                            className: "hidden",
                                                            onChange: async (e)=>{
                                                                if (e.target.files && e.target.files.length > 0) {
                                                                    const url = await handlePdfUpload(e.target.files[0]);
                                                                    if (url) setNotices(notices.map((nt)=>nt.id === n.id ? {
                                                                            ...nt,
                                                                            pdf_url: url
                                                                        } : nt));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateNotice(n),
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center gap-1 flex-1 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 170
                                                        }, this),
                                                        " Save Changes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 914,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteNotice(n),
                                                    className: "bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center gap-1 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                            lineNumber: 915,
                                                            columnNumber: 162
                                                        }, this),
                                                        " Delete"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                            lineNumber: 904,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, n.id, true, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 887,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 885,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 848,
                    columnNumber: 11
                }, this);
        }
    };
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white p-8 rounded-xl shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-center mb-6",
                        children: "Admin Sign In"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                        lineNumber: 929,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: signIn,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "Email",
                                required: true,
                                className: "w-full px-4 py-2 border rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 931,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "Password",
                                required: true,
                                className: "w-full px-4 py-2 border rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full bg-[#0b2545] text-white py-3 rounded-lg font-semibold",
                                children: loading ? 'Signing In...' : 'Sign In'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 933,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                        lineNumber: 930,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                lineNumber: 928,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
            lineNumber: 927,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[#0b2545]",
                            children: "Admin Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: signOut,
                            className: "bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 948,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                    lineNumber: 949,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                            lineNumber: 947,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                    lineNumber: 945,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                lineNumber: 944,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b mb-8 overflow-x-auto pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('notices'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'notices' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Notices"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('academics'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'academics' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Academics"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 957,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('admissions'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'admissions' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Admissions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 958,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('facilities'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'facilities' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Facilities"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 959,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('faculty'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'faculty' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Faculty"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 960,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('gallery'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'gallery' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 961,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('contacts'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'contacts' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 962,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('account'),
                                className: `px-4 py-2 shrink-0 ${activeTab === 'account' ? 'border-b-2 border-blue-600 font-semibold' : ''}`,
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                                lineNumber: 963,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                        lineNumber: 955,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: renderTabContent()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
                lineNumber: 954,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/src/pages/Admin.tsx",
        lineNumber: 943,
        columnNumber: 5
    }, this);
// #endregion
}
_s(Admin, "ZBMRPdLWK4wAuh3nuwhRBejZpgI=");
_c = Admin;
var _c;
__turbopack_context__.k.register(_c, "Admin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_project_src_3af38f94._.js.map