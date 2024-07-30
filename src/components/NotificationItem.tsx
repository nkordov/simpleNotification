import { Box, TableCell, TableRow } from "@mui/material";
import { Notify } from "../state/types";
import { parseDate } from "../utils/date";
import { useAppDispatch } from "../state/store";
import { resetNotification } from "../state/api/notifications";

export const NotificationItem = ({ notify }: { notify: Notify }) => {
  const dispatch = useAppDispatch();
  const readNotify = () => {
    if (!notify.isRead)
      dispatch(resetNotification({ ...notify, isRead: true }))
  }
  return (
    <TableRow
      key={notify.notificationId}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" onClick={readNotify} style={{ flex: 5, cursor: notify.isRead ? 'default' : 'pointer' }}>
        {notify.message}
      </TableCell>
      <TableCell align="right" style={{ flex: 2 }}>{parseDate(notify.created)}</TableCell>
      <TableCell style={{ width: 50 }}>
        <Box style={{ 
          color: notify.isRead ? 'black' : 'white', 
          borderRadius: 4, 
          backgroundColor: notify.isRead ? 'green' : 'red', 
          width: 'fit-content', 
          textAlign: 'right', 
          alignItems: 'flex-end', 
          justifyContent: 'flex-end', 
          margin: 'auto', 
          padding: '3px 8px'
          }}
        >
          {notify.isRead ? "Read" : "Unread"}
        </Box>
      </TableCell>
    </TableRow>
  )
}

