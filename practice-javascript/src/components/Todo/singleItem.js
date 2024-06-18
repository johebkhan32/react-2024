
export default function SingleItem({
  title,
  isChecked = false,
  pending,
  completed,
  setPending,
  setCompleted,
}) {

  const handleChecks = () => {
    if (!isChecked) {
      setPending(pending.filter(item => item !== title));
      setCompleted([...completed, title]);
    } else {
      setCompleted(completed.filter(item => item !== title));
      setPending([...pending, title]);
    }
  };

  return (
    <div className="single-item">
      {title}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChecks}
      />
    </div>
  );
}