import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyText = (text: string) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }

  return [copied, copyText];
};

export default useClipboard;
