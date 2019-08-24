import BookingGroup from './BookingGroup';
import { bookingGroupConnector as withBookingGroups } from '../../store/connectors/bookingGroupConnector';

export default withBookingGroups(BookingGroup);
