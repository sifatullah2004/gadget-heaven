const Footer = () => {
  return (
    <div className="bg-white py-6">
      <div className="text-center py-4">
        <h2 className="text-3xl font-semibold pb-3">Gadget Heaven</h2>
        <h3 className="text-gray-500 font-medium max-w-6/12 mx-auto">
          Leading the way in cutting-edge technology and innovation.
        </h3>
      </div>

      <footer className="footer sm:footer-horizontal md:justify-around text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
