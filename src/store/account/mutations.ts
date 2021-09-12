import { MutationTree } from 'vuex';
import { AccountStateInterface } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  setUserId(state : AccountStateInterface, user_id: number) {
    state.user_id = user_id;
  },
  setName(state : AccountStateInterface, name: string) {
    state.name = name;
  },
  setAuthenticated(state : AccountStateInterface, authorized: boolean) {
    state.authorized = authorized;
  },
  setAdmin(state : AccountStateInterface, admin: boolean) {
    state.admin = admin;
  },
  setToken(state : AccountStateInterface, token: string) {
    state.token = token;
  }
};

export default mutation;
