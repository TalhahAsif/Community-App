import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Loginform() {
  return (
    <section className="w-screen flex justify-center">
      <Card className="w-1/3 h-[400px] flex flex-col justify-around">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col">
            <div className="grid w-full items-center gap-8">
              <div className="flex flex-col space-y-4">
                <Label htmlFor="name">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </div>
            </div>
            <CardFooter className="mt-10">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
