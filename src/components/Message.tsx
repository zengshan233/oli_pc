import { message } from 'antd';

const key = 'message';


const showLoading = (text: string) => {
    message.loading({ content: text, key });
}

const showSuccess = (text: string) => {
    message.success({ content: text, key, duration: 2 });
}


const showError = (text: string) => {
    message.error({ content: text, key, duration: 2 });
}

export { showLoading, showSuccess, showError };