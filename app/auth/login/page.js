import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center md:p-20 md:m-10"
      style={{
        backgroundImage: "url('/login_background.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-xl max-w-lg w-full mx-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center">
          Log In
        </h2>

        <form className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex">
            <Link
              href="#"
              className="text-base sm:text-lg text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign-up Link */}
          <div className="text-base sm:text-lg text-gray-500">
            Don&apos;t have an account?{" "}
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
              className="w-full mt-4 py-3 px-4 bg-red-500 text-white inner-shadow font-semibold rounded-md border-2 border-black hover:bg-red-600 transition duration-300"
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
