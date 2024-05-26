import { CardConsumptionProps } from './interfaces';
import Active from './Active';
import Expired from './Expired';
import Pending from './Pending';

function CardConsumption(props:CardConsumptionProps) {
  const { data } = props;
  const { status } = data;
  return (
    <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
      {status === 'Active' && <Active data={data} />}
      {status === 'Expired' && <Expired data={data} />}
      {status === 'Pending' && <Pending data={data} />}
    </div>
  );
}
export default CardConsumption;
