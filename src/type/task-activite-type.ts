export type taskActiviteType = {
  taskActiviteID: string;
  userID: string;
  taskID: string;
  taskActiviteStatus: boolean;
  taskActiviteCreateDate: number;
  taskActiviteEndDate: number;
  taskActualEndDate: number;
  taskActiviteDescription: string;
};
export type user = { id: string; label: string };
export type task = { taskID: string; label: string };

export type DetailsDataType = [
  {
    user: { label: string; phoneNumber: string };
    task: { label: string; taskDescription: string };
    taskActiviteCreateDate: number;
    taskActualEndDate: number;
    taskActiviteEndDate: number;
    taskActiviteDescription: string;
  }
];
export type eachDutyType = {
  user: { label: string; phoneNumber: string };
  task: { label: string; taskDescription: string };
  taskActiviteCreateDate: number;
  taskActualEndDate: number;
  taskActiviteEndDate: number;
  taskActiviteDescription: string;
};
