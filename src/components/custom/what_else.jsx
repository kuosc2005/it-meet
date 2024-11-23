import React, { useState, useEffect } from "react";
import { databases, storage, DATABASE_ID, PROJECT_BUCKET_ID, EXPECT_COLLECTION_ID } from "@/config/appwrite.js";

export default function Faq_what_else() {
    const [open, setOpen] = useState(false);
    const [targetId, setTargetId] = useState(null);
    const [data, storeData] = useState([]);
    const [ImageSrc, setImageSrc] = useState("");
    const [size, setSize] = useState(1000);

    const list_document = async () => {
        try {
            const response = await databases.listDocuments(
                `${DATABASE_ID}`,
                `${EXPECT_COLLECTION_ID}`,
            );
            storeData(response.documents);

            if (response.documents.length > 0) {
                setTargetId(response.documents[0].id);
                setOpen(true);
            }
        } catch (error) {
            console.log("While requesting Data from database", error);
        }
    }

    const list_images = async (id) => {
        try {
            const response = storage.getFileView(`${PROJECT_BUCKET_ID}`, id);
            setImageSrc(response.href);
        } catch (error) {
            console.log("While requesting Image from database", error);
        }
    }

    useEffect(() => {
        list_document();

        function handleResize() {
            setSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (targetId) {
            list_images(targetId);
        }
    }, [targetId]);

    const image_component = () => {
        return (
            <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden p-10">
                <div className="sm:w-[18rem] md:w-[22rem] min-[400px]:h-[17rem] h-[21rem]  sm:h-[24rem] md:h-[30rem]  rounded-md shadow-[-10px_10px_#369fff]" >
                    <img
                        src={ImageSrc}
                        alt=""
                        className="object-cover h-full w-full rounded-md"
                    />
                </div>
            </div>
        )
    }

    const renderSvg = (svg) => {
        return (
            <div
                className="svg-icon text-white object-contain flex items-center justify-center"
                style={{
                    width: '30px', height: '30px'
                }}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        )
    }

    const handleClick = (e) => {
        e.preventDefault();
        let parent = e.target.closest(".parent_NodeElement");
        if (parent.id == targetId) {
            setOpen(!open);
        } else {
            setTargetId(parent.id);
            setOpen(true);
        }
    }

    const components = (id, heading, paragraph, svg) => (
        <div key={id}>
            <div
                id={id}
                key={id}
                className={`
                    w-auto h-auto px-4 py-5 cursor-pointer rounded-lg border-[2.5px] border-[#14C58F] hover:bg-[#14C58F] space-y-5
                    ${id == targetId && open ? "bg-[#14C58F]" : "bg-transparent"} parent_NodeElement`}
                onClick={(e) => handleClick(e)}
            >
                <div className="flex justify-between align-baseline items-center space-x-3 sm:space-x-5">
                    <h1 className="font-medium text-lg min-[350px]:text-xl sm:text-2xl">{heading}</h1>
                    <div className="p-2 bg-[#14C58F] rounded-full">
                        {renderSvg(svg)}
                    </div>
                </div>
                {id == targetId && open && (
                    <div>
                        <p>{paragraph}</p>
                    </div>
                )}
            </div>
            {open && id == targetId && size <= 768 ? image_component() : ""}
        </div>
    )

    return (
        <div className="w-full text-pretty h-full bg-[#171A23] text-white p-10 md:p-16 cursor-default">
            <div className="flex justify-center items-center font-bold text-xl sm:text-2xl md:text-3xl pb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                    What Else Can You Expect at IT Meet?
                </h1>
            </div>

            <div className="md:flex justify-center items-center">
                {/*Left side */}
                <div className="h-full w-full min-[500px]:px-16 md:px-0 lg:px-20 overflow-hidden">
                    <div className="flex-col space-y-9 justify-center md:justify-end items-center pl-0 ">
                        {data.map(({ heading, paragraph, id, svg }) =>
                            components(id, heading, paragraph, svg)
                        )}
                    </div>
                </div>

                {/*right side */}
                {size > 768 ? image_component() : ""}
            </div>
        </div>
    );
}
