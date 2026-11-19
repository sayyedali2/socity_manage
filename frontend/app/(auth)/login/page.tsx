import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#183D35]">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your society account.
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-[#183D35] hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}