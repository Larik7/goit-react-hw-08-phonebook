export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectErrorLogin = state => state.auth.errorLogin;

export const selectErrorReg = state => state.auth.errorRegister;