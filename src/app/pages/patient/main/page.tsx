"use client";
import { decrypt } from "@/app/middleware/checkAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useCookies } from "next-client-cookies";

export default function Main() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [blurValue, setBlurValue] = useState(0);
  interface UserData {
    user: {
      firstName: string;
      lastName: string;
      phone: number;
      m_id: string;
      a_id: string;
    };
    expires: string;
    iat: number;
    exp: number;
  }
  const [localValue, setlocalValue] = useState<any[]>([]);
  const session = Cookies.get("session");
  async function checking() {
    if (!session) {
      router.push("/home");
    } else {
      setlocalValue(await decrypt(session));
      //console.log(await decrypt(session));
    }
  }
  useEffect(() => {
    checking();
  }, []);
  //const session = Cookies.get("session");

  const firstName = (localValue["user"] as { firstName: string }).firstName;
  console.log(firstName);
  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setBlurValue(Math.min(1, scrollTop / 50));
      //   console.log(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className={`fixed z-30 ${
          toggleMenu ? "top-0 shadow-lg" : " top-[-272px]"
        } w-screen bg-white p-4`}
      >
        <button onClick={() => setToggleMenu(false)}>
          <Image
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSklEQVR4nO2awU4TURSGv5WDCw0mCu5k6QJXuNSdgZhoZFngGYiEt0BcaDQxbn0EtVHegBjXQgsrkBKMuBYhHHOTQ9KUmWk7c+6dO4Q/+ZM2bc+cP/+d23POHbjExcUNYBZYBZrAJvAHOFK61xv6mfvOM2CUSJAAC8AacALIkHS/+QLMa6zguAosA3sFks/iT2AJGAkl4jGwbSigl1vAjE8BzvrXHgX08oM6b4px4HtAEaL8BoxZiZhQu6UitjWHUril26hUzG3gdlERIxUtJ8lZZoW26HcRJC89fFNki5VIOT2oCGdfK4KEJYNbg/5pLntK4ACYAh4YxHo+iBt7nkRM6jXuG8Tb7XfjL3gWManvLeLO5QlZMxbxC7inse8C+4axm3n9xEkNnBDlMXA9TchsTZyQLj5JE/KyJk5IF1+kCWnWyAlRfkwT0q6RE6J0Be05HNbICem67jkclQg4FdgJUf690EIODZdWp8ql1arhzb4RavvtVLH9rhoFD+nMSugSpROyRBmtWdH4L6todPhqfDGfznwmB/Me7PflTCNPSKJT8dhb3R3gCn2w5EHImRgn4qFBrMV+Is5ciWFMKhlsDzNxnIkgYUnhKfCIIfE2gsSlh68ogEQHxxIJ1we5wbNwM6JjhXFKYsKgDS7DFnAHI4xVtMzW9bDJy2HoaSAR732fvU97XmqbRbbYokh0tL9rKMCVHYtVPQGR6FS8qbPYYZM/1iq2UWZrtYbrDZ7qGPOT9tO/ux6qca9/aHu6ok3RNfMsLkEc+A+TWzlJWK35FAAAAABJRU5ErkJggg=="
            }
            height={45}
            width={45}
            alt="back"
          />
        </button>
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link href={""}>Option1</Link>
          </li>
          <li>
            <Link href={""}>Option2</Link>
          </li>
          <li>
            <Link href={""}>Option3</Link>
          </li>
          <li>
            <Link href={""}>Option4</Link>
          </li>
          <li>
            <Link href={""}>Option5</Link>
          </li>
        </ul>
      </section>
      <nav
        className="fixed z-20 flex items-center w-screen gap-2 p-4"
        style={{
          backgroundColor: `rgba(255 255 255 / ${blurValue})`,
          boxShadow: `0 2px 4px 0 rgba(0 0 0 / ${blurValue / 10})`,
        }}
      >
        <button onClick={() => setToggleMenu(true)}>
          <Image
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNklEQVR4nO2azUocURCFv1XGLJQREs1OnyOaXVACEV368wwhg2+hZpGQQMg2j5A4RN9AxLVxRldqNkGz9g9LLlQgTLqnu3puT5eDBw409Mztc/pWV9+q2/CAwcUosABsAE3gAPgDXCrD8U89F34zD9RxghqwAmwDN4AYGf7zA1jWsfqOx8Aq8KuA+DSeAg1gqF8mXgFHEQ108hCYLdNAmPoPJRro5Fed+agYB/b6aEKUu8BYLBOTOt1SEduqoSc81TQqFfMIeFbUxFBF4SRdwqxQiv7sQLx08GORFCtOOZPXRJi+lgPBksLDvC/NVQdiJYNv88zGqQOhksGTrAd/xYFIycmlbka2HQiUnAzlQGo9YVmKPyc+pgzXvwZGkgZZMN6R6RKMvDBqmEsa5J2DcBEj15OMNB0IEyO/JRlpOxAmRoYF7X84dyBMjPydZOTSOEjVWUuAixhGPGSti4EOrZYDYWJkaPgNbvrdcCBMjFxLMjJ/D7PW66RB6sZFY7hobEwbrn+VtmgM2HIQLpKTm93uyLIDgZKTi4NS6j7KitOGA6GSwTdZJv7Oioc2qaSwbek4zjoQLAm8BV5ixCcHwqWD7ymAmjaOxQl38jzgaXjiaFthnB4xWXEZ3AImiISxisJsRzebStkMve2TiS9l773PlBxqB0VSbFHUtLV/EtHAsb6xK/kCoqZd8ab2Yq3ir3UVu9hLao2NEe3Fhjbmd62nz/75qCYc72t5uqZF0XB0FQ/AB+4Avh/z0Htx8AEAAAAASUVORK5CYII="
            }
            height={50}
            width={50}
            alt="menu"
          />
        </button>
        <input
          type="text"
          placeholder="Search on Rxkeep"
          className="h-[46px] px-3 font-light text-sm text-left border-[1.5px] border-black rounded-full bg-transparent"
        />
      </nav>
      <main className="relative mainMain h-full w-screen flex flex-col gap-4 p-4">
        {/* <nav className="fixed w-screen h-20 border-t-orange-600 border-t-8 flex items-center justify-around">
        <h1 className="font-extrabold text-3xl text-blue-900">
          R<sub>x</sub> <span className="text-2xl font-black">KEEP</span>
        </h1>
        <ul className="flex gap-8">
          <li className="hover:text-orange-700">
            <Link href={""}>Option1</Link>
          </li>
          <li className="hover:text-orange-700">
            <Link href={""}>Option2</Link>
          </li>
          <li className="hover:text-orange-700">
            <Link href={""}>Option3</Link>
          </li>
          <li className="hover:text-orange-700">
            <Link href={""}>Option4</Link>
          </li>
          <li className="hover:text-orange-700">
            <Link href={""}>Option5</Link>
          </li>
        </ul>
      </nav> */}

        <section className="flex flex-col gap-4 mt-12">
          <div className="flex flex-col m-10 mx-2">
            <span className="mb-4 text-4xl">Good Morning,</span>
            <span className="font-medium text-5xl">{firstName}</span>
          </div>
        </section>
        <section className="flex w-full aspect-square gap-4 text-white">
          <div className="relative flex-1 bg-red-300 rounded-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-sm drop-shadow-sm">Prescriptions</span>
              <h1 className="text-6xl font-bold drop-shadow-sm">102</h1>
            </div>
            <Image
              src={"/prescriptions.svg"}
              height={500}
              width={500}
              alt="prescriptions"
              className="absolute z-0 bottom-[-18.5px]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative flex-1 bg-green-300 rounded-xl">
              <div className="absolute top-4 left-4 z-10">
                <span className="text-sm drop-shadow-sm">Doctors</span>
                <h1 className="text-6xl font-bold drop-shadow-sm">6</h1>
              </div>
              <Image
                src={"/doctors.svg"}
                height={500}
                width={750}
                alt="doctors"
                className="absolute z-0 bottom-[-10px]"
              />
            </div>
            <div className="relative flex-1 bg-orange-300 rounded-xl">
              <div className="absolute top-4 left-4 z-10">
                <span className="text-sm drop-shadow-sm">Medicines</span>
                <h1 className="text-6xl font-bold drop-shadow-sm">69</h1>
              </div>
              <Image
                src={"/medicines.svg"}
                height={500}
                width={500}
                alt="medicines"
                className="scale-75 absolute z-0 bottom-[-20px] right-[-20px]"
              />
            </div>
          </div>
        </section>
        <section className="w-full aspect-square bg-blue-300 rounded-xl"></section>
      </main>
    </>
  );
}
