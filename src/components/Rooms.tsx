import React, { useState } from "react";
import MobileView from "./views/mobileView";
import DesktopView from "./views/desktopView";
import { IoWoman } from "react-icons/io5";
import {
  FaAirFreshener,
  FaMars,
  FaUser,
  FaUsers,
  FaVenus,
} from "react-icons/fa";
import SelectableIcon from "./uiCustom/SelectableIcon";
import {
  AirVent,
  Ban,
  BookCopy,
  Save,
  Share,
  Upload,
  User2,
  Users2Icon,
} from "lucide-react";
import GuidelinesPage from "./uiCustom/Guideline";
import IconButton from "./uiCustom/IconButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendMail } from "@/lib/mail";
import GuidelinesPagePhone from "./uiCustom/GuideLinePhone";
import TabView from "./views/tabView";
import Footer from "./Footer";

const Rooms = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [sharing, setSharing] = useState(null);
  const [ac, setAc] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");

  const handleGender = (gender: any) => {
    setSelectedGender(gender);
  };
  const handleSharing = (share: any) => {
    setSharing(share);
  };
  const handleAC = (ac: any) => {
    setAc(ac);
  };

  const payload = {
    gender: selectedGender,
    sharing: sharing,
    ac: ac,
    name,
    email,
    addressLine1: add1,
    addressLine2: add2,
  };

  const handleSendInfo = async () => {
    const emailBody = `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formatted Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .details-table {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .details-table th, .details-table td {
            padding: 10px;
            border: 1px solid #ddd;
        }
        .details-table th {
            background-color: #f4f4f4;
            text-align: left;
        }
        .details-table td {
            background-color: #ffffff;
        }
        .details-container {
            margin: 0 auto;
            max-width: 600px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .details-title {
            text-align: center;
            font-size: 1.5em;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

<div class="details-container">
    <div class="details-title">User Details</div>
    <table class="details-table">
        <tr>
            <th>Gender</th>
            <td>${payload.gender}</td>
        </tr>
        <tr>
            <th>Sharing</th>
            <td>${payload.sharing}</td>
        </tr>
        <tr>
            <th>AC</th>
            <td>${payload.ac}</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>${payload.name}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${payload.email}</td>
        </tr>
        <tr>
            <th>Address Line 1</th>
            <td>${payload.addressLine1}</td>
        </tr>
        <tr>
            <th>Address Line 2</th>
            <td>${payload.addressLine2}</td>
        </tr>
    </table>
</div>

</body>
</html>

    `;

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Accommodation Details",
          body: emailBody,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  return (
    <div>
      <MobileView>
        <div className="flex">
          <div className="flex flex-col px-12 oswald gap-3">
            <div className="flex gap-1 font-bold text-[24px]">
              <p className="text-black">Select Your</p>
              <p className="text-primary">Accomodation</p>
            </div>
            <div className="flex text-secondary">
              Select your hostel experience yourself. Select your gender, room
              type and get a Quote!
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              Gender
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={FaMars}
                isSelected={selectedGender === "male"}
                onClick={() => handleGender("male")}
              />
              <SelectableIcon
                icon={FaVenus}
                isSelected={selectedGender === "female"}
                onClick={() => handleGender("female")}
              />
            </div>
            <GuidelinesPagePhone selectedGender={selectedGender} />
            <div className="flex gap-3 font-bold text-[20px] items-center">
              Room Sharing
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={Users2Icon}
                isSelected={sharing === "two"}
                onClick={() => handleSharing("two")}
              />
              <SelectableIcon
                icon={FaUsers}
                isSelected={sharing === "three"}
                onClick={() => handleSharing("three")}
              />
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              AC / Non Ac
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={AirVent}
                isSelected={ac === "AC"}
                onClick={() => handleAC("AC")}
              />
              <SelectableIcon
                icon={Ban}
                isSelected={ac === "NonAC"}
                onClick={() => handleAC("NonAC")}
              />
            </div>
            <div className="flex my-4">
              <Dialog>
                <DialogTrigger>
                  <IconButton
                    icon={Upload}
                    text="Upload"
                    width="150px"
                    height="60px"
                    onClick={() => {
                      console.log(payload);
                    }}
                    disabled={
                      !(
                        ac !== null &&
                        selectedGender !== null &&
                        sharing !== null
                      )
                    }
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Accomodation Details</DialogTitle>
                    <DialogDescription className="">
                      <div className="flex flex-col gap-6 w-full px-4 my-6">
                        <div className="flex flex-col gap-3 w-full text-black text-[14px]">
                          <p>Name</p>
                          <input
                            type="text"
                            placeholder="Rahul..."
                            className="p-2 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col gap-3 w-full text-black text-[14px]">
                          <p>Email</p>
                          <input
                            type="text"
                            placeholder="rahul@123"
                            className="p-2 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col gap-3 w-full text-black text-[14px]">
                          <p>Address</p>
                          <input
                            type="text"
                            placeholder="Address Line 1"
                            className="p-2 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add1}
                            onChange={(e) => setAdd1(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Address Line 2"
                            className="p-2 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add2}
                            onChange={(e) => setAdd2(e.target.value)}
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <IconButton
                      icon={Share}
                      text="Send Info"
                      variant="primary"
                      width="150px"
                      height="50px"
                      onClick={() => {
                        console.log(payload);
                        handleSendInfo();
                      }}
                      disabled={!(name !== "" && email !== "" && add1 !== "")}
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </MobileView>
      <TabView>
        <div className="flex gap-12 justify-between px-12 w-screen">
          <div className="flex flex-col px-12 oswald gap-3">
            <div className="flex gap-1 font-bold text-[24px]">
              <p className="text-black">Select Your</p>
              <p className="text-primary">Accomodation</p>
            </div>
            <div className="flex text-secondary">
              Select your hostel experience yourself. Select your gender, room
              type and get a Quote!
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              Gender
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={FaMars}
                isSelected={selectedGender === "male"}
                onClick={() => handleGender("male")}
              />
              <SelectableIcon
                icon={FaVenus}
                isSelected={selectedGender === "female"}
                onClick={() => handleGender("female")}
              />
            </div>

            <div className="flex gap-3 font-bold text-[20px] items-center">
              Room Sharing
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={Users2Icon}
                isSelected={sharing === "two"}
                onClick={() => handleSharing("two")}
              />
              <SelectableIcon
                icon={FaUsers}
                isSelected={sharing === "three"}
                onClick={() => handleSharing("three")}
              />
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              AC / Non Ac
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={AirVent}
                isSelected={ac === "AC"}
                onClick={() => handleAC("AC")}
              />
              <SelectableIcon
                icon={Ban}
                isSelected={ac === "NonAC"}
                onClick={() => handleAC("NonAC")}
              />
            </div>
            <div className="flex my-4">
              <Dialog>
                <DialogTrigger>
                  <IconButton
                    icon={Upload}
                    text="Upload"
                    width="150px"
                    height="60px"
                    onClick={() => {
                      console.log(payload);
                    }}
                    disabled={
                      !(
                        ac !== null &&
                        selectedGender !== null &&
                        sharing !== null
                      )
                    }
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Accomodation Details</DialogTitle>
                    <DialogDescription className="">
                      <div className="flex flex-col gap-12 w-full px-8 my-12">
                        <div className="flex justify-between w-full">
                          <div className="flex flex-col gap-3 w-[40%] text-black text-[16px]">
                            <p>Name</p>
                            <input
                              type="text"
                              placeholder="Rahul..."
                              className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-3 w-1/2 text-black text-[16px]">
                            <p>Email</p>
                            <input
                              type="text"
                              placeholder="rahul@123"
                              className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[100%] text-black text-[16px]">
                          <p>Address</p>
                          <input
                            type="text"
                            placeholder="Address Line 1"
                            className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add1}
                            onChange={(e) => setAdd1(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Address Line 2"
                            className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add2}
                            onChange={(e) => setAdd2(e.target.value)}
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <IconButton
                      icon={Share}
                      text="Send Info"
                      variant="primary"
                      width="150px"
                      height="50px"
                      onClick={() => {
                        console.log(payload);
                        handleSendInfo();
                      }}
                      disabled={!(name !== "" && email !== "" && add1 !== "")}
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col">
            <GuidelinesPage selectedGender={selectedGender} />
          </div>
        </div>
      </TabView>
      <DesktopView>
        <div className="flex gap-12 justify-between px-12 w-screen">
          <div className="flex flex-col px-12 oswald gap-3">
            <div className="flex gap-1 font-bold text-[24px]">
              <p className="text-black">Select Your</p>
              <p className="text-primary">Accomodation</p>
            </div>
            <div className="flex text-secondary">
              Select your hostel experience yourself. Select your gender, room
              type and get a Quote!
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              Gender
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={FaMars}
                isSelected={selectedGender === "male"}
                onClick={() => handleGender("male")}
              />
              <SelectableIcon
                icon={FaVenus}
                isSelected={selectedGender === "female"}
                onClick={() => handleGender("female")}
              />
            </div>

            <div className="flex gap-3 font-bold text-[20px] items-center">
              Room Sharing
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={Users2Icon}
                isSelected={sharing === "two"}
                onClick={() => handleSharing("two")}
              />
              <SelectableIcon
                icon={FaUsers}
                isSelected={sharing === "three"}
                onClick={() => handleSharing("three")}
              />
            </div>
            <div className="flex gap-3 font-bold text-[20px] items-center">
              AC / Non Ac
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={AirVent}
                isSelected={ac === "AC"}
                onClick={() => handleAC("AC")}
              />
              <SelectableIcon
                icon={Ban}
                isSelected={ac === "NonAC"}
                onClick={() => handleAC("NonAC")}
              />
            </div>
            <div className="flex my-4">
              <Dialog>
                <DialogTrigger>
                  <IconButton
                    icon={Upload}
                    text="Upload"
                    width="150px"
                    height="60px"
                    onClick={() => {
                      console.log(payload);
                    }}
                    disabled={
                      !(
                        ac !== null &&
                        selectedGender !== null &&
                        sharing !== null
                      )
                    }
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Accomodation Details</DialogTitle>
                    <DialogDescription className="">
                      <div className="flex flex-col gap-12 w-full px-8 my-12">
                        <div className="flex justify-between w-full">
                          <div className="flex flex-col gap-3 w-[40%] text-black text-[16px]">
                            <p>Name</p>
                            <input
                              type="text"
                              placeholder="Rahul..."
                              className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-3 w-1/2 text-black text-[16px]">
                            <p>Email</p>
                            <input
                              type="text"
                              placeholder="rahul@123"
                              className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[100%] text-black text-[16px]">
                          <p>Address</p>
                          <input
                            type="text"
                            placeholder="Address Line 1"
                            className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add1}
                            onChange={(e) => setAdd1(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Address Line 2"
                            className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={add2}
                            onChange={(e) => setAdd2(e.target.value)}
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <IconButton
                      icon={Share}
                      text="Send Info"
                      variant="primary"
                      width="150px"
                      height="50px"
                      onClick={() => {
                        console.log(payload);
                        handleSendInfo();
                      }}
                      disabled={!(name !== "" && email !== "" && add1 !== "")}
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col">
            <GuidelinesPage selectedGender={selectedGender} />
          </div>
        </div>
      </DesktopView>
      <Footer />
    </div>
  );
};

export default Rooms;
