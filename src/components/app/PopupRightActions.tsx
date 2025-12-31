

import { Button } from "@/components/ui/button";

export interface PopupAction {
  id: string;
  text: string;
  onClick?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
}

interface PopupRightActionsProps {
  actions: PopupAction[];
}

export function PopupRightActions({ actions }: PopupRightActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {actions.map(({ id, text, onClick, variant = "secondary" }) => (
        <Button
          key={id}
          variant={variant}
          className="h-[35px] w-24 cursor-pointer rounded-2xl"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}
