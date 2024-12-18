import s from "./style.module.scss";
import navigationBackIcon from "../../app/assets/NavigationBackIcon.svg";
import { useNavigate } from "react-router-dom";

export const Header = ({
  name,
  owner,
}: {
  name: string;
  owner?: boolean;
}) => {
  // const location = useLocation();
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <div
      className={owner ? s.ownerHeader : s.header}
      onClick={goBack}
    >
      <button className={s.button}>
        <img src={navigationBackIcon} alt='back' />
      </button>
      <h1 className={s.title}>{name}</h1>
    </div>
  );
};
