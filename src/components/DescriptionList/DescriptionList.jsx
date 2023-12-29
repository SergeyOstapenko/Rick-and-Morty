import { DescriptionListItem } from "./DescriptionListItem/DescriptionListItem";
import styles from "./DescriptionList.module.scss";
import { BtnFilter } from "../BtnFilter/BtnFilter";
import { BtnFab } from "../BtnFab/BtnFab";


export const DescriptionList = ({ items }) => {

    const limitedDescription = items.slice(0,6);

  return (
    <div className="container descr">
      <BtnFilter />
      <ul className={styles.list}>
        {limitedDescription.map(({ name, image, status, species, id }) => (
          <DescriptionListItem key={id} name={name} image={image} status={status} species={species} id={id}/>
        ))}
      </ul>
      <BtnFab/>
    </div>
  );
};
