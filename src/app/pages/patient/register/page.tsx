export default function PatientReg() {
  return (
    <>
      <main className=" text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
        <div className=" w-80">
          <h1 className="font-semibold text-2xl">Register as a doctor</h1>
          <span className="text-xs opacity-80">
            make sure your details are correct!
          </span>
        </div>
        <form action="" className=" text-black w-80 flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <input
              type="text"
              id="first-name"
              placeholder="First name"
              className=" w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last name"
              className=" w-[calc(60%-0.1rem)] p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
            />
          </div>
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            className="p-3 mt-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <input
            type="phone"
            id="phone"
            placeholder="Aadhar"
            className="p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-3 mt-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            className="p-3 text-xs rounded-full bg-purple-500 placeholder:text-slate-200"
          />
          <button
            type="submit"
            className=" mt-4 text-center text-xs w-full text-black bg-white font-semibold p-3 rounded-full outline-black outline outline-2"
          >
            Register
          </button>
        </form>
      </main>
    </>
  );
}
