type CardProps = {
  name: string;
  description: string;
  url: string;
};

export default function Card({ name, description, url }: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit Site
        </a>
      </div>
    </div>
  );
}