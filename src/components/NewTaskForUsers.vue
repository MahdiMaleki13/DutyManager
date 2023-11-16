<template>
  <div>
    <div class="row text-center items-center justify-center">
      <div class="column dir-rtl justify-center height-70 width-70">
        <br />
        <q-card class="bg-transparent no-shadow column">
          <q-card class="bg-transparent no-shadow">
            <span class="text-h4">ثبت دیوتی برای کاربر</span>
          </q-card>
          <div class="row q-mt-md">
            <q-card-section class="col q-pa-sm">
              <q-select
                outlined
                v-model="userName"
                :options="usersOption"
                class="custom-select"
              ></q-select>
            </q-card-section>
            <q-card-section class="col q-pa-sm">
              <q-select
                outlined
                v-model="taskName"
                :options="tasksOption"
                class="custom-select"
              ></q-select>
            </q-card-section>
            <div class="col">
              <q-card-section class="q-pa-sm">
                <q-input
                  class="custom-input"
                  outlined
                  v-model="taskName.taskEndDay"
                  placeholder="مهلت"
                  disable
              /></q-card-section>
            </div>
          </div>
          <q-card-section class="q-pa-sm">
            <q-input
              class="custom-input"
              outlined
              v-model="taskName.taskDescription"
              type="textarea"
              placeholder="توضیحات"
              disable
          /></q-card-section>
        </q-card>
        <q-card
          class="bg-transparent no-shadow row items-center justify-center q-mt-md"
        >
          <q-btn
            @click="assignment(userName.id, taskName.taskID)"
            class="text-main-color q-px-xl q-pa-md dir-rtl text-body1 text-weight-bold"
            label="ثبت"
            :disable="isDisabled"
          />
        </q-card>
        <q-card class="bg-transparent no-shadow">
          <q-card-section
            v-if="res == 204"
            class="bg-transparent text-green no-shadow row items-center justify-center"
          >
            موفقیت آمیز بود
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, nextTick, onMounted, ref } from 'vue';
import { getAllUser } from 'src/api/service/userService';
import { getAllTask } from 'src/api/service/taskService';
import { createAssignment } from 'src/api/service/assignmentService';
export default {
  name: 'RegisterNewTask',
  setup() {
    let dutyname = ref();
    let deadline = ref();
    let description = ref('');
    let userName = ref('کاربر');
    let taskName = ref('دیوتی');
    let usersOption = ref();
    let tasksOption = ref();
    let res = ref();
    let rendered = ref(true);
    onMounted(async () => {
      usersOption.value = await getAllUser();
      tasksOption.value = await getAllTask();
    });

    async function assignment(userID, taskID) {
      res.value = await createAssignment(userID, taskID);
      if (res.value == 204) {
        userName.value = 'کاربر';
        taskName.value = 'دیوتی';
      }
      usersOption.value = await getAllUser();
      tasksOption.value = await getAllTask();
      setTimeout(async () => {
        res.value = 'none';
        rendered.value = !rendered.value;
        await nextTick();
        rendered.value = !rendered.value;
      }, 2000);
    }

    const isDisabled = computed(() => {
      if (userName.value === 'کاربر' || taskName.value === 'دیوتی') {
        return true;
      } else {
        return false;
      }
    });

    return {
      assignment,
      isDisabled,
      usersOption,
      tasksOption,
      userName,
      taskName,
      description,
      deadline,
      dutyname,
      res,
      rendered,
    };
  },
};
</script>

<style lang="sass">
.q-virtual-scroll__content
  direction: rtl
  background-color: #dedac9
  color: #8e8d8a

.custom-input input
  color: #8e8d8a

.custom-select input
  color: red
.q-field__control
 direction: rtl

.custom-input textarea
  max-height: 150px
  color: #8e8d8a

.q-select__dialog
  background: #dedac9
.custom-select .q-field__native
  color: #8e8d8a
.q-field--filled .q-field__control:after
  background: red !important

.custom-input .q-field__control:after
  color: #e85a4f

.custom-input .q-field__control :before
  color: #8e8d8a
  transition: none !important
  border: solid 2px #d8c3a5
  border-color: #d8c3a5

.custom-select .q-field__control:before
  color: #8e8d8a
  transition: none !important
  border: solid 2px #d8c3a5
  border-color: #d8c3a5

.custom-select .q-field__control:after
  color: #e85a4f

.q-menu
  color: #8e8d8a
  background-color: #dedac9
  direction: rtl
</style>
