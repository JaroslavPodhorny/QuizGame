// vytvořeno pomocí ai


/**
 * This script populates your Firestore database with sample quizzes.
 * Run this from your project root: ts-node --esm src/populateDatabase.ts
 */

import { sampleQuizzes } from "./sampleQuizzes.js";
import { saveQuiz } from "./firebase_services/QuizStore.js";

async function populateDatabase() {
  console.log(`🚀 Starting to populate database with ${sampleQuizzes.length} quizzes...`);
  console.log("=" + "=".repeat(70));

  let successCount = 0;
  let failureCount = 0;

  for (const quiz of sampleQuizzes) {
    try {
      const result = await saveQuiz(quiz.id, quiz);
      if (result) {
        console.log(`✅ Successfully saved: "${quiz.title}" (ID: ${quiz.id})`);
        successCount++;
      } else {
        console.log(`❌ Failed to save: "${quiz.title}" (ID: ${quiz.id})`);
        failureCount++;
      }
    } catch (error) {
      console.log(`❌ Error saving "${quiz.title}":`, error);
      failureCount++;
    }

    // Small delay between saves to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  console.log("=" + "=".repeat(70));
  console.log(`\n📊 Population Complete!`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);
  console.log(`   📈 Total: ${sampleQuizzes.length}\n`);

  if (failureCount === 0) {
    console.log("🎉 All quizzes have been successfully added to the database!");
  } else {
    console.log(`⚠️  Some quizzes failed to save. Check the errors above.`);
  }
}

// Run the population
populateDatabase().catch((error) => {
  console.error("Fatal error:", error);
});
