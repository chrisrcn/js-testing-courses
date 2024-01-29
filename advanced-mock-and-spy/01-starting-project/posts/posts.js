import { sendDataRequest } from '../util/http.js';
import {validateFormObject, validateNotEmpty} from '../util/validation.js';

export function savePost(postData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}

export function extractPostData(form) {
  const title = form.get('title');
  const content = form.get('content');

  validateFormObject(form, 'The form doesnt contain any values');
  validateNotEmpty(title, 'A title must be provided.');
  validateNotEmpty(content, 'Content must not be empty!');

  return { title, content };
}
