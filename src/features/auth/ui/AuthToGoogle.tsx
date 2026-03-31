"use client";

import { Google } from "@/shared/components/svg";
import { NativeButton } from "@/shared/components/ui";
import { createBrowserSupabaseClient } from "@/shared/lib/supabase";

function AuthToGoogle({ className, ...props }: React.ComponentProps<"button">) {
  const connectSupabaseSession = async () => {
    const supabase = createBrowserSupabaseClient();
    const origin = window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/api/auth/callback`,
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <NativeButton
      value="Google로 계속하기"
      onClick={connectSupabaseSession}
      className={className}
      {...props}
    >
      <Google />
    </NativeButton>
  );
}

export default AuthToGoogle;
