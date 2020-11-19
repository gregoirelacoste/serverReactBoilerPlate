import { makeVar } from "@apollo/client";
import { FeedbackType } from "../../../../services/components/Feedback/Feedback";
import { initFeedbackState } from "../../../../services/components/Feedback/feedbackState";

export const feedbackVar = makeVar<FeedbackType>(initFeedbackState);

export const feedback = {
  read: () => feedbackVar(),
};
