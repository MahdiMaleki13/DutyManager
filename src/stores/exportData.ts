import { defineStore } from 'pinia';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const useExport = defineStore('export', {
  actions: {
    async exportdataWithDetails(data: string[][]) {
      const doc = new jsPDF('p', 'pt', 'letter');
      doc.setFont('Amiri Regular');
      doc.textWithLink('تمام دیوتی ها با جزئیات', 150, 10, 'center');

      autoTable(doc, {
        styles: {
          cellWidth: 'auto',
          font: 'Amiri Regular',
          halign: 'right',
        },
        // head: [['', '', '']],
        body: data,
      });

      doc
        .save('table.pdf', {
          returnPromise: true,
        })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    },
    async exportdataActive(data: string[][]) {
      const doc = new jsPDF();
      doc.setFont('Amiri Regular');
      doc.textWithLink('دیوتی های فعال', 150, 10, 'center');
      autoTable(doc, {
        styles: {
          cellWidth: 'auto',
          font: 'Amiri Regular',
          halign: 'right',
        },
        head: [['تاریخ مهلت', 'تاریخ شروع', 'نام دیوتی', 'نام کاربر']],
        body: data,
      });

      doc
        .save('table.pdf', {
          returnPromise: true,
        })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    },
    async exportdataHistory(data: string[][]) {
      const doc = new jsPDF();
      doc.setFont('Amiri Regular');
      doc.textWithLink('دیوتی های تمام شده', 150, 10, 'center');
      autoTable(doc, {
        styles: {
          cellWidth: 'auto',
          font: 'Amiri Regular',
          halign: 'right',
        },
        head: [
          [
            'توضیحات',
            'تاریخ پایان',
            'تاریخ مهلت',
            'تاریخ شروع',
            'نام دیوتی',
            'نام کاربر',
          ],
        ],
        body: data,
      });

      doc
        .save('table.pdf', {
          returnPromise: true,
        })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    },
    async exportdataAll(data: string[][]) {
      const doc = new jsPDF();
      doc.setFont('Amiri Regular');
      doc.textWithLink('تمام دیوتی ها', 150, 10, 'center');
      autoTable(doc, {
        styles: {
          cellWidth: 'auto',
          font: 'Amiri Regular',
          halign: 'right',
        },
        head: [
          [
            'توضیحات',
            'تاریخ پایان',
            'تاریخ مهلت',
            'تاریخ شروع',
            'نام دیوتی',
            'نام کاربر',
          ],
        ],
        body: data,
      });

      doc
        .save('table.pdf', {
          returnPromise: true,
        })
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
    },
  },
});
