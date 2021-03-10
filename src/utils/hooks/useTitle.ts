import { useEffect } from "react";
import { APP_TITLE } from "../../config/constants";

const useTitle = (title: string) => {
  useEffect(() => {
    if (title.length > 0) {
      document.title = title.trim() + " - " + (APP_TITLE || "React App");
    } else {
      document.title = (APP_TITLE || "React App");
    }
  }, [title]);
};

export default useTitle;
