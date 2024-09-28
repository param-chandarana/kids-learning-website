import Link from "next/link";

const SignUpPage = () => {
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage: "url('/login_background.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-transparent p-10 rounded-xl max-w-5xl w-full">
        <h2 className="text-6xl font-bold mb-8 text-center">Sign Up</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left column */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Enter Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Enter Your Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Enter Your Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Re-enter your Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Enter Your Child&apos;s Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Child's Name"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Enter Your Child&apos;s Age
            </label>
            <input
              type="number"
              className="w-full p-3 rounded-md border-2 border-black inner-shadow focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Child's Age"
            />
          </div>

          {/* Checkbox and Sign Up button */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-indigo-600 border-2 border-black inner-shadow rounded"
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-lg text-gray-900"
              >
                I agree to the Terms & Conditions.
              </label>
            </div>

            <div className="text-lg text-gray-500 mb-4">
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
                className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-md border-2 border-black inner-shadow hover:bg-red-600 transition duration-300"
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
