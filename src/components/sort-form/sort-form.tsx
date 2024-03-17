import { useState } from 'react';
import SortOptions from '../../components/sort-options/sort-options.tsx';
import { useAppSelector } from '../../hooks/store-hooks.ts';

function SortForm(): JSX.Element {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const activeSort = useAppSelector((state) => state.sortOption);

  const handleFormClick = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleFormClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortOptions isOpenForm={isOpenForm} />
    </form>
  );
}

export default SortForm;