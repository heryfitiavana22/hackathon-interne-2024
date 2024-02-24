import LocationIcon from '../../../components/icons/loction';
import DateIcon from '../../../components/icons/date';
import { Button } from '../../../components/button/button';
import { Alert } from '../../alert.type';
import { DateHelper } from '../../../helpers/date-helper';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../auth/use-auth';
import { AlertService } from '../../alert.service';
import { RemoteUrl } from '../../../helpers/remote-url';

export default function CardAlert({ data }: CardAlertProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {data.map((item) => (
        <div className="lc-box" key={item.id}>
          <div className="lc-img">
            <div className="lc-distance">
              <p>{10} pres de vous</p>
            </div>
            <img
              src={RemoteUrl.alert(item.imageURL)}
              alt="sary"
              className="img"
            />
          </div>
          <ul className="lc-list">
            <li>
              <LocationIcon /> {item.place}
            </li>
            <li className="grey">
              <DateIcon /> {DateHelper.format(item.createdAt)}
            </li>
          </ul>
          <Button
            className="lc-btn"
            onClick={async () => {
              const response = await AlertService.setPickedAlert(
                item.id,
                user.id,
              );
              navigate(`/itinerary/${item.latitude}/${item.longitude}`);
            }}
          >
            Prendre
          </Button>
        </div>
      ))}
    </>
  );
}

type CardAlertProps = {
  data: Alert[];
};
