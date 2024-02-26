"use client";

import React , { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/use-search";

let tempdocs = [
    {
        _id:"2",
        title:"Untitled",
        icon: "",
    },
    {
        _id:"2",
        title: "sample",
        icon: "",
    },
];

const SearchCommand = () => {
    const {user} = useUser();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    const toggle = useSearch((store) => store.toggle);
    const isOpen = useSearch((store) => store.isOpen);
    const onClose = useSearch((store) => store.onClose);
    
    useEffect(() => {
        setIsMounted(true);
    } , []);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggle();
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down)
    }, [toggle]);

    if (!isMounted) {
        return null;
    };

  return (
    <CommandDialog open={isOpen} onOpenchange={onClose}>
     <CommandInput placeholder={`Search ${user?.fullName}'s Notion`}/>
     <CommandList>
        <CommandEmpty>
            No results found.
        </CommandEmpty>
        <CommandGroup heading="documents">
            {tempdocs.map((document)=>(
                <CommandItem
                key ={document._id}
                value ={`${document._id}-${document.title}`}
                title= {document.title}
                >
                {document.icon ? ( <p className="mr-2 text-[18px]" >{document.icon}</p> ):(<File className="mr-2 h-4 w-4"/>)}
                <span>{document.title}</span>
                </CommandItem>
            ))}
        </CommandGroup>
     </CommandList>
    </CommandDialog>
  )
}

export default SearchCommand;

