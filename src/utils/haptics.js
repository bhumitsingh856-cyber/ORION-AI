const handleToggle = () => {
  if (typeof window !== "undefined" && navigator.vibrate) {
    navigator.vibrate(50);
  }
};
export default handleToggle;