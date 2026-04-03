import logo from "../../assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="mb-3">
              <img
                src={logo}
                alt="FollowPerClick logo"
                className="h-16 w-16 object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground mt-5">
              Own the click. Own the customer.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground md:mt-7">
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FollowPerClick™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;