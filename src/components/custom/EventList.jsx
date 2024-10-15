import React from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function EventList() {
  const listData = [
    {
      id: 1,
      imgSrc: '/api/placeholder/300/300',
      title: 'KU HACKFEST',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      imgSrc: '/api/placeholder/300/300',
      title: 'EMPOWER HER',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      imgSrc: '/api/placeholder/300/300',
      title: 'AR TREASURE HUNT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      imgSrc: '/api/placeholder/300/300',
      title: 'WE SHIELD CYBER',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      imgSrc: '/api/placeholder/300/300',
      title: 'EU HACKFEST',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="flex flex-col p-6 gap-6 bg-[#171A23] min-h-screen">
      {listData.map((event) => (
        <Card key={event.id} className="bg-[#171A23] text-white border-none flex flex-row justify-between items-center p-4">
          <div className="flex-grow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl sm:text-3xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-sm">
                {event.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2 pt-4">
              <button className="bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-black px-5 py-1.5 rounded hover:bg-[#00cc99] transition-colors">
                APPLY
              </button>
              <div className="p-[1px] rounded border-none bg-gradient-to-r from-[#369FFF] to-[#14C58F]">
                <button className="bg-[#171A23] text-[#00ffbb] px-5 py-1 rounded border border-transparent hover:bg-[#00ffbb] hover:text-black transition-colors">
                  MORE
                </button>
              </div>
            </CardFooter>
          </div>
          <div className="w-24 h-24 bg-gray-500 rounded-full relative overflow-hidden flex-shrink-0">
            <img src={event.imgSrc} alt={event.title} className="w-full h-full object-cover" />
          </div>
        </Card>
      ))}
    </div>
  );
}
