import Footer from "components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-10">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
