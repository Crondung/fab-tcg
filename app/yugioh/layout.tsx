export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen bg-yugioh-blue bg-scroll bg-cover bg-no-repeat bg-bottom overflow-y-scroll ">
      {children}
    </main>
  );
}
