/**
 * Formats a phone number into a readable format (e.g. +1 980 776 63 66).
 * @param phoneNumber Phone number in its pure form (for example, +19807766366).
 * @returns The formatted number or the original if formatting failed.
 */
export function formatPhoneNumber(phoneNumber: string): string {
    const cleaned = phoneNumber.replace(/\D/g, ''); // Remove all non-numeric characters
  
        // Regular expression:
        // ^(\d{1}) - 1 digit at the beginning (e.g. country code)
        // (\d{3}) - 3 digits
        // (\d{3}) - 3 more digits
        // (\d{2}) - 2 digits
        // (\d{2})$ - 2 more digits before the end of the line
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
    }
    return phoneNumber;
  }