const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold tracking-tight mb-1">
            Follow<span className="text-gradient">PerClick</span>
            <span className="text-primary text-xs align-super">™</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Own the click. Own the customer.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FollowPerClick™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
