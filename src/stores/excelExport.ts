import { defineStore } from 'pinia';
import { exportFile } from 'quasar';
import * as XLSX from 'xlsx';

export const useCounterStore = defineStore('counter', {
  actions: {
    async exportdataAll(newData: any) {
      const data = [
        [
          'نام کاربر',
          'نام دیوتی',
          'تاریخ شروع',
          'تاریخ مهلت',
          'تاریخ پایان',
          'توضیحات',
        ],
      ];
      for (let i = 0; i < newData.length; i++) {
        const el = newData[i];
        data.push([
          el.userData.label,
          el.taskData.label,
          el.date.taskActiviteCreateDate,
          el.date.taskActiviteEndDate,
          el.date.taskActualEndDate,
          el.description,
        ]);
      }

      const workbook = XLSX.utils.book_new();
      workbook.Workbook = { Views: [{ RTL: true }] };
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const wscols = [{ wch: 6 }, { wch: 7 }, { wch: 10 }, { wch: 20 }];

      worksheet['!cols'] = wscols;
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      const buffer = XLSX.write(workbook, { type: 'buffer' });

      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      exportFile('report.xlsx', blob);
    },
  },
});
