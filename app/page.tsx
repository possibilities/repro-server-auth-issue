import React from 'react'
import { useRouter } from 'next/navigation'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

const Home = (): React.ReactElement => {
  return (
    <form>
      <button
        type='submit'
        formAction={async (): Promise<void> => {
          'use server'
          const supabase = createServerActionClient({ cookies })

          await supabase.auth.signInWithOAuth({
            provider: 'github',
          })
          revalidatePath('/')
        }}
      >
        sign in
      </button>
    </form>
  )
}

export default Home
