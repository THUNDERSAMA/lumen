"use client";
import { Providers } from "@/app/Providers";
import Translate from "@/app/Translate";
import { getTranslation } from "@/app/utils/TranslationUtils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";

export default function DoctorProfile() {
  return (
    <Providers>
      <App />
    </Providers>
  );
}

const App = () => {
  // const [doctor, setDoctor] = useState(null);

  // useEffect(() => {
  //   const fetchPatient = async () => {
  //     try {
  //       const response = await axios.get("/api/doctors/profile");
  //       setDoctor(response.data);
  //     } catch (error) {
  //       console.error("Error fetching doctor profile:", error);
  //     }
  //   };

  //   fetchDoctor();
  // }, []);

  // if (!doctor) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="text-white bg-purple-700 h-svh w-screen flex gap-10 flex-col justify-center items-center">
      <div className="w-80">
        <div className="inline flex justify-center item-center">
          <div className="w-[calc(20%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20 ">
            {/* <img src={patient.image} alt="Patient" className="cover" /> */}
            <img src="/demo.img" alt="Doctor" className="cover" />
          </div>
        </div>
        <h1 className="font-semibold text-2xl text-center">
          {/* {doctor.firstName} {doctor.lastName} */}
          firstName lastName
        </h1>
        <p className="text-xs opacity-80 text-center">Doctor Profile</p>
      </div>
      <div className="w-80 flex flex-col gap-1 text-white font-medium">
        <div className="w-full p-3 text-xs rounded-full bg-white bg-opacity-20">
          <p className="placeholder:text-gray-300">Email</p>
          {/* <p>{doctor.email}</p> */}
          <p>email</p>
        </div>
        <div className="w-full p-3 text-xs rounded-full bg-white bg-opacity-20">
          <p className="placeholder:text-gray-300">Phone</p>
          {/* <p>{doctor.phone}</p> */}
          <p>phone</p>
        </div>
        <div className="w-full p-3 text-xs rounded-full bg-white bg-opacity-20">
          <p className="placeholder:text-gray-300">Licence</p>
          {/* <p>{doctor.licence}</p> */}
          <p>licence</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-[calc(40%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20">
            <p className="placeholder:text-gray-300">Gender</p>
            {/* <p>{doctor.gender}</p> */}
            <p>gender</p>
          </div>
          <div className="w-[calc(60%-0.1rem)] p-3 text-xs rounded-full bg-white bg-opacity-20">
            <p className="placeholder:text-gray-300">Aadhaar Card</p>
            {/* <p>{doctor.aadhaar}</p> */}
            <p>aadhaar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
