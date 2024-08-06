/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
/* eslint-enable no-unused-vars */

function CopyToClipboard({ hex }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div>
      <button onClick={handleCopy}>Copy to Clipboard</button>
      {copied && <span>Copied!</span>}
    </div>
  );
}

export default CopyToClipboard;
