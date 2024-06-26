"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { CopyIcon, Server } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin"
}

const variantMap: Record<ApiAlertProps["variant"], BadgeProps['variant']> = {
  public: "secondary",
  admin: "destructive"
}

const ApiAlert = ({ title, description, variant }: ApiAlertProps) => {

  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Api Route copied to the clipboard.")
  }

  return (
    <Alert>
      <AlertTitle className="flex items-center gap-x-2">
        <Server className="h-4 w-4" />
        {title}
        <Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant={"outline"} size={"icon"} onClick={onCopy}>
          <CopyIcon className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  )
}

export default ApiAlert