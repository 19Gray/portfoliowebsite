import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: "/", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="text-xl font-bold text-gray-700">
            ELFLOD
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path ? "bg-red-100 text-red-700" : "text-gray-600 hover:text-red-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
