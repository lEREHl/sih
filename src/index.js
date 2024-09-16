import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@supabase/supabase-js';

// Initialize your Supabase client with your Supabase project URL and public anonymous key
const supabaseUrl = 'https://your-project-id.supabase.co';  // Replace with your Supabase URL
const supabaseAnonKey = 'your-public-anon-key';  // Replace with your Supabase anon key

// Export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
``


const supabase = createClient('https://elpwmezafmekyujcjbcc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVscHdtZXphZm1la3l1amNqYmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDA3NjksImV4cCI6MjA0MTgxNjc2OX0.C9sWtEaL0j6Y6-7HcnL5bmBlkE2MqXc1jc5DTvyeu2k')

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
}