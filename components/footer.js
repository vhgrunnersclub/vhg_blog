import React from "react";
import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Link from 'next/link';

export default function Footer(props) {
  return (
    <Container id="footer" className="footer mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} VHG Runners Club.
        All rights reserved.
      </div>
      <ThemeSwitch />
    </Container>
  );
}
