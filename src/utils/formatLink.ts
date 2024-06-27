function formatString(input: string): string {
  // Convert the input string to lowercase
  let lowerCaseString = input.toLowerCase();

  // Replace blank spaces with dashes
  let formattedString = lowerCaseString.replace(/\s+/g, "-");

  return formattedString;
}

export default formatString;
