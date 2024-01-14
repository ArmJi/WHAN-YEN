import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tertiary">
      <div className="grid mt-[3.5rem] mx-[1rem] py-[1rem] ss:grid-cols-[1fr_1.25fr] gap-y-[1rem] md:py-[2rem]">
        {/* logo section */}
        <div className="flex flex-col items-center">
          <a href="/" className="flex items-center justify-center">
            <p className="nav_logo text-xl font-semibold font-primary  text-primary">
              Whan-Yen
            </p>
          </a>
          <p className="text-center max-w-[320px]">Homemade Ice-Cream</p>
        </div>
        {/* data section */}
        <div className="grid grid-cols-2 gap-y-[1rem] md:grid-cols-4">
          {/* data section 1 */}
          <div>
            <h3 className="font-bold">About</h3>
            <ul>
              <li>
                <a href="/">Award</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
              <li>
                <a href="/">Terms of services</a>
              </li>
            </ul>
          </div>
          {/* data section 2 */}
          <div>
            <h3 className="font-bold">Company</h3>
            <ul>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Our team</a>
              </li>
              <li>
                <a href="/">Help center</a>
              </li>
            </ul>
          </div>
          {/* data section 3 */}
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul>
              <li>
                <address>
                  Sukhumvit 93,
                  <br />
                  Phra Khanong,
                  <br />
                  Bangkok
                </address>
                <address>
                  nattapol1193@gmail.com <br />
                  091-871-4810
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Social</h3>
            <div className="flex gap-[0.5rem]">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/madebykumi/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[1.5rem] flex justify-center items-center">
        &#169; All Rights Reserved By Whan-Yen
      </div>
    </footer>
  );
};
export default Footer;
