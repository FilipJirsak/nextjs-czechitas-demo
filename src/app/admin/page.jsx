"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

export default () => {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("../../components/cms/CMSPage"), {
        ssr: false,
      }),
    []
  );

  return useMemo(() => <CMSPage key="admin" />, [CMSPage]);
};
