import { emailService } from "../modules/email/service";

async function testPasswordResetEmailEnglish() {
  console.log("Testing password reset email (English)...");

  try {
    const result = await emailService.sendPasswordResetEmail(
      "test@example.com",
      "Test User",
      "en"
    );

    console.log("English password reset email test result:", result);

    if (result) {
      console.log("✅ English password reset email sent successfully!");
    } else {
      console.log("❌ Failed to send English password reset email");
    }

    return result;
  } catch (error) {
    console.error("Error testing English password reset email:", error);
    return false;
  }
}

async function testPasswordResetEmailTurkish() {
  console.log("Testing password reset email (Turkish)...");

  try {
    const result = await emailService.sendPasswordResetEmail(
      "test@example.com",
      "Test Kullanıcı",
      "tr"
    );

    console.log("Turkish password reset email test result:", result);

    if (result) {
      console.log("✅ Turkish password reset email sent successfully!");
    } else {
      console.log("❌ Failed to send Turkish password reset email");
    }

    return result;
  } catch (error) {
    console.error("Error testing Turkish password reset email:", error);
    return false;
  }
}

async function testAllPasswordResetEmails() {
  console.log("🧪 Starting comprehensive password reset email tests...\n");

  const englishResult = await testPasswordResetEmailEnglish();
  console.log("");

  const turkishResult = await testPasswordResetEmailTurkish();
  console.log("");

  console.log("📊 Test Summary:");
  console.log(
    `English template test: ${englishResult ? "✅ PASSED" : "❌ FAILED"}`
  );
  console.log(
    `Turkish template test: ${turkishResult ? "✅ PASSED" : "❌ FAILED"}`
  );

  const allPassed = englishResult && turkishResult;
  console.log(
    `\n🎯 Overall result: ${
      allPassed ? "✅ ALL TESTS PASSED" : "❌ SOME TESTS FAILED"
    }`
  );

  return allPassed;
}

// run every test if the file is executed from cmd
// npx ts-node src/tests/test-password-reset-email.ts
if (require.main === module) {
  testAllPasswordResetEmails();
}

export {
  testPasswordResetEmailEnglish,
  testPasswordResetEmailTurkish,
  testAllPasswordResetEmails,
};
