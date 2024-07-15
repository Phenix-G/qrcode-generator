// src/app/components/QRCodeGenerator.tsx

"use client"; // Ensure this component runs on the client side

import React, { useState, ChangeEvent } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex justify-around">
      <div>
        <h1>QR Code Generator</h1>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter text to generate QR code"
          rows={10} // You can adjust the number of rows as needed
          cols={50} // You can adjust the number of columns as needed
        />
      </div>
      <div>
        {text && (
          <QRCode value={text}
            size={400}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={false}
            imageSettings={{
              src: "",
              x: undefined,
              y: undefined,
              height: 50,
              width: 50,
              excavate: true,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
