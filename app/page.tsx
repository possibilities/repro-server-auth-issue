"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Home = (): React.ReactElement => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  return (
    <form>
      <button
        type="submit"
        formAction={async (): Promise<void> => {
          await supabase.auth.signInWithOAuth({
            provider: "github",
          });
          router.refresh();
        }}
      >
        sign in
      </button>
    </form>
  );
};

export default Home;
