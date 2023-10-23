"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { uid } from "uid/secure";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
// import { CreateMagicUrl, GetOAuth } from "../appwrite/login";
import { useToast } from "@/components/ui/use-toast";
import { Client, Account } from "appwrite";



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
});

const providers = [
  { name: "Github", icon: Icons.gitHub, id: "github" },
  { name: "Gmail", icon: Icons.google, id: "google" },
];
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const userId = uid();
  const client = new Client();
const account = new Account(client);

client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_URL}`) // Your API Endpoint
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_ID}`); // Your project

  async function providerClick(provider: string) {
    setIsLoading(true);
    account.createOAuth2Session(provider, `/dashboard`);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignInSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      const promise = account.createMagicURLSession(userId, values.email, `/dashboard`);

  promise.then(
    function (response) {
      setTimeout(() => {
        toast({
          title: "Link has been sent to your email.",
          description: "Check your Email for Login.",
        });
        setIsLoading(false);
      }, 3000)
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
      // await CreateMagicUrl(userId, values.email,`${process.env.NEXT_PUBLIC_APPWRITE_CALLBACK}/dashboard`).finally(() =>
      //   setTimeout(() => {
      //     toast({
      //       title: "Link has been sent to your email.",
      //       description: "Check your Email for Login.",
      //     });
      //     setIsLoading(false);
      //   }, 3000)
      // );
    },
  });

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {providers.map((provider) => (
        <Button
          key={provider.name}
          onClick={() => providerClick(provider.id)}
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <provider.icon className="mr-2 h-4 w-4" />
          )}{" "}
          {provider.name}
        </Button>
      ))}
    </div>
  );
}
