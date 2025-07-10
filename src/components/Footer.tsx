export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Tanoxi Technology is your trusted destination for fourth-generation wide bandgap semiconductor technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-600 hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@tanoxitech.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Business Street</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 9 AM - 6 PM</li>
              <li>Saturday: 10 AM - 4 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Tanoxi Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
