import Link from "next/link";

const SignUpPage = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center md:p-20 md:m-10"
      style={{
        backgroundImage: "url('/login_background.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 sm:p-10 rounded-xl w-full mx-4 sm:mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center">
          Sign Up
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Left column */}
          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Enter Your Name
            </label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Name"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Enter Your Email
            </label>
            <input
              type="email"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Enter Your Password
            </label>
            <input
              type="password"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Re-enter your Password
            </label>
            <input
              type="password"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Enter Your Child&apos;s Name
            </label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Child's Name"
            />
          </div>

          <div>
            <label className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
              Enter Your Child&apos;s Age
            </label>
            <input
              type="number"
              className="w-full p-2 sm:p-3 rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Child's Age"
            />
          </div>

          {/* Checkbox and Sign Up button */}
          <div className="col-span-1 md:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 border-2 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-3 text-base sm:text-lg text-gray-900"
              >
                I agree to the Terms & Conditions.
              </label>
            </div>

            <div className="text-base sm:text-lg text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-indigo-600 hover:underline"
              >
                Log in
              </Link>
            </div>

            <Link href="/kids">
              <button
                type="submit"
                className="w-80 py-3 px-4 mt-4 bg-red-500 text-white inner-shadow font-semibold rounded-md border-2 border-black hover:bg-red-600 transition duration-300"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
