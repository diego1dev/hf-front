/* eslint-disable react/no-array-index-key */
import CardConsumption from 'components/CardConsumption';
import EmptyData from 'components/EmptyData';
import ErrorComponent from 'components/ErrorComponent';
import { useFetch } from 'hooks';
import { FallbackElement } from 'layouts/FallbackElement';
import {
  IResultGetCards,
  IuserPlanConsumption,
  PlanStatus,
} from 'models/CardModel';
import { getUserPlansService } from 'services/usersPlans/userPlans';

import { Tab } from '@headlessui/react';
import { useAuth } from 'hooks/useAuth';

const initialTabs: Record<PlanStatus, IuserPlanConsumption[]> = {
  Pending: [],
  Active: [],
  Expired: [],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Home() {
  const { token } = useAuth();
  const getUserPlansFunction = async () => getUserPlansService(token);
  const { data, isError, isLoading } = useFetch<IResultGetCards>(
    getUserPlansFunction,
    [],
  );
  if (isLoading) return <FallbackElement />;
  if (isError) return <ErrorComponent />;

  const groupData = data?.reduce(
    (prvVal, plan) => ({
      ...prvVal,
      [plan.status]: [...prvVal[plan.status], plan],
    }),
    initialTabs,
  ) || initialTabs;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 mb-16">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-red-900/20 p-1">
          {Object.keys(groupData || {}).map((category) => (
            <Tab
              key={category}
              className={({ selected }) => classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-red-700 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-red-700 shadow'
                  : 'text-red-700 hover:bg-white/[0.12] hover:text-white',
              )}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(groupData || {}).map((cards, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none ',
              )}
            >
              {cards?.length ? (
                <ul className="grid grid-cols-1 gap-x-8 gap-y-16 text-center  md:grid-cols-2 lg:grid-cols-3">
                  {cards.map((card) => (
                    <div
                      className="mx-auto flex max-w-xs flex-col gap-y-4"
                      key={`card-${card.country}-${card.status}-${card.plan}`}
                    >
                      <CardConsumption data={card} />
                    </div>
                  ))}
                </ul>
              ) : (
                <EmptyData />
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Home;
