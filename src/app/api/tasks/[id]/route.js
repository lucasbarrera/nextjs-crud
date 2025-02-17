import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const { id } = await params;
  const oneTask = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ oneTask });
}
export async function PUT(request, { params }) {
  const { id } = await params;
  const data = await request.json();
  const updatedTask = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: data,
  });
  return NextResponse.json({ updatedTask });
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const removeTask = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json({ removeTask });
  } catch (error) {
    console.error(MessageEvent);
  }
}
