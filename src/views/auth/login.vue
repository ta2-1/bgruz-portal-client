<template>
  <AuthLayout>
    <div class="text-center mb-10">
      <h1 class="text-xl font-bold">Войти</h1>
    </div>
    <AAlert v-if="error" message="Неверный логин или пароль" type="error" show-icon class="mb-10" closable />

    <AForm layout="vertical" :model="formValue" @finish="login" class="w-full flex flex-col gap-[10px]"
           hideRequiredMark>
      <AFormItem
        name="login"
        label="Логин"
        :rules="[{ required: true, message: 'Поле обязательно для заполнения' }]"
        class="w-full"
      >
        <AInput v-model:value="formValue.login" placeholder="john@gmail.com" size="large" />
      </AFormItem>

      <AFormItem
        name="password"
        :rules="[{ required: true, message: 'Поле обязательно для заполнения' }]"
        label="Пароль"
        class="w-full"
      >
        <InputPassword
          v-model:value="formValue.password"
          placeholder="Введите пароль"
          type="password"
          size="large"
          show-password
          @keyup.enter="login"
        />
      </AFormItem>

      <AButton type="primary" html-type="submit" class="w-full mt-[10px]" size="large" :loading="isLoading">
        Вход
      </AButton>
    </AForm>
  </AuthLayout>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useTokenService } from '@/composable/use-token-service';
import authService from '@/service/auth.service';
import { useUserStore } from '@/stores/use-user.store';
import { InputPassword } from 'ant-design-vue';
import AuthLayout from '@/views/auth/auth-layout.vue';

defineOptions({
  name: 'LoginForm',
});

const router = useRouter();
const formValue = reactive({
  login: '',
  password: '',
});

const userStore = useUserStore();
const tokenService = useTokenService();

const { error, execute, isLoading, state } = useAsyncState(
  () => authService.login({ login: formValue.login, password: formValue.password }),
  { access_token: '' },
  { immediate: false },
);

const login = async () => {
  await execute();
  if (!error.value) {
    tokenService.setAccessToken(state.value.access_token);
    userStore.setUser({ login: formValue.login });
    router.push('/');
  }
};
</script>

