
const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="font-bold text-xl mb-4">MR.JEETYADU</h2>
          </div>

          {/* Column 2 */}
          <div>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Websites</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Collections</a></li>
              <li><a href="#" className="hover:underline">Elements</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Academy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Market</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Directory</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li className="mt-2"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Conference Section */}
        <div className="mt-10 flex justify-between items-center">
          <div>
            <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Next Conferences: Valencia & NYC
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-purple-700 pt-4 flex justify-between">
          <div className="text-sm">
            <a href="#" className="hover:underline mr-4">Cookies Policy</a>
            <a href="#" className="hover:underline mr-4">Legal Terms</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">YouTube</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
