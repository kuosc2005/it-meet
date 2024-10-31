import ku_Lawn from '@/assets/images/ku_Lawn.png';
import drone from '@/assets/images/drone.webp';
import logo from '@/assets/images/logo.png';
import ShootingStar from './ShootingStar';
import './css/landing.css';

export default function LandingComponent() {
	return (
		<div className="relative w-screen h-screen overflow-hidden bg-[#171A23]">

			<div className="relative h-full w-full">
				
				<img src={ku_Lawn} alt="KU Lawn" className=" w-full h-full object-contain object-top"/>
				
				<div className="absolute top-[10%] right-[5%] sm:top-[10%] sm:right-[2%] md:top-[15%] md:right-[3%] lg:top-[20%] lg:right-[4%] xl:top-[30%] xl:right-[5%] animate-drone ">
					<img src={drone} alt="Drone" className="w-[40px] sm:w-[50px] md:w-[75px] lg:w-[100px] xl:w-[150px] transition-transform duration-300 ease-in-out"/>
				</div>

				<div className="absolute top-[3%] sm:top-[5%] md:top-[5%] lg:top-[5%] xl:top-[12%] w-full flex justify-center animate-logo">
					<img src={logo} alt="Logo" className="w-[40px] sm:w-[55px] md:w-[90px] lg:w-[130px] xl:w-[180px] transition-transform duration-300 ease-in-out"/>
				</div>

				<div className='absolute top-[2%] sm:top-[4%] md:top-[4%] lg:top-[4%] xl:top-[12%] w-full justify-center flex flex-col items-center animate-date'>
					<p className='font-rubik text-xs sm:text-sm md:text-xl lg:text-3xl xl:text-4xl font-semibold leading-none tracking-normal uppercase text-white'>DECEMBER</p>
					<p className='font-rubik text-sm sm:text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold leading-none tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] xl:tracking-[7px] uppercase bg-gradient-to-r from-[#369FFF] via-[#3BD0A3] to-[#14C58F] bg-clip-text text-transparent'>5 & 6</p>
				</div>
				 
			   
			</div>
			<ShootingStar />  
		</div>
	);
}