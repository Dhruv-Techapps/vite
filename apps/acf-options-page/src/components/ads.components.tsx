import { useAppSelector } from '../hooks';
import { firebaseSelector } from '../store/firebase';
import { GoogleAds } from './google-ads.components';

export function Ads() {
  const { role } = useAppSelector(firebaseSelector);
  if (role === undefined && /.getautoclicker.com/.exec(window.location.href) !== null) {
    return <GoogleAds />;
  }
  return null;
}
