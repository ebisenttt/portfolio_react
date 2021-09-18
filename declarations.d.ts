
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_EMAILJS_USER_ID: string;
    readonly REACT_APP_EMAILJS_SERVICE_ID: string;
    readonly REACT_APP_EMAILJS_TEMPLATE_ID: string;
  }
}
