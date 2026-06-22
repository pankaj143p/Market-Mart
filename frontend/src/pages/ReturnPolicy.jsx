import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const ReturnPolicy = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Return & Refund Policy
      </h2>
      
      <p style={{ marginBottom: '20px' }}>
        At MarketMart, we proudly stand behind the quality of our merchandise. If for any reason you are completely disastified with your purchase, you may securely initiate a return within 30 days of receiving your order.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>1. Eligibility for Returns</h4>
      <p style={{ marginBottom: '15px' }}>
        To be eligible for a return, the item must be completely unused, housed in the same absolute condition that it was received, and maintained within its original factory packaging. Receipts or proof of purchase mappings are strictly required.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>2. Refund Processing</h4>
      <p style={{ marginBottom: '15px' }}>
        Once your return is physically received and internally inspected, an immediate email protocol will fire notifying you of the approval status. Approved refunds will cleanly propagate to your original designated Razorpay gateway endpoint within 5-7 business working days naturally.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. Exempted Output Goods</h4>
      <p style={{ marginBottom: '15px' }}>
        Certain explicit categories such as perishable items, custom software, digital media, or physically tampered items are heavily restricted and do not qualify for any standard refund sequence.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>4. Shipping Transit Costs</h4>
      <p>
        You will actively remain strictly responsible for covering your own outbound logistical shipping rates associated with returning the item. Restocking fees may conditionally apply.
      </p>
    </div>
  );
};

export default ReturnPolicy;
