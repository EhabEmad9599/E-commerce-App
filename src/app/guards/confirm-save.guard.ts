import { CanDeactivateFn } from '@angular/router';

export const confirmSaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
