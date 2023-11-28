
import instagtam from "../assets/socialMedia/square-instagram.svg";

const Footer = () => {
  return (
    <footer className="border-t-2 text-black bg-slate-50">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div id="grid1">
            <div className="flex flex-col justify-center items-center">
              <a className="block hover:text-orange-500 text-lg mb-4">PRIVACY POLICY</a>
              <a className="block hover:text-orange-500 text-lg mb-4">TERMS</a>
              <a className="block hover:text-orange-500 text-lg mb-4">COOKIE SETTINGS</a>
            </div>
            <div className="">
              <a
                href="https://www.instagram.com/theofficialbrabus/"
                target="_blank"
                class="mt-5 mb-3 mx-auto w-12 h-12 rounded-full flex justify-center bg-gray-700
         items-center border border-slate-300 text-gray-200 hover:bg-orange-500"
              >
                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <p>theofficialsbrabus</p>
            </div>
          </div>
          <div id="grid2">
            <div className="flex flex-col justify-center items-center">
              <a className="block hover:text-orange-500 text-lg mb-4">ABOUT US</a>
              <a className="block hover:text-orange-500 text-lg mb-4">FIND A DEALER</a>
              <a className="block hover:text-orange-500 text-lg mb-4">CAREER</a>
            </div>
            <div className="">
              <a
                href="https://www.youtube.com/BRABUSGmbH"
                target="_blank"
                class="mt-5 mb-3 mx-auto w-12 h-12 rounded-full flex justify-center bg-gray-700
         items-center border border-slate-300 text-gray-200 hover:bg-orange-500"
              >
                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <p className="text-center">BRABUS</p>
            </div>
          </div>
          <div id="grid3">
            <div className="flex flex-col justify-center items-center">
              <a className="block hover:text-orange-500 text-lg mb-4">CONTACT</a>
              <a className="block hover:text-orange-500 text-lg mb-4">LOG IN</a>
              <a className="block hover:text-orange-500 text-lg mb-4">LATEST NEWS</a>
            </div>
            <div className="">
              <a
                href="https://www.linkedin.com/company/brabus-gmbh/?originalSubdomain=de"
                target="_blank"
                class="mt-5 mb-3 mx-auto w-12 h-12 rounded-full flex justify-center bg-gray-700
         items-center border border-slate-300 text-gray-200 hover:bg-orange-500"
              >
                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <p className="text-center">BRABUS GmbH</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-3">
        <p className="text-center text-gray-300">&copy; 2023 Brabus Automotive Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
