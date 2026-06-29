export default function Toast({ message, visible }) {
  return (
    <div className={`toast${visible ? ' show' : ''}`} id="toast">
      <i className="fas fa-check-circle"></i>
      <span id="toastMessage">{message}</span>
    </div>
  );
}
