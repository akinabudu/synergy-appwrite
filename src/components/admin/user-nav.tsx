'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { SettingsMenu } from "@/lib/data/settings"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "../ui/use-toast"
import { Account, Client } from "appwrite"
  


  export function UserNav({username,email}:{username:string,email:string}) {
    const router = useRouter();
    const [avatarUrl, setAvatarUrl] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();
    const client = new Client();
    const account = new Account(client);
    client
      .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`) // Your API Endpoint
      .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_ID}`); // Your project ID
  
    const onSignout = () => {
      const promise = account.deleteSession("current");
  
      promise.then(
        function (response) {
          // setTimeout(() => {
          toast({
            title: "Signing-Out.",
            description: "You've been signed out.",
          });
          // setIsLoading(false);
          // }, 3000)
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    };

    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" alt={username} />
              <AvatarFallback className="text-gray-800 hover:font-bold">{username}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {SettingsMenu.map((item)=>(
              <DropdownMenuItem key={item.title}>
                <Link href={item.href} 
                >
              {item.title}
                </Link>
              {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
            </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/"} onClick={()=>onSignout()}>
            Log out
            </Link>
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  