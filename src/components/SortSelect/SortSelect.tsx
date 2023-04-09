import { FC } from 'react';
import styles from './SortSelect.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSortValue } from '../../store/sortSlice';

interface SortSelectProps {
  mobile?: boolean;
}

const SortSelect: FC<SortSelectProps> = ({ mobile }) => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.sort.value);
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortValue(event.target.value));
  };
  return (
    <div className={`${styles.SortList} ${mobile && styles.mobile}`}>
      <p>Сортировка:</p>
      <select value={sort} onChange={handleSortChange}>
        <option value="ascName">Название &#9660;</option>
        <option value="descName">Название &#9650;</option>
        <option value="ascPrice">Цена &#9660;</option>
        <option value="descPrice">Цена &#9650;</option>
      </select>
    </div>
  );
};

export default SortSelect;
