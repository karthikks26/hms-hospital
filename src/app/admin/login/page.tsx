"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useAppStore();
  const handleLogin = async () => {
    try {
      const response = await apiClient.post(ADMIN_API_ROUTES.LOGIN, {
        email,
        password,
      });
      if (response.data.userInfo) {
        setUserInfo(response.data.userInfo);
        console.log(response.data.userInfo);
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-[80vh] flex items-center justify-center">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-center text-gray-300 italic font-bold">
              HMS
            </CardTitle>
            <CardDescription className="text-center font-bold">
              Admin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              className="my-3"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="my-3"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>
          <CardFooter className=" flex justify-center">
            <Button onClick={handleLogin}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default page;
