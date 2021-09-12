export interface AccountStateInterface {
  user_id: number;
  name: string;
  authorized: boolean;
  admin: boolean;
  token: string;
}

function state(): AccountStateInterface {
  return {
    user_id: 0,
    name: '',
    authorized: false,
    admin: false,
    token: '',
  };
}

export default state;
