"use client";

import React from "react";

import { Inter } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "src/lib/apolloClient";
import "@/styles/global.scss";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>HolidaySearch</title>
        <meta
          name="description"
          content="HolidaySearch by Ben Sheridan-Edwards"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ApolloProvider client={apolloClient}>
          <div className="mx-auto max-w-screen-lg">{children}</div>
        </ApolloProvider>
      </body>
    </html>
  );
}
