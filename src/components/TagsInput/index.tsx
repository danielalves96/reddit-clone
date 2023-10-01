import { TagItem } from '../TagItem';
import styles from './styles.module.scss';

function TagsInput() {
  return (
    <div className={styles.tagsInputContainer} data-testid="tags-input">
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
