import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding bg-white text-center">
      <div className="container-content">
        <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">404</p>
        <h1 className="text-4xl font-serif text-navy-900 mb-4">Page not found</h1>
        <p className="text-navy-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </section>
  );
}
