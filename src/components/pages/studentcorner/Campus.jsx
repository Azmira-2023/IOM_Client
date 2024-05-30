import {Link} from "react-router-dom"

const Campus = () => {
  return (
    <div className="p-32 flex flex-col items-center justify-center bg-gray-100">

      {/* Login Form */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mt-6"> 
        <form>
        <div className="p-8">
        <img src="https://campus.iom.edu.bd/pluginfile.php/1/theme_learnr/logo/0x200/1716964127/iomlogo.png" alt="Banner" className="w-72 h-12" />
      </div>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="username">
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
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
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
          <Link> <p className="text-red-900 mt-2 ">Forget password?</p> </Link>
          
        </form>
      </div>
    </div>
)
}

export default Campus