export {}

declare global {
    interface String {
        /**
         * Abbreviates a string to exactly two uppercase letters.
         * - If the string has multiple words, takes the first letter of the first two words.
         * - If the string has one word, takes the first two letters.
         * - Pads with "_" if fewer than two characters are available.
         * 
         *  @returns {string} The two-letter abbreviation.
         */
        abreviate(): string;
    }
}
