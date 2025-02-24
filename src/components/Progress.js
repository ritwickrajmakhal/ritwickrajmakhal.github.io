export default function Progress({ progress }) {
  return (
    <div className="mb-3 col-sm-6">
      <label htmlFor="html">{progress.label}</label>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow={progress.value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar"
          style={{ width: progress.value + "%" }}
        >
          {progress.value}%
        </div>
      </div>
    </div>
  );
}
