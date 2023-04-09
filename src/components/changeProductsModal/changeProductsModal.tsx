import { FC } from 'react';
import styles from './changeProductsModal.module.scss';
import close from '../../assets/icons/close.svg';
import { Product } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addProduct } from '../../store/productsSlice';
import { updateProduct } from '../../store/productsSlice';
import { cares } from '../../models/care';

interface ChangeProductsModalProps {
  showModal: boolean;
  handleClose: () => void;
  product?: Product;
}

const ChangeProductsModal: FC<ChangeProductsModalProps> = ({ showModal, handleClose, product }) => {
  const dispatch = useDispatch();
  const id = useSelector(
    (state: RootState) => state.products.products[state.products.products.length - 1].id,
  );
  if (!showModal) {
    return null;
  }
  const handleSubmit = () => {
    const productObj = {
      id: product ? product.id : id + 1,
      img: (document.getElementById('img') as HTMLSelectElement).value,
      name: (document.getElementById('name') as HTMLSelectElement).value,
      type_size: (document.getElementById('type_size') as HTMLSelectElement).value as 'g' | 'ml',
      size: Number((document.getElementById('size') as HTMLSelectElement).value),
      url: product ? product.id : id + 1,
      maker: (document.getElementById('maker') as HTMLSelectElement).value,
      brand: (document.getElementById('brand') as HTMLSelectElement).value,
      description: (document.getElementById('description') as HTMLSelectElement).value,
      price: Number((document.getElementById('price') as HTMLSelectElement).value),
      type_care: Array.from(document.querySelectorAll<HTMLInputElement>('#care input:checked')).map(
        (checkbox) => checkbox.value,
      ),
    };
    if (product) {
      dispatch(updateProduct(productObj));
    } else {
      dispatch(addProduct(productObj));
    }
    handleClose();
  };
  return (
    <div className={styles.ChangeProductsModal}>
      <div className={styles.main}>
        <img className={styles.close} src={close} onClick={handleClose} />
        <div className={styles.form}>
          <p>Ссылка на картинку</p>
          <input id="img" type="text" defaultValue={product?.img} placeholder="Ссылка" />
          <p>Название</p>
          <input id="name" type="text" defaultValue={product?.name} placeholder="Название" />
          <p>Тип размера</p>
          <select name="" id="type_size" defaultValue={product?.type_size}>
            <option value="g">g</option>
            <option value="ml">ml</option>
          </select>
          <p>Размер</p>
          <input id="size" type="number" defaultValue={product?.size} min={1} placeholder="1" />
          <p>Производитель</p>
          <input id="maker" type="text" defaultValue={product?.maker} placeholder="Производитель" />
          <p>Бренд</p>
          <input id="brand" type="text" defaultValue={product?.brand} placeholder="Бренд" />
          <p>Описание</p>
          <textarea
            id="description"
            cols={30}
            rows={10}
            defaultValue={product?.description}
            placeholder="Описание"
          ></textarea>
          <p>Цена</p>
          <input id="price" type="number" defaultValue={product?.price} min={1} placeholder="1" />
          <p>Уход</p>
          <div id="care" className={styles.checkbox}>
            {cares.map((care) => (
              <label key={care}>
                <input
                  type="checkbox"
                  value={care}
                  defaultChecked={product?.type_care.includes(care)}
                />
                <span>{care}</span>
              </label>
            ))}
          </div>
          <button onClick={handleSubmit}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProductsModal;
