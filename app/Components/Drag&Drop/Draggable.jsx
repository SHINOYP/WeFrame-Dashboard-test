import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className="flex bg-[#211A75] p-2 md:p-4 mb-2  rounded-xl cursor-pointer md:min-h-[200px] h-fit w-[150px] md:min-w-[300px]"
      style={style}
      {...listeners}
      {...attributes}
      suppressHydrationWarning={true}
      aria-describedby="DndDescribedBy-1"
    >
      {children}
    </div>
  );
}
