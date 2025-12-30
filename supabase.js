// Put your credentials ↓
const SUPABASE_URL = "https://<project>.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meHJyZ2RocGtkaW15dGR5anV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwODA3NDYsImV4cCI6MjA4MjY1Njc0Nn0.7LkCrKuM8N2fypP5WodYuttEDduw-MPCk8AJy4O7gpw";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Add Student
async function addStudentDB(student){
    const { error } = await supabaseClient
    .from("students")
    .insert(student);

    return error ? false : true;
}

// Fetch Students
async function fetchStudents(){
    const { data, error } = await supabaseClient
    .from("students")
    .select("*");

    return error ? [] : data;
}
