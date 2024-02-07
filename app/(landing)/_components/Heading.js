"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";

const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();

  
  return (
    <div className="max-w-3xl space-y-4 pt-0">
      <h1 className="text-3xl sm:text-5xl ms:text-6xl font-bold">
        Your  Ideas, Documents, & Plans.Unified. welcome to <span className='underline'>DocLinker</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium" >
      DocLinker is the Connected workspace where better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center"> 
          <Spinner/>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter DocLinker
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
       {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get DocLinker free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading
