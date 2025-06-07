import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Locomobile</div>
        <div className="space-x-6">
          <Link href="/"><span className="text-white hover:text-accent transition">Главная</span></Link>
          <Link href="/about"><span className="text-white hover:text-accent transition">О нас</span></Link>
          <Link href="/services"><span className="text-white hover:text-accent transition">Услуги</span></Link>
          <Link href="/gallery"><span className="text-white hover:text-accent transition">Галерея</span></Link>
          <Link href="/contact"><span className="text-white hover:text-accent transition">Контакты</span></Link>
        </div>
      </div>
    </nav>
  );
}
