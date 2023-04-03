export default function BrowserNotification() {
  const notificationPermission = Notification.permission;
  console.log(notificationPermission);

  if (notificationPermission === "granted") notificationMessage();
  else if (notificationPermission !== "denied")
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") notificationMessage();
    });
}

function notificationMessage() {
  const notification = new Notification("Hey dude welcome", {
    body: "What you want to do?",
    icon: require("../../assets/images/zomato.png")
  });
}
