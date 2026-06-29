export const getDataById = <T extends { id: string }>(data: T[], id: string) =>
  data.find((item) => item.id === id);

export const getInitials = (fullName: string): string => {
  const names = fullName.trim().split(/\s+/);

  if (!names.length) return "";

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return (
    names[0].charAt(0) +
    names[names.length - 1].charAt(0)
  ).toUpperCase();
};

export const getAvatarColor = (fullName: string): string => {
  const colors = [
    "#EF4444", // red
    "#F97316", // orange
    "#EAB308", // yellow
    "#22C55E", // green
    "#06B6D4", // cyan
    "#3B82F6", // blue
    "#8B5CF6", // violet
    "#EC4899", // pink
  ];

  const hash = fullName
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[hash % colors.length];
};