import React from 'react'
import { useState } from 'react'
import HelloTiger from '@/assets/images/hello-tiger-faq.png'
import Faq_what_else from "../components/custom/what_else.jsx"
import { useEffect } from 'react'
import { databases, DATABASE_ID, FAQ_COLLECTION_ID } from "@/config/appwrite.js";
import { IoIosArrowDown } from "react-icons/io";



export default function FAQ() {

  const [clickedKey, setclickedKey] = useState(0);
  const [clickedEachQuestion, setclickedEachQuestion] = useState(0);
  const [isclicked, setclicked] = useState(false);
  const [data, storeData] = useState("");

  const list_document = async () => {
    try {

      const response = await databases.listDocuments(
        `${DATABASE_ID}`,
        `${FAQ_COLLECTION_ID}`,
      );
      storeData(JSON.parse(response.documents[0].data));

    } catch (error) {
      console.log("While requesting Data from database of collection FAQ", error);
    }
  }

  function handleClick(each) {
    if (each.id == clickedEachQuestion) {
      setclicked(!isclicked);
    } else {
      setclickedEachQuestion(each.id);
      setclicked(true);
    }
  }

  useEffect(() => {
    list_document()
  }, [])


  return (
    <>
      <div id="faqs" className=" w-full text-pretty h-full text-white p-10  md:py-0 cursor-default bg-[#171a23] box-border nowrap">

        <div className="flex flex-col justify-between items-center font-bold text-xl sm:text-2xl md:text-3xl overflow-hidden mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            FAQs
            <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
          </h1>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-start h-full w-full md:h-[450px] gap-10 '>
          {/*Left part  */}
          <div className='flex md:flex-col md:justify-center items-start min-[1250px]:items-end lg:pr-10  h-auto w-full md:w-[40%] gap-x-8 md:gap-7 overflow-x-scroll flex-row no-scrollbar text-[18px] md:text-[24px] font-medium'>
            {
              Object.keys(data).map((value, index) =>
                <div
                  key={index}
                  id={index}
                  tabIndex={0}
                  className={`leftItem min-w-28 cursor-pointer ${clickedKey == index ? "bg-gradient-to-l text-transparent bg-clip-text from-[#369fff] to-[#12dc9f]" : ""} `}
                  onClick={(e) => {
                    setclickedKey(Number(e.target.closest(".leftItem").id));
                  }}
                >
                  <div className='inline-flex items-center h-full'>
                    <p className='flex order-2 min-[1250px]:order-1'>{value}</p>

                    <img
                      src={`${HelloTiger} `}
                      alt="__"
                      height={50}
                      width={50}
                      className={`hidden md:flex order-1 min-[1250px]:order-2 ${clickedKey == index ? "visible" : "invisible"} `}
                    />
                  </div>
                </div>
              )
            }
          </div>


          {/* Right part */}
          <div
            className='flex flex-col md:items-start gap-14 w-full md:w-[60%] overflow-y-auto  no-scrollbar lg:pt-0  text-[18px] md:text-[24px]  font-medium'
          >
            {
              Object.values(data).map((value, id) =>
                id == clickedKey
                  ?
                  value.map(each =>
                    <div
                      className='w-full'
                      key={each.id}>
                      <div
                        id={id}
                        className='eachQuestion h-full border-b-4 border-[#369fff] w-full'
                        onClick={() => handleClick(each)}
                      >
                        <div className='flex h-full w-full '>
                          <div
                            className="text-left py-2 w-full h-full"
                            onClick={() => handleClick(each)}
                            aria-expanded={isclicked && clickedEachQuestion === each.id}
                          >
                            {each.ques}
                          </div>

                          <span>
                            <IoIosArrowDown
                              className={`transition-all duration-300 ${isclicked && clickedEachQuestion === each.id ? "rotate-180" : "rotate-0"}`}
                            />
                          </span>
                        </div>

                        {/* Answer Section */}
                        <div
                          className={`overflow-scroll no-scrollbar  w-full transition-all ease-in-out duration-200 ${isclicked && clickedEachQuestion === each.id ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
                            } `}
                        >
                          <p className="text-sm font-normal sm:text-base">{each.ans}</p>
                        </div>
                      </div >
                    </div >
                  )
                  : ""
              )
            }
          </div>


        </div>
      </div >

      <Faq_what_else />
    </>
  )
}