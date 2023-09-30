import styles from './styles.module.scss';
import { TagItem } from '../TagItem';

function TagsInput() {
  return (
    <div className={styles.tagsInputContainer}>
      <TagItem />
      <input
        type="text"
        className={styles.tagsInput}
        placeholder="Search Community"
      />
    </div>
  );
}

export default TagsInput;
