import crypto from "crypto";
import { isCryptoKey } from "util/types";

export const gravatarPath = () => {
  const md5 = crypto.createHash("md5");
  const digest = md5.update("standingup.boo@gmail.com", "binary").digest("hex");
  return "https://www.gravatar.com/avatar/${digest}/?d=retoro";
};
