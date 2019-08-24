import Bookings from './Bookings';
import { bookingsConnector as withBookings } from '../../store/connectors/bookingsConnector';

export default withBookings(Bookings);
