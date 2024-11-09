import drone from '@/assets/images/drone.webp'
import logo from '@/assets/images/logo.webp'
import ShootingStar from './ShootingStar'
import './css/Landing.css'

export default function LandingComponent() {
  return (
    <div className="relative min-h-[40vh] sm:h-[400px] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[100vh] h-auto overflow-hidden bg-[url('@/assets/images/ku_Lawn.webp')] bg-cover bg-center">
      <div className="absolute top-[10%] right-[5%] sm:top-[10%] sm:right-[2%] md:top-[15%] md:right-[3%] lg:top-[20%] lg:right-[4%] xl:top-[30%] xl:right-[5%] animate-drone ">
        <img
          src={drone}
          alt="Drone"
          className="w-[50px] sm:w-[70px] md:w-[90px] lg:w-[110px] xl:w-[150px] transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="absolute top-[8%] sm:top-[5%] md:top-[5%] lg:top-[5%] xl:top-[9%] w-full flex justify-center animate-logo">
        <img
          src={logo}
          alt="Logo"
          className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[130px] xl:w-[180px] transit0ion-transform duration-300 ease-in-out"
        />
      </div>

      <div className="absolute top-[8%] sm:top-[4%] md:top-[4%] lg:top-[4%] xl:top-[9%] w-full space-y-2 sm:space-y-1 justify-center flex flex-col items-center animate-date">
        <p className="font-rubik text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-none tracking-normal uppercase text-white">
          DECEMBER
        </p>
        <p className="font-rubik text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] xl:tracking-[7px] uppercase bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F] bg-clip-text text-transparent">
          5 & 6
        </p>
      </div>
      <ShootingStar />
    </div>
  )
}
