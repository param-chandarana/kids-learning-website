import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage: "url('/login_background.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-transparent p-10 rounded-xl max-w-md w-full">
        <h2 className="text-6xl font-bold mb-8 text-center">Log In</h2>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex">
            <Link href="#" className="text-lg text-indigo-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Sign-up Link */}
          <div className="text-lg text-gray-500 mb-6">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </div>

          {/* Login Button */}
          <Link href="/kids">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-md border-2 border-black inner-shadow hover:bg-red-600 transition duration-300"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
