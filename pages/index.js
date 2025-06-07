import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Добро пожаловать в Locomobile</h2>
        <p className="text-lg">Мы создаем уникальные проекты в сфере транспортной инженерии.</p>
      </main>
      <Footer />
    </div>
  );
}
