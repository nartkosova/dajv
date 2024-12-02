const Footer = () => {
  return (
    <footer className="bg-text py-10 text-white">
      <div className="lg:px-20 px-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl">LOGO</h1>
          </div>
          <div className="flex space-x-4 mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white text-text flex justify-center items-center rounded hover:bg-red-600"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-dividers3 my-6"></div>

        <div className="flex md:flex-row flex-col justify-between">
          <ul className="space-y-6">
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> +1 234 5678 90
            </li>
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i> Address
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> email@address.com
            </li>
          </ul>
          <div className="flex flex-row justify-between md:pt-0 pt-6 md:space-x-48 lg:space-x-64 xl:space-x-80">
            <div>
              <h2 className="font-bold mb-2">Title</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-bold mb-2">Title</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-2">Title</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-dividers3 my-6"></div>

        <div className="md:flex md:justify-between md:items-center text-sm">
          <p>©2024 ..... All Rights Reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
