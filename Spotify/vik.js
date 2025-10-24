let inputString = "_128 Chore Haryane Aale_128-(PagalWorld.Org.Im).mp3372876610/16/2025 6:52:00 AM";

// Remove all occurrences of "_128"
let updatedString = inputString.replace(/_128/g, '');

// Find the index of the hyphen and extract the substring before it (if it exists)
let hyphenIndex = updatedString.indexOf('-');
if (hyphenIndex !== -1) {
    updatedString = updatedString.substring(0, hyphenIndex);
}

// Trim spaces from the start and end of the final string (optional)
updatedString = updatedString.trim();

console.log(updatedString);
