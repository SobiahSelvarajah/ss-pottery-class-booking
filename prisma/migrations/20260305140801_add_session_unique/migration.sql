/*
  Warnings:

  - A unique constraint covering the columns `[studioId,date,timeSlot]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Session_studioId_date_timeSlot_key" ON "Session"("studioId", "date", "timeSlot");
