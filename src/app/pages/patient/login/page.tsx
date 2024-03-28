export default function PatientLogin() {
  return (
    <>
      <main className=" text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">Login as a patient</h1>
          <span className="text-xs opacity-80">
            check your details before you login!
          </span>
        </div>
        <form
          action=""
          className="w-80 flex flex-col gap-1 text-white font-medium"
        >
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-3 text-xs rounded-full bg-white bg-opacity-20 placeholder:text-gray-300"
          />
          <button
            type="submit"
            className="mt-4 bg-transparent text-white text-center text-xs w-1/3 hover:text-black hover:bg-white font-semibold p-[10px] rounded-full border-2 border-white"
          >
            Log In
          </button>
        </form>
      </main>
    </>
  );
}
