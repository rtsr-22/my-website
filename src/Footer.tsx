function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white text-center py-4 border-t border-gray-700">
      <p className="text-sm sm:text-base">
        © {year} RTSR. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
