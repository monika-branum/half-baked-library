import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

// REACT_APP_SUPABASE_URL = 'https://jwkithqctyeqxnztsqjc.supabase.co';
// REACT_APP_SUPABASE_KEY =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzcxNzEwMSwiZXhwIjoxOTUzMjkzMTAxfQ.HeNurSJnSyAk2ZZAejJhrc4QW0Fy_5VBQuTqDvaEdwE';
