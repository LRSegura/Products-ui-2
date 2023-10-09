'use client'
import React from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenu,
    NavbarMenuToggle
} from "@nextui-org/react";

import DropdownItemsNavigation from "../components/DropdownItemsNavigation";


export default function Navigation() {


    return (
        <Navbar >
            <NavbarContent>
                <NavbarMenuToggle
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link color={"foreground"} href={"/"} aria-current="page">
                        <p className="font-bold text-inherit">Test</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <DropdownItemsNavigation/>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={false}>
                    <Link color={"foreground"} href="/customers" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>

            </NavbarContent>

            {/*<NavbarMenu>*/}
            {/*    {menuItems.map((item, index) => (*/}
            {/*        <NavbarMenuItem key={`${item}-${index}`}>*/}
            {/*            <Link*/}
            {/*                color={*/}
            {/*                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"*/}
            {/*                }*/}
            {/*                className="w-full"*/}
            {/*                href="#"*/}
            {/*                size="lg"*/}
            {/*            >*/}
            {/*                {item}*/}
            {/*            </Link>*/}
            {/*        </NavbarMenuItem>*/}
            {/*    ))}*/}
            {/*</NavbarMenu>*/}
        </Navbar>
    );
}
