import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    backgroundColor: isOver ? "" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      className="p-[0 8px 8px 8px] mr-6 min-h-screen  md:min-w-[300px] w-[150px]"
      style={style}
    >
      {children}
    </div>
  );
}
