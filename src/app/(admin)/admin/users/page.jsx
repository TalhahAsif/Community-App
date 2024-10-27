import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const usersData = [
  {
    id: 1,
    profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Talha Asif",
    gmail: "Talha@gmail.com",
    status: "active",
    location: "Karachi",
    eventcreated: 2,
    eventjoin: 10,
  },
  {
    id: 2,
    profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Alyan",
    gmail: "Alyan@gmail.com",
    status: "Not Active",
    location: "Karachi",
    eventcreated: 1,
    eventjoin: 40,
  },
  {
    id: 3,
    profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Katrina",
    gmail: "Katrina@gmail.com",
    status: "active",
    location: "Karachi",
    eventcreated: 2,
    eventjoin: 12,
  },
  {
    id: 4,
    profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Alia",
    gmail: "alia@gmail.com",
    status: "active",
    location: "Karachi",
    eventcreated: 4,
    eventjoin: 11,
  },
];

export default function Users() {
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-3xl">Users</h1>

      <Table>
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">fullname</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Location</TableHead>
            <TableHead className="text-center">Event Created</TableHead>
            <TableHead className="text-center">Event Join</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map((users) => {
            return (
              <TableRow key={users.id}>
                <TableCell className="font-medium text-center">
                  {users.id}
                </TableCell>
                <TableCell className="font-medium flex justify-center">
                <Image src={users.profileImage} width={40} height={40} alt={users.fullname}/>
                </TableCell>
                <TableCell className="font-medium text-center">
                  {users.fullname}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {users.gmail}
                </TableCell>
                <TableCell className="text-center">{users.status}</TableCell>
                <TableCell className="text-center">{users.location}</TableCell>
                <TableCell className="text-center">
                  {users.eventcreated}
                </TableCell>
                <TableCell className="text-center">{users.eventjoin}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
