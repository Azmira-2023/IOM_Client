

const Login = () => {
  return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          {/* Banner Image */}
          <div className="w-full">
            {/* <img src={bannerImage} alt="Banner" className="w-full h-48 object-cover" /> */}
          </div>
    
          {/* Login Form */}
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            
            <form>
              {/* Username Field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
    
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
    
              {/* Password Field */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
    
              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Login
