import "./App.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./state/store";
import { useEffect, useMemo } from "react";
import {
  createNotification,
  getNotifications,
} from "./state/api/notifications";
import Notifications from "./components/Notifications";
import { Button } from "@mui/material";

function App() {
  const notifications = useSelector(
    (state: RootState) => state.notify.notificaitons
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const createNotify = (message: string) => {
    dispatch(createNotification(message));
  };

  const unreadNotificaitons = useMemo(() => {
    const _unreadNotificaitons = notifications.filter(
      (_notify) => !_notify.isRead
    );
    return _unreadNotificaitons;
  }, [notifications]);

  return (
    <>
      <h1>Simple Notification</h1>
      <div className="card">
        <div>count is Unread Messages {unreadNotificaitons.length}</div>
      </div>
      <div className="buttons">
        <Button
          type="button"
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => createNotify("First")}
        >
          {" "}
          First{" "}
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => createNotify("Second")}
        >
          {" "}
          Second{" "}
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ margin: 1 }}
          onClick={() => createNotify("Third")}
        >
          {" "}
          Third{" "}
        </Button>
      </div>
      <Notifications />
    </>
  );
}

export default App;
