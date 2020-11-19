import * as Sentry from "@sentry/react";

type ExtraFieldDef = any[];
type Severity = "Error" | "Info" | "Warning" | null;

interface CaptureTypes {
  error?: any;
  extraField?: ExtraFieldDef;
  severity?: Severity;
  tags?: {
    [key: string]: string;
  };
  user?: { id: string; username: string };
  message?: string;
}

export const capture = ({
  error,
  extraField,
  severity = "Error",
  tags,
  user,
  message,
}: CaptureTypes) => {
  if (!process.env.REACT_APP_ENABLE_SENTRY)
    return console.error(
      "CAPTURE LOG ENVIRO DEV : ",
      severity,
      error || message,
      extraField && extraField
    );

  Sentry.withScope((scope) => {
    scope.setLevel(Sentry.Severity[severity || "Error"]);

    if (extraField) {
      extraField.forEach((extra, i) => {
        scope.setExtra("details " + i, extra);
      });
    }
    if (tags) {
      scope.setTags(tags);
    }
    if (user) {
      scope.setUser({
        id: user.id,
        username: user.username,
      });
    }
    if (message) return Sentry.captureMessage(message);
    return Sentry.captureException(error);
  });
};
