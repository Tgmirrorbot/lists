import Header from '../components/Header';
import Card from '../components/Card';
import sites from '../data/sites.json';

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Header />
      <main className="flex flex-wrap justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        {sites.map((site, index) => (
          <Card key={index} {...site} />
        ))}
      </main>
    </div>
  );
}