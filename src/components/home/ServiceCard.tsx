import { Link } from 'react-router-dom';

type Props = {
  title: string;
  imagePath: string;
  path: string;
};

function ServiceCard({ title, imagePath, path }: Props) {
  return (
    <div className="p-2">
      <Link
        to={path}
        state={{ title }}
        className="flex flex-col w-full basis-1/2 rounded-lg overflow-hidden shadow-md hover:shadow-xl"
      >
        <img src={imagePath} alt={title} className="h-64 w-full" />
        <h4 className="p-4 w-full text-center font-bold">{title}</h4>
      </Link>
    </div>
  );
}

export default ServiceCard;
