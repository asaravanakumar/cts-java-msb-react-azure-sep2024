// fn comp with arrow fn
const Footer = () => {
  // any js here
  const copyrightYear = 2024;
  const devName = "Kumar";

  // return JSX
  return (
    <footer className="text-center">
      <hr />
      <p>Menu will come here...</p>
      <p>
        Copyright {copyrightYear} | {devName}
      </p>
    </footer>
  );
};

export default Footer;
