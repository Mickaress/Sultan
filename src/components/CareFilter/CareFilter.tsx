import { FC } from 'react';
import styles from './CareFilter.module.scss';
import { cares } from '../../models/care';
import { setCare } from '../../store/careSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface CareFilterProps {
  sidebar?: boolean;
}

const CareFilter: FC<CareFilterProps> = ({ sidebar }) => {
  const dispatch = useDispatch();
  const careValue = useSelector((state: RootState) => state.care.care);
  const handleCareChange = (care: string) => {
    dispatch(setCare(careValue === care ? '' : care));
  };
  return (
    <div className={sidebar ? styles.CareFilterSidebar : styles.CareFilter}>
      {sidebar && <h2>Тип</h2>}
      {cares.map((care) => (
        <div
          onClick={() => handleCareChange(care)}
          key={care}
          className={`${styles.item} ${care === careValue ? styles.active : ''}`}
        >
          {care}
        </div>
      ))}
    </div>
  );
};

export default CareFilter;
