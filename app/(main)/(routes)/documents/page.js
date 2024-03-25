"use client";

import React from 'react'
import Image from "next/image";
import { useUser } from '@clerk/clerk-react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {useRouter} from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from 'sonner';

const Documentspage = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>{
      router.push(`/documents/${documentId}`)
    });
    toast.promise(promise,{
      loading: "Creating a new node...",
      success: "New note created!",
      error: "Failed to create an new note",
    })
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300" 
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
    
    <h2 className="text-lg font-medium">
      Welcome to {user?.firstName}&apos;s CloudNote Pro
    </h2>
    <Button onClick={onCreate}>
      <PlusCircle className='h-4 w-4 mr-2'/>
      Create a New note
    </Button>
    </div>
  )
}

export default Documentspage
