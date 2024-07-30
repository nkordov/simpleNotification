import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { NotificationItem } from './NotificationItem';

export default function Notifications() {
  const notifications = useSelector((state: RootState) => state.notify.notificaitons);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Message</TableCell>
            <TableCell align="right">CreatedAt</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((row) => (
            <NotificationItem notify={row} key={row.notificationId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}