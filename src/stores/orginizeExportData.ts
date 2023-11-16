import { defineStore } from 'pinia';
import { convertADToSolar } from 'src/helper/convert-AD-to-solar';
import { DetailsDataType, eachDutyType } from 'src/type/task-activite-type';
export const useOrginize = defineStore('orginize', {
  actions: {
    pdfOrginizeAllData(res: DetailsDataType) {
      const temp: string[][] = [];

      res.map((el: eachDutyType) => {
        if (el.taskActiviteDescription.length == 0) {
          el.taskActiviteDescription = 'به پایان نرسیده';
        }

        temp.push(
          [
            `شماره تلفن : ${el.user.phoneNumber}`,
            '',
            `نام و نام خانوادگی : ${el.user.label}`,
          ],
          [
            `توضیحات تسک : ${el.task.taskDescription}`,
            `تاریخ شروع : ${convertADToSolar(el.taskActiviteCreateDate)}`,
            `نام تسک : ${el.task.label}`,
          ],
          [
            `توضیحات پایانی : ${el.taskActiviteDescription}`,
            `تاریخ پایان : ${convertADToSolar(el.taskActualEndDate)}`,
            `تاریخ مهلت : ${convertADToSolar(el.taskActiviteEndDate)}`,
          ]
        );
      });
      return temp;
    },
    pdfOrginizeHistoryTask(res: DetailsDataType) {
      const temp: string[][] = [];
      res.map((el: eachDutyType) => {
        if (el.taskActiviteDescription.length == 0) {
          el.taskActiviteDescription = 'به پایان نرسیده';
        }

        temp.push([
          `${el.taskActiviteDescription}`,
          `${convertADToSolar(el.taskActualEndDate)}`,
          `${convertADToSolar(el.taskActiviteEndDate)}`,
          `${convertADToSolar(el.taskActiviteCreateDate)}`,
          `${el.task.label}`,
          `${el.user.label}`,
        ]);
      });
      return temp;
    },
    pdfOrginizeActiveTask(res: DetailsDataType) {
      const temp: string[][] = [];
      res.map((el: eachDutyType) => {
        temp.push([
          `${el.task.taskDescription}`,
          `${convertADToSolar(el.taskActiviteEndDate)}`,
          `${convertADToSolar(el.taskActiviteCreateDate)}`,
          `${el.task.label}`,
          `${el.user.label}`,
        ]);
      });
      return temp;
    },
    pdfOrginizeAllTask(res: DetailsDataType) {
      const temp: string[][] = [];
      res.map((el: eachDutyType) => {
        if (el.taskActiviteDescription.length == 0) {
          el.taskActiviteDescription = 'به پایان نرسیده';
        }

        temp.push([
          `${el.taskActiviteDescription}`,
          `${convertADToSolar(el.taskActualEndDate)}`,
          `${convertADToSolar(el.taskActiviteEndDate)}`,
          `${convertADToSolar(el.taskActiviteCreateDate)}`,
          `${el.task.label}`,
          `${el.user.label}`,
        ]);
      });
      return temp;
    },
  },
});
