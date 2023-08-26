import React from 'react';
import { FaWindows, FaXbox, FaPlaystation, FaLinux, FaApple, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone} from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe, BsAndroid2 } from "react-icons/bs";
import platforms from "@/data/platforms";
import {Icon} from "@/components/sidebar/index";

function PlatformsList() {
    const iconsMap = {
        pc: <FaWindows />,
        android: <BsAndroid2 />,
        xbox: <FaXbox />,
        playstation: <FaPlaystation />,
        linux: <FaLinux />,
        mac: <FaApple />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />,
        nintendo: <SiNintendo />,
    }
    return (
        <div className="gap-2 flex flex-col">
            <h4 className="text-lg font-bold">Platforms</h4>
            <div className="flex flex-col gap-2">
                {platforms.map((platform, index) => (
                    <div key={platform.id} className="flex items-center gap-2">
                        <Icon>
                            { iconsMap[platform.slug] }
                        </Icon>
                        <span>{platform.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlatformsList;
