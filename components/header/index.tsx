import React from 'react';
import {ThemeToggle} from "@/components/header/theme-toggle";
import {Gamepad, Menu} from "lucide-react";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Header() {
    return (
        <header className="flex items-center gap-8 md:gap-12 py-4 mb-8">
            <div className="flex items-center flex-1 gap-3 md:gap-6">
                <Gamepad size={36}/>
                <Input placeholder="Search" className="flex-1"/>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
                <span>Game</span>
                <Menu className="block md:hidden" size={28}/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <span className="cursor-pointer hidden md:block">My Library</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            Overview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Wishlists
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            My Games
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ThemeToggle/>
            </div>
        </header>
    )
}

export default Header;
