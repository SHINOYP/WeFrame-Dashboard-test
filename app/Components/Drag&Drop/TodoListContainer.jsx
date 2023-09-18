"use client";
import React, { useState } from "react";
import Image from "next/image";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import People from "../../assets/people.svg";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  TouchSensor,
  KeyboardSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { Progress } from "antd";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function ToDoListContainer({ initialTasks, lists }) {
  const [tasks, setTasks] = useState([...initialTasks]);
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  const onDragEnd = (event) => {
    const { over, active } = event;
    // console.log({ over, active });
    setTasks(
      tasks.map((item) => {
        if (item?.id === active?.id) {
          return {
            ...item,
            type: over?.id,
          };
        }
        // console.log(tasks);
        return item;
      })
    );
  };

  const getTasks = (type) => tasks.filter((item) => item?.type === type);

  return (
    <div className="">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
        sensors={sensors}
        autoScroll={{ threshold: { x: 0, y: 100 } }}
      >
        <div className="flex mt-10 mr-2 rounded-lg">
          {lists.map((item) => (
            <Droppable key={item} id={item}>
              <div className="flex justify-between gap-6 px-2 mb-8 md:gap-0">
                <h1 className="text-sm font-black text-white md:text-lg xl:text-xl">
                  {item}
                </h1>
                <span className="flex items-center justify-center md:pb-[10px] pb-1 lg:w-10  h-6 w-6 lg:h-10 lg:text-4xl md:text-2xl text-xl  font-black bg-active rounded-xl">
                  +
                </span>
              </div>
              {getTasks(item).map((task) => (
                <Draggable key={task?.id} id={task?.id}>
                  <div className="flex flex-col gap-2 overflow-hidden md:gap-0 justify-evenly">
                    <span className="text-xs text-green-500 lg:text-sm">
                      {task.flag}
                    </span>
                    <p className="text-white">{task.name}</p>
                    <Progress
                      percent={50}
                      className="w-full text-white lg:w-60"
                    />
                    <div className="flex items-center justify-between">
                      {" "}
                      <Image
                        src={People}
                        alt="Picture of the author"
                        className="w-10 md:w-20 lg:w-24 xl:w-28"
                      />{" "}
                      <small className="text-[9px] items-center gap-1 flex md:text-xs lg:text-sm text-gray-400">
                        <AiOutlineClockCircle /> Due in 4 days
                      </small>
                    </div>
                  </div>
                </Draggable>
              ))}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
}
