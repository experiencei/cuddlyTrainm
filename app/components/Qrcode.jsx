'use client'
import React from 'react';
import QRCode from 'qrcode'
import Image from 'next/image';



import { useState } from 'react';

const Qrcode = () => {
    	const [url, setUrl] = useState('')
	    const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#f4f4f2'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

  return (
		<div className="app">
			<h1>Your Event Ticket</h1>

      {/* The url won't have to be input on the screen we will have to pass a unique / paymentid to the input and the function can be call after a successful payment */}
			<input 
				type="text"
				placeholder="Generate Tickets"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<Image src={qr} alt="ticket images" width={480}
              height={480}/>
				<a href={qr} download="EventTicket.png">Download</a>
			</>}
		</div>
	)
 }

export default Qrcode




const paymentData = {
  userId : "4567890jhjs",
  paymentId : "65789vhbnjkm",
}

function generateBookingId(paymentData) {
  
  // Extract relevant information from payment data
  const { userId, paymentId, timestamp = Date.now() } = paymentData;

  // Combine user ID, payment ID, and timestamp (in milliseconds)
  const baseString = `${userId}-${paymentId}-${timestamp}`;

  // Generate a unique-ish ID using a simple hashing algorithm (not cryptographically secure)
  let bookingId = 0;
  for (let i = 0; i < baseString.length; i++) {
    bookingId = (bookingId << 5) - bookingId + baseString.charCodeAt(i);
    bookingId &= bookingId; // Convert to 32-bit integer
  }

  // Convert booking ID to a string with leading zeros for a consistent format
  bookingId = bookingId.toString(16).padStart(8, '0'); // 8-character hexadecimal string

  return `BK-${bookingId}`; // Prepend a prefix for clarity
}
