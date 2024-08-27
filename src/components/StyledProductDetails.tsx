import React from "react";
import { Truck, NotepadText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const StyledProductDetails = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <Truck className="text-[#2505d8]" />
          Delivery Options
        </h2>
        <form className="flex items-center mb-4">
          <Input
            type="email"
            placeholder="Pincode"
            className="flex-grow rounded-r-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-l-none">
            Check
          </Button>
        </form>
        <ul className="text-gray-600 space-y-2">
          <li>✓ 100% Genuine Product Assurity</li>
          <li>✓ COD Might be available to your location</li>
          <li>✓ 7 Days Product Exchange & Returns</li>
        </ul>
      </div>

      <Separator className="my-6" />

      <div>
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <NotepadText className="text-[#2505d8]" />
          Product Details
        </h2>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {[
            ["Brand", "Fujifilm"],
            ["Model", "Fujifilm X-T4"],
            ["Camera Type", "DSLR"],
            ["Sensor Type", "APS-C X-Trans CMOS 4"],
            ["Resolution", "26.1 Megapixels"],
            ["Lens Mount", "Fujifilm X-Mount"],
            ["ISO Range", "160-12800 (Expandable to 80-51200)"],
            ["Shutter Speed", "1/8000 sec to 30 sec"],
            [
              "Continuous Shooting Speed",
              "Up to 15 fps (Mechanical Shutter) / 20 fps (Electronic Shutter)",
            ],
            [
              "Autofocus",
              "Advanced Hybrid Autofocus System with 425 focus points",
            ],
            ["Video Recording", "4K UHD at 60fps, Full HD at 240fps"],
            ["Viewfinder", "3.69-million-dot OLED Electronic Viewfinder (EVF)"],
            [
              "LCD Screen",
              "3.0-inch vari-angle touchscreen with 1.62 million dots",
            ],
            [
              "Image Stabilization",
              "5-axis in-body image stabilization (IBIS)",
            ],
            [
              "Connectivity",
              "Wi-Fi, Bluetooth, USB Type-C, HDMI Output, 3.5mm Microphone Jack",
            ],
            ["Battery Life", "Approx. 600 shots per charge"],
            ["Weight", "Approx. 607g (including battery and memory card)"],
            ["Build", "Weather-sealed body with magnesium alloy construction"],
          ].map(([key, value]) => (
            <React.Fragment key={key}>
              <dt className="font-semibold text-gray-700">{key}:</dt>
              <dd className="text-gray-600">{value}</dd>
            </React.Fragment>
          ))}
        </dl>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Special Features:</h3>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
            <li>Film Simulation Modes (e.g., Velvia, Classic Chrome)</li>
            <li>Dual SD card slots for extended storage</li>
            <li>High-resolution digital image stabilization</li>
            <li>High-speed burst mode for capturing fast-moving subjects</li>
            <li>Eye and face detection autofocus</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StyledProductDetails;
