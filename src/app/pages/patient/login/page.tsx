export default function PatientLogin() {
  return (
    <>
      <main className=" text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">Login as a doxtor</h1>
          <span className="text-xs opacity-80">
            check your details before you login!
          </span>
        </div>
        <form action="" className=" text-black w-80 flex flex-col gap-1">
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            className="p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <button
            type="submit"
            className=" mt-4 text-center text-xs w-full text-black bg-white font-semibold p-3 rounded-full outline-black outline outline-2"
          >
            Log In
          </button>
        </form>
      </main>
    </>
  );
}
