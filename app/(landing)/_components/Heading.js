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
      Take Note Anywhere, Anytime. welcome to <span>CloudNote Pro</span>
      </h1>
      
      {isLoading && (
        <div className="w-full flex items-center justify-center"> 
          <Spinner/>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter CloudNote Pro
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
       {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get CloudNote Pro free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading
