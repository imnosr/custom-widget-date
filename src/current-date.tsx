/*!
 * Copyright 2026, Staffbase SE and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useState, useEffect } from "react";
import { BlockAttributes } from "widget-sdk";

/**
 * React Component
 */
export interface CurrentDateProps extends BlockAttributes {
    timezone?: string;

}

export const CurrentDate = ({ timezone }: CurrentDateProps): ReactElement => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    ...(timezone ? { timeZone: timezone } : {}),
  };

  const formatted = now.toLocaleString(undefined, formatOptions);

  return (
    <div style={{ fontFamily: "sans-serif"}}>
      <div style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>{formatted}</div>
    </div>
  );
};

