"use client"
import React from 'react';
import Link from "next/link";
import { BsFillStarFill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import useRequestApi from "@/hooks/useRequestApi";
import PlatformsList from "@/components/sidebar/platforms-list";

export const Icon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-stone-500 rounded-md p-1.5 text-white">
            {children}
        </div>
    )
}

function Sidebar() {
    return (
        <div className="flex flex-col gap-6 col-span-3 border-r min-h-screen border-l-slate-950">
            <Link href="/">
                <h4 className="text-lg font-bold">Home</h4>
            </Link>
            <Link href="/">
                <h4 className="text-lg font-bold">Reviews</h4>
            </Link>
            <div className="gap-2 flex flex-col">
                <h4 className="text-lg font-bold">New Releases</h4>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Icon>
                            <BsFillStarFill />
                        </Icon>
                        <span>Last 30 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon>
                            <FaFireFlameCurved />
                        </Icon>
                        <span>This Week</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon>
                            <TbPlayerTrackNextFilled />
                        </Icon>
                        <span>Next Week</span>
                    </div>
                </div>
            </div>
            <PlatformsList />
        </div>
    )
}

export default Sidebar;
