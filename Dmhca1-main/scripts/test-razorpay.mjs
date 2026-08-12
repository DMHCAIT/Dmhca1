import Razorpay from 'razorpay';
import 'dotenv/config';

console.log('🔍 Testing Razorpay Configuration...\n');

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

console.log('💳 Razorpay Config:');
console.log(`  Key ID: ${keyId ? keyId.substring(0, 10) + '...' : 'NOT SET'}`);
console.log(`  Key Secret: ${keySecret ? '***hidden***' : 'NOT SET'}`);
console.log(`  VITE Key ID: ${process.env.VITE_RAZORPAY_KEY_ID ? process.env.VITE_RAZORPAY_KEY_ID.substring(0, 10) + '...' : 'NOT SET'}\n`);

// Check if keys are set
if (!keyId || !keySecret) {
  console.error('❌ Missing Razorpay configuration. Please check .env.local');
  process.exit(1);
}

try {
  // Initialize Razorpay instance
  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  console.log('⏳ Testing Razorpay API connection...');

  // Try to create a test order (minimal order)
  const orderData = {
    amount: 50000, // ₹500 in paise
    currency: 'INR',
    receipt: `test-order-${Date.now()}`,
    notes: {
      test: 'enrollment-system-verification',
    },
  };

  const order = await razorpay.orders.create(orderData);

  console.log('✅ Razorpay API connection successful!\n');
  console.log('📋 Test Order Created:');
  console.log(`  Order ID: ${order.id}`);
  console.log(`  Amount: ₹${order.amount / 100}`);
  console.log(`  Currency: ${order.currency}`);
  console.log(`  Status: ${order.status}`);
  console.log(`  Receipt: ${order.receipt}\n`);

  console.log('🎉 Razorpay is working properly!\n');
  console.log('Next: Payment gateway is ready for enrollment payments.');
  console.log(`Note: Order ID ${order.id} was created for testing and can be ignored.\n`);

} catch (error) {
  console.error('❌ Razorpay test failed:');
  console.error(`  Error: ${error.message}\n`);

  if (error.message.includes('unauthorized') || error.message.includes('Unauthorized')) {
    console.error('  Likely cause: Invalid API Key ID or Secret.');
    console.error('  Action: Verify RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local');
  } else if (error.message.includes('network')) {
    console.error('  Likely cause: Network connectivity issue or Razorpay API unreachable.');
  }

  process.exit(1);
}
