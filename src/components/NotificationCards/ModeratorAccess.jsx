import { CardHeader } from "@mui/material";

export default function ModeratorAccess({ notification }) {
  return (
    <CardHeader
      action={
        !notification.isRead && (
          <Icon color="error">
            <FiAlertCircle />
          </Icon>
        )
      }
      title={`User ${notification.username} gave you moderator privallage`}
      titleTypographyProps={{ fontSize: 16 }}
      subheader={notification.createdAt}
      subheaderTypographyProps={{ fontSize: 12 }}
    />
  );
}
