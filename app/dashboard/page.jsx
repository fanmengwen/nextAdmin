import { cards } from '../lib/data.ts';
import Card from '../ui/dashboard/card/card';
import Chart from '../ui/dashboard/chart/chart';
import Transactions from '../ui/dashboard/transactions/transactions';

const Dashboard = async () => {
  return (
    <div className="mt-4 flex gap-4">
      <div className="flex w-11/12 flex-col gap-4">
        <div className="flex justify-between gap-4">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
