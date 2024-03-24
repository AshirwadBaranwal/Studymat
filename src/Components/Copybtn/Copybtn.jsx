import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import copy from "copy-to-clipboard";

const Copybtn = ({ copythis }) => {
  const [copybtnmark, setcopybtnmark] = useState(<IoMdCopy size={20} />);
  return (
    <div>
      <button
        onClick={() => {
          copy(copythis);
          setcopybtnmark(<FaRegCircleCheck color="green" size={20} />);
          setTimeout(() => {
            setcopybtnmark(<IoMdCopy size={20} />);
          }, 1000);
        }}
      >
        {copybtnmark}
      </button>
    </div>
  );
};

export default Copybtn;
