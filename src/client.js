import { createClient } from '@supabase/supabase-js'

const URL = 'https://egikfcegyojvqvoplcwg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnaWtmY2VneW9qdnF2b3BsY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5NzQxMzMsImV4cCI6MTk5NjU1MDEzM30.iTiKRtWGXzdNgDaZ7zboBH28ox9eOr2qixknziHk1SE';

export const supabase = createClient(URL, API_KEY);

