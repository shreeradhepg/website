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
  Mail,
  Phone,
  Save,
  Send,
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
import { FaWhatsapp } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { RiParentLine } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";

const Rooms = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [sharing, setSharing] = useState(null);
  const [child, setChild] = useState(null);
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
  const handleAC = (child: any) => {
    setChild(child);
  };

  const payload = {
    gender: selectedGender,
    sharing: sharing,
    consulting: child,
    name,
    phone: email,
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
            <td>${payload.consulting}</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>${payload.name}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${payload.phone}</td>
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
  const handleSendWhatsApp = () => {
    // Convert payload to a URL-encoded string
    const message = Object.entries(payload)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    // Construct the WhatsApp URL with the message
    const phoneNumber = "918401238114";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;

    // Open the URL in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Example usage

  return (
    <div>
      <div className="capitalize  bg-primary  mx-12 sm:text-center  my-2 sm:my-5 mb-[20px] sm:mb-[60px] shadow-2xl p-4 rounded-md text-white  ">
        <strong>Notice : </strong>
        Kindly Fill Out This form if the line is busy
      </div>
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
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaMars}
                  isSelected={selectedGender === "male"}
                  onClick={() => handleGender("male")}
                />
                Male
              </div>
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaVenus}
                  isSelected={selectedGender === "female"}
                  onClick={() => handleGender("female")}
                />
                Female
              </div>
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
              You are Parent / Student
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={RiParentLine}
                isSelected={child === "parent"}
                onClick={() => handleAC("parent")}
              />
              <SelectableIcon
                icon={PiStudent}
                isSelected={child === "student"}
                onClick={() => handleAC("student")}
              />
            </div>
            <GuidelinesPagePhone selectedGender={selectedGender} />
            <div className="flex my-4">
              <Dialog>
                <DialogTrigger>
                  <IconButton
                    icon={Send}
                    text="Contact Us"
                    width="150px"
                    height="60px"
                    onClick={() => {
                      console.log(payload);
                    }}
                    disabled={
                      !(
                        child !== null &&
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
                          <p>Mobile Number</p>
                          <input
                            type="text"
                            placeholder="93523***21"
                            className="p-2 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex gap-3">
                      <IconButton
                        icon={Phone}
                        text="WhatsApp"
                        variant="primary"
                        width="150px"
                        height="50px"
                        onClick={() => {
                          console.log(payload);
                          handleSendWhatsApp();
                        }}
                        disabled={!(name !== "" && email !== "")}
                      />
                    </div>
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
            <div className="flex flex-col text-center gap-2">
              <SelectableIcon
                icon={FaMars}
                isSelected={selectedGender === "male"}
                onClick={() => handleGender("male")}
              />
              Male
            </div>
            <div className="flex flex-col text-center gap-2">
              <SelectableIcon
                icon={FaVenus}
                isSelected={selectedGender === "female"}
                onClick={() => handleGender("female")}
              />
              Female
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
              You are Parent / Student
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaMars}
                  isSelected={selectedGender === "male"}
                  onClick={() => handleGender("male")}
                />
                Male
              </div>
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaVenus}
                  isSelected={selectedGender === "female"}
                  onClick={() => handleGender("female")}
                />
                Female
              </div>
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
                        child !== null &&
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
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex gap-3">
                      <IconButton
                        icon={Phone}
                        text="WhatsApp"
                        variant="primary"
                        width="150px"
                        height="50px"
                        onClick={() => {
                          console.log(payload);
                          handleSendWhatsApp();
                        }}
                        disabled={!(name !== "" && email !== "")}
                      />
                    </div>
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
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaMars}
                  isSelected={selectedGender === "male"}
                  onClick={() => handleGender("male")}
                />
                Male
              </div>
              <div className="flex flex-col text-center gap-2">
                <SelectableIcon
                  icon={FaVenus}
                  isSelected={selectedGender === "female"}
                  onClick={() => handleGender("female")}
                />
                Female
              </div>
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
              You are Parent / Student
            </div>
            <div className="flex gap-8">
              <SelectableIcon
                icon={RiParentLine}
                isSelected={child === "parent"}
                onClick={() => handleAC("parent")}
              />
              <SelectableIcon
                icon={PiStudent}
                isSelected={child === "student"}
                onClick={() => handleAC("student")}
              />
            </div>
            <div className="flex my-4">
              <Dialog>
                <DialogTrigger>
                  <IconButton
                    icon={Send}
                    text="Conatct us"
                    width="150px"
                    height="60px"
                    onClick={() => {
                      console.log(payload);
                    }}
                    disabled={
                      !(
                        child !== null &&
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
                            <p>Mobile Number</p>
                            <input
                              type="text"
                              placeholder="9843***215"
                              className="p-3 bg-transparent border-solid border-primary border-[1px] text-primary placeholder:text-black rounded-xl focus:outline-0"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex gap-3">
                      <IconButton
                        icon={Phone}
                        text="WhatsApp"
                        variant="primary"
                        width="150px"
                        height="50px"
                        onClick={() => {
                          console.log(payload);
                          handleSendWhatsApp();
                        }}
                        disabled={!(name !== "" && email !== "")}
                      />
                    </div>
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
