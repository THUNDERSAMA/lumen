function Alert({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) {
  function handleDecline() {
    setMessage("");
  }

  function handleAccept() {
    // write accept logic here
    setMessage("");
  }

  if (!message) {
    return null;
  }

  return (
    <main className="w-screen h-screen fixed z-50 bg-black bg-opacity-50 grid place-items-center">
      <section className="bg-white border-[1px] border-black rounded-xl w-80 max-w-[90%] flex flex-col">
        <div className="m-4 text-center">{message}</div>
        <div className="flex flex-row">
          <button
            className="flex-1 p-2 border-black border-t-[1px] border-r-[1px] rounded-bl-xl bg-green-400"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="flex-1 p-2 border-black border-t-[1px] rounded-br-xl bg-red-400"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </section>
    </main>
  );
}
export default Alert;
