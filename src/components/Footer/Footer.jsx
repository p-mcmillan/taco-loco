const Footer = () => {
  return (
    // font needs to be Helvetica Neue, Regular
    <footer className=" bottom-0 w-full bg-[#54C877] h-[3.25rem]">
      <div className="h-full flex items-center justify-center text-[#191919] text-[16px]">
        TacoLoco Kits © Copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
