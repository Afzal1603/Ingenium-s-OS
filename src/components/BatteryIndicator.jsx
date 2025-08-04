"use client";

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

  if (charging) return <BatteryCharging color="white" />;
  if (level >= 0.75) return <BatteryFull color="white" />;
  if (level >= 0.2) return <BatteryMedium color="white" />;
  return <BatteryLow color="white" />;
};

export default BatteryIndicator;
