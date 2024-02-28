import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Activity } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col text-2xl justify-center items-center text-grafont-semibold b">
        <Activity />
        HMS HOSPITAL
      </div>
      <div className="absolute top-4 right-6">
        <DropdownMenu>
          <DropdownMenuTrigger>SignUp/LogIn</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Who are you?</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Doctor</DropdownMenuItem>
            <DropdownMenuItem>Patient</DropdownMenuItem>
            <Link href="/admin/login">
              {" "}
              <DropdownMenuItem>Admin</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
