import React from "react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link} from "@nextui-org/react";

export default function DropdownItemsNavigation() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className={"border-0 text-base"}
                >
                    Products
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new" className={"text-primary"} color="default">
                    <Link href={"/newProduct"} color={"foreground"}>
                        New Product
                    </Link>
                </DropdownItem>
                {/*<DropdownItem key="edit" className="text-secondary" color="secondary">Edit Product</DropdownItem>*/}
                {/*<DropdownItem key="copy" className="text-success" color="success">Update Product</DropdownItem>*/}
                <DropdownItem key="All"  color="default">
                    <Link href={"/priceCategory"} color={"foreground"}>
                       Price Category
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
