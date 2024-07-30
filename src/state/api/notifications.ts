import { ref, set, update, get, query } from "firebase/database";
import { database } from "../../config/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  addNotification,
  setNotification,
  updateNotification,
} from "../reducers/notifySlicer";
import { Notify } from "../types";
import { AppThunk } from "../store";

/// create new notification with message
export const createNotification =
  (message: string): AppThunk =>
  async (dispatch) => {
    var notificationId = uuidv4();
    const data = {
      notificationId,
      message,
      isRead: false,
      created: Date.now(),
    };
    set(ref(database, "notification/" + notificationId), data)
      .then(() => {
        dispatch(addNotification(data));
      })
      .catch((error) => {
        console.log(" = == = create error = =", error);
      });
  };

/// update notification
export const resetNotification =
  (data: Notify): AppThunk =>
  async (dispatch) => {
    update(ref(database, "notification/" + data.notificationId), data)
      .then(() => {
        dispatch(updateNotification(data));
      })
      .catch((error) => {
        console.log(" = == = update error = =", error);
      });
  };

// get notification list to show.
export const getNotifications = (): AppThunk => async (dispatch) => {
  get(query(ref(database, "notification/")))
    .then((snapshot) => {
      const notifications: Notify[] = [];
      snapshot.forEach((childSnapshot) => {
        notifications.push(childSnapshot.val());
      });
      notifications.sort((a, b) => (a.created < b.created ? 1 : -1));
      dispatch(setNotification(notifications));
    })
    .catch((e) => {
      console.log(" = == = get error = =", e);
    });
};
