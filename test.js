import { getMalaysianSolatTimesBasedOnDate, LocationCode } from './index.js'; // Replace with the correct path
async function runTests() {
    const code = LocationCode.Perlis; // Example zone code
    const date = new Date('2024-10-25'); // Example date
    // Test Case 1: Successful response
    const result = await getMalaysianSolatTimesBasedOnDate(code, date);
    console.log('Test Case 1: Successful response', result);
}
runTests();
