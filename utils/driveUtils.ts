/**
 * Extracts the File ID from a Google Drive URL.
 */
export const getDriveId = (input: string): string => {
  if (!input) return '';

  // Regex to find the file ID in a typical Drive URL
  // Matches alphanumeric characters, underscores, and hyphens
  const regex = /(?:file\/d\/|id=)([-\w]+)/;
  const match = input.match(regex);

  if (match && match[1]) {
    return match[1];
  }
  
  // If no match but it looks like an ID (long alphanumeric string), return it
  if (/^[-\w]{20,}$/.test(input)) {
      return input;
  }

  return '';
};

/**
 * Returns the embeddable preview URL for a Google Drive video.
 */
export const getDriveEmbedUrl = (input: string): string => {
  const fileId = getDriveId(input);
  if (!fileId) return '';
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

/**
 * Returns a high-quality thumbnail URL for a Google Drive file.
 * Note: This works for public files.
 */
export const getDriveThumbnailUrl = (input: string): string => {
  const fileId = getDriveId(input);
  if (!fileId) return '';
  // =s1920 requests a width of 1920px (High Quality)
  return `https://lh3.googleusercontent.com/d/${fileId}=s1920`;
};

/**
 * Validates if a string looks roughly like a Google Drive link or ID
 */
export const isDriveLink = (input: string): boolean => {
  return input.includes('drive.google.com') || /^[-\w]{20,}$/.test(input);
};