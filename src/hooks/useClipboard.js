import { useEffect, useState } from 'react';

/*
 * @desc useClipboard
 * @returns {boolean, function} - copied, copyToClipboard
 * @example
 * import { useClipboard } from '@hooks/useClipboard';
 * const {copied, copyToClipboard]} = useClipboard();
 * const onClick = () => {
 *  copyToClipboard('Hello World');
 * }
 * <button onClick={onClick}>Copy to clipboard</button>
 * <p>{copied[text] ? 'Copied!' : 'Copy to clipboard'}</p>
 */

export const useClipboard = () => {
  const [copied, setCopied] = useState({}); // state for copied text
  const [text, setText] = useState(''); // text to copy

  const copyToClipboard = (text = '') => {
    const el = document.createElement('textarea'); // Create a <textarea> element
    el.value = text; // Set its value to the string that you want copied
    el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
    el.style.position = 'absolute'; // Move outside the screen to make it invisible
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    el.select(); // Select the <textarea> content
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    setCopied({ [text]: true }); // Set copied state
    setText(text); // Set text to copy
  };

  useEffect(() => {
    if (copied[text] && text) {
      // If copied and text
      const timer = setTimeout(() => {
        // Set timeout to remove copied state
        setCopied((prev) => ({
          ...prev,
          [text]: false, // Remove copied state
        }));
      }, 5000); // 5 seconds
      return () => clearTimeout(timer); // Cleanup function to run on unmount
    }
  }, [copied, text]);

  return { copyToClipboard, copied }; // Return copied and copyToClipboard
};
