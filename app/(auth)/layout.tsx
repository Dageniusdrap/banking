
// THe auth layout doesnt have a sidebar
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}
      </main>
    );
  }
  