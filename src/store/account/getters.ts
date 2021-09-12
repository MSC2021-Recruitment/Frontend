import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

const getters: GetterTree<AccountStateInterface, StateInterface> = {
  userId(state: AccountStateInterface): number {
    return state.user_id;
  },
  name(state: AccountStateInterface): string {
    return state.name;
  },
  authenticated(state: AccountStateInterface): boolean {
    return state.authorized;
  },
  admin(state: AccountStateInterface): boolean {
    return state.admin;
  },
  token(state: AccountStateInterface): string {
    return state.token;
  }
};

export default getters;
