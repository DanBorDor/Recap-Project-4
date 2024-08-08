/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
/* eslint-enable no-unused-vars */

function CopyToClipboard({ text }) {
  const [showcopied, setShowCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick}>Copy to Clipboard</button>
      {showcopied && <span>Copied!</span>}
    </div>
  );
}

export default CopyToClipboard;
