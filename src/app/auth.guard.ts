import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authVerify = localStorage.getItem('email');
  if (authVerify === 'john123@gmail.com') {
    return true;
  } else {
    return false;
  }
};
