"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { FormWrapper } from "@/components/FormWrapper/FormWrapper";
import { PageHeaderWrapper } from "@/components/PageHeaderWrapper/PageHeaderWrapper";
import { Searchbox } from "@/components/Searchbox/Searchbox";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  function handleSubmitNavigation(event: FormEvent) {
    event.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  }

  return (
    <main className="flex flex-col items-center">
      <PageHeaderWrapper>
        <h1>
          Dream <span>destinations</span>, one search away.
        </h1>
      </PageHeaderWrapper>
      <FormWrapper onSubmitHandler={handleSubmitNavigation}>
        <Searchbox
          placeholderText="Where will you go..."
          onChangeCallback={setSearchQuery}
        />
        <Button variant="submit" fullWidth>
          Take me there
        </Button>
      </FormWrapper>
    </main>
  );
}
