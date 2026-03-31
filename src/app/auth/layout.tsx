export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-lvh flex justify-center items-center bg-white">{children}</section>
  );
}
