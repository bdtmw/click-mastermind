const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tight mb-2">
              Follow<span className="text-gradient">PerClick</span>
              <span className="text-primary text-xs align-super">™</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Own the click. Own the customer.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
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
