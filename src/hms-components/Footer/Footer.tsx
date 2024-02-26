const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} HMS Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
