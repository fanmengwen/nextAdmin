import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = ({ item }) => {
  return (
    <div className="round-lg hover:shadow-shadow1 flex w-full cursor-pointer gap-4 bg-white p-4">
      <MdSupervisedUserCircle size={24} />
      <div className="flex w-3/5 flex-col gap-4">
        <span>{item.title}</span>
        <span className="text-center text-2xl font-medium">{item.number}</span>
        <span className="text-center text-sm font-light">
          <span className={item.change > 0 ? 'text-lime-300' : 'text-red-300'}>{item.change}%</span>&nbsp;&nbsp;
          {item.change > 0 ? '超出' : '少于'} 上周
        </span>
      </div>
    </div>
  );
};

export default Card;
