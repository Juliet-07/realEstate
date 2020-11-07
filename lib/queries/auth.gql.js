import { gql } from "@apollo/client";

export const SIGN_UP_USER = gql`
  mutation onAddUser(
    $fullName: String!
    $email: String!
    $phone: String!
    $password: String!
    $accountType: accountType!
    $canVote: Boolean
    $beInformed: Boolean
    $offlinePetition: Boolean
    $state: String
    $constituency: String
    $district: String
  ) {
    addUser(
      data: {
        fullName: $fullName
        email: $email
        phone: $phone
        password: $password
        accountType: $accountType
        canVote: $canVote
        beInformed: $beInformed
        offlinePetition: $offlinePetition
        state: $state
        constituency: $constituency
        district: $district
      }
    )
  }
`;

export const LOGIN_USER = gql`
  mutation onUserLogin($password: String!, $emailOrPhone: String!) {
    loginUser(data: { password: $password, emailOrPhone: $emailOrPhone })
  }
`;

export const LOGIN_ADMIN = gql`
  mutation onAdminLogin($password: String!, $emailOrPhone: String!) {
    adminLoginUser (data: {
      emailOrPhone: $emailOrPhone,
      password: $password
    }) 
  }
`;

export const LOGOUT_USER = gql`
  mutation {
    logout
  }
`;

/*===================== FORGOT PASSWORD =======================*/
export const FORGOT_PASSWORD = gql`
  mutation onForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

/*===================== RESET PASSWORD =======================*/
export const RESET_PASSWORD = gql`
  mutation onResetPassword($password: String!, $token: String!) {
    resetPassword(data: { password: $password, token: $token })
  }
`;
