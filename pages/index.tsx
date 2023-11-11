import Header from '../components/Header';
import Card from '../components/Card';
import sites from '../data/sites.json';

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Header />
      <main className="flex flex-wrap justify-center p-10">
        {sites.map((site, index) => (
          <Card key={index} {...site} />
        ))}
      </main>
    </div>
  );
}