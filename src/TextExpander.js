import { useState } from 'react';
import PropTypes from 'prop-types';

TextExpander.propTypes = {
  contractedLength: PropTypes.number,
  btnTextColor: PropTypes.string,
  btnTextClosed: PropTypes.string,
  btnTextOpen: PropTypes.string,
  btnColor: PropTypes.string,
  expanded: PropTypes.bool,
};

export default function TextExpander({
  children,
  contractedLength = 24,
  btnTextColor = '#123456',
  btnTextClosed = 'Show',
  btnTextOpen = 'Collapse',
  btnColor = '#eee',
  expanded = false,
}) {
  const [open, setOpen] = useState(expanded);

  const btnStyles = {
    padding: '2px 4px',
    color: btnTextColor,
    backgroundColor: btnColor,
  };

  function handleBtnToggle() {
    setOpen((cur) => !cur);
  }

  return (
    <div>
      {open ? children : `${children.slice(0, contractedLength)}... `}
      <button style={btnStyles} onClick={handleBtnToggle}>
        {open ? btnTextOpen : btnTextClosed}
      </button>
    </div>
  );
}
