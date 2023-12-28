const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center"
      data-testid="clerk_form"
    >
      {children}
    </div>
  );
};

export default ClerkLayout;
