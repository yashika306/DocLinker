
"use client";

import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import React from 'react'
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";
const Item = ({
    id,
    label,
    onClick,
    icon: Icon,
    active,
    documentIcon,
    isSearch,
    level = 0,
    onExpand,
    expanded,
  }) => {
    const { user } = useUser();
    const router = useRouter();
    const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
    role="button"
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : "12px",
      }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary "
      )}
    >
     {id &&<div></div>}
     {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
      )}
     <span className="truncate pr-5 text-primary ">{label}</span>
     {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      )}
      {id &&<div></div>}
   </div>
  )
}

export default Item 