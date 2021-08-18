function Footer() {
  return (
    <div className="bg-amazon_blue-light w-[100vw] ">
      <a href="#">
        <div className="bg-[#37475a] hover:bg-[#485769] text-white text-center py-3 cursor-pointer">
          <p className="text-sm">Back to top</p>
        </div>
      </a>

      <div className=" grid grid-cols-1  gap-y-10  sm:grid-cols-2 lg:grid-cols-4 px-24 py-14 text-gray-200 max-w-7xl mx-auto">
        <div className="space-y-2 text-sm ">
          <h3 className="font-bold text-base text-white">Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>

        <div className="space-y-2 text-sm ">
          <h3 className="font-bold text-base text-white">Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="space-y-2 text-sm ">
          <h3 className="font-bold text-base text-white">Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>

        <div className="space-y-2 text-sm ">
          <h3 className="font-bold text-base text-white">Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
