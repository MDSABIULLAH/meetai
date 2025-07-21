"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; 

export default function Home() {
  const { data: session } = authClient.useSession() 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      }
    });
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      }
    });
  }

  if (session) {  
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>
          Logged in as {session.user.name}
        </p>
        <Button onClick={() => authClient.signOut()}>
          Sign out
        </Button>
      </div>
    )
  }
 
  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    
        <Button onClick={onSubmit}>
          Create user
        </Button>
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

