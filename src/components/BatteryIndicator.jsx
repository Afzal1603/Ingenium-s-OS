"use client";

import { div, span } from "framer-motion/client";
import {
  BatteryCharging,
  BatteryMedium,
  BatteryLow,
  BatteryFull,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const BatteryIndicator = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: 1,
    charging: false,
  });

  useEffect(() => {
    let battery;

    const updateBatteryInfo = () => {
      setBatteryInfo({
        level: battery.level,
        charging: battery.charging,
      });
    };

    navigator.getBattery().then((b) => {
      battery = b;

      // Set initial state correctly
      setBatteryInfo({
        level: b.level,
        charging: b.charging,
      });

      b.addEventListener("levelchange", updateBatteryInfo);
      b.addEventListener("chargingchange", updateBatteryInfo);
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", updateBatteryInfo);
        battery.removeEventListener("chargingchange", updateBatteryInfo);
      }
    };
  }, []);

  const { level, charging } = batteryInfo;

  if (charging)
    return (
      <span title="Charging">
        <BatteryCharging color="white" />
      </span>
    );
  if (level >= 0.75)
    return (
      <span title={`${(level * 100).toFixed(0)}%`}>
        <BatteryFull color="white" />
      </span>
    );
  if (level >= 0.2)
    return (
      <span title={`${(level * 100).toFixed(0)}%`}>
        {" "}
        <BatteryMedium color="white" />
      </span>
    );
  return <BatteryLow color="white" />;
};

export default BatteryIndicator;
