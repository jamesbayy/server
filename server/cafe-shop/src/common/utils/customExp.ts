
import {HttpException, HttpStatus} from '@nestjs/common';
export class CustomException extends HttpException {
    constructor(errMsg:string,errCode?:number) {
      super(errMsg, HttpStatus.OK);
    }
  }